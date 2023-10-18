import { Box, Button, Chip, Grid, Typography } from "@mui/material";

import AutocompleteWrapper from "../../FormsUI/AutocompleteWrapper";
import Checkbox from "../../FormsUI/Checkbox";
import DateTimePicker from "../../FormsUI/DateTimePicker";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import React from "react";
import Select from "../../FormsUI/Select";
import Textfield from "../../FormsUI/Textfield";
import examType from "../SelectItems/examType.json";
import kV_a from "../SelectItems/kV_a.json";
import kV_b from "../SelectItems/kV_b.json";
import sedatedBy from "../SelectItems/sedatedBy.json";
import sedationMethod from "../SelectItems/sedationMethod.json";

function ExamDetail({
  data,
  autocompleteOptions,
  isSuccess,
  numberOfProtocol,
  setNumberOfProtocol,
  formik,
  setSedation,
}) {
  return (
    <Grid container spacing={2} component={"div"} sx={{ py: 5 }}>
      <Grid item xs={12}>
        <Typography variant="h5" color="#05668D">
          <ImageSearchIcon sx={{ mr: 1 }} />
          Exam Detail
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <DateTimePicker
          name="Date"
          label="Exam Date"
          prepopulatedvalue={data.Date}
        />
      </Grid>
      <Grid item xs={2}>
        <Checkbox label="Yes" name="urgent" legend="Urgent?" />
      </Grid>
      <Grid item xs={2}>
        <Checkbox label="Yes" name="IR" legend="IR case?" checked={data.IR} />
      </Grid>
      <Grid item xs={4}>
        <Grid container>
          <Grid item xs={4}>
            <Checkbox
              label="Yes"
              name="sedation"
              legend="Sedation"
              dependable={setSedation}
              checked={data.sedation}
            />
          </Grid>
          {formik.values.sedation && (
            <>
              <Grid item xs={4}>
                <Select
                  name="sedatedBy"
                  label="by"
                  prepopulatedvalue={data?.sedatedBy}
                  options={sedatedBy}
                />
              </Grid>
              <Grid item xs={4}>
                <AutocompleteWrapper
                  name="sedationMethod"
                  label="using"
                  multiple
                  autocompleteOptions={sedationMethod}
                  prepopulatedvalue={data?.sedationMethod ?? []}
                />
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <AutocompleteWrapper
          multiple
          id="protocol"
          name="protocol"
          label="Protocol (Maximum 2 protcols can be selected)"
          prepopulatedvalue={data?.protocol ?? []}
          autocompleteOptions={
            isSuccess ? autocompleteOptions?.protocol ?? [] : ""
          }
        ></AutocompleteWrapper>
      </Grid>
      <Grid item xs={4}>
        <Select
          sx={{ pt: 2 }}
          name="examType"
          label="Body region"
          SelectProps={{ multiple: true }}
          prepopulatedvalue={data?.examType}
          options={examType}
        />
      </Grid>
      <Grid item xs={4} sx={{ mt: 2 }}>
        <AutocompleteWrapper
          name="kV_a"
          label="kV (Tube A)"
          multiple
          autocompleteOptions={kV_a}
          prepopulatedvalue={data?.kV_a ?? []}
        />
      </Grid>
      <Grid item xs={4} sx={{ mt: 2 }}>
        <Select
          name="kV_b"
          label="kV (Tube B)"
          SelectProps={{
            multiple: true,
            renderValue: (selected) => (
              <Box
                sx={{
                  maxHeight: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 0.5,
                }}
              >
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            ),
          }}
          grouped
          options={kV_b}
          prepopulatedvalue={data?.kV_b ?? []}
        />
      </Grid>

      {[...Array(numberOfProtocol)].map((x, i) => (
        <Grid container spacing={1} item xs={4} key={`numberOfProtocol-${i}`}>
          <Grid item xs={6} sx={{ mt: 2 }}>
            <Textfield name={`pitch[${i}]`} label="Pitch"></Textfield>
          </Grid>
          <Grid item xs={6} sx={{ mt: 2 }}>
            <Textfield name={`ctdi[${i}]`} label="CTDI"></Textfield>
          </Grid>
        </Grid>
      ))}
      {numberOfProtocol < 2 ? (
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={4}
          sx={{ mt: 2, p: 1 }}
        >
          <Grid item>
            <Button
              type="button"
              onClick={() => {
                setNumberOfProtocol((prev) => prev + 1);
              }}
            >
              Add one set of CTDI and pitch
            </Button>
          </Grid>
        </Grid>
      ) : (
        <></>
      )}

      {numberOfProtocol !== 1 ? (
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={4}
          sx={{ mt: 2 }}
        >
          <Grid>
            <Button
              type="button"
              onClick={() => {
                setNumberOfProtocol((prev) => prev - 1);
                formik.values.ctdi.pop();
                formik.values.pitch.pop(); // pop method to remove the last value
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      ) : (
        <></>
      )}
    </Grid>
  );
}

export default ExamDetail;
