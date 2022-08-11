import React from "react";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import { Grid, Typography, Chip, Avatar } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";

function ExamDetail({ data }) {
  return (
    <Grid container spacing={2} component={"div"} sx={{ py: 5 }}>
      <Grid item xs={2} sx={{ pr: 2 }}>
        <Typography variant="h5" color="#265B67">
          <ImageSearchIcon sx={{ mr: 1 }} />
          Exam
        </Typography>
      </Grid>
      <Grid
        container
        xs={10}
        spacing={1}
        sx={{
          border: 1,
          borderRadius: 1,
          backgroundColor: "#EEEEEE",
          py: 1,
        }}
      >
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            Date: {data.Date_func.year}-{data.Date_func.month}-
            {data.Date_func.day}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            {data.urgent ? (
              <Chip
                variant="filed"
                color="warning"
                icon={<PriorityHighIcon />}
                label="Urgent case"
              />
            ) : (
              <Chip
                variant="filed"
                color="success"
                icon={<CalendarTodayIcon />}
                label="Routine case"
              />
            )}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            {data.sedation ? (
              <>
                <Chip
                  variant="filled"
                  color="success"
                  label="Sedation"
                  icon={<MedicationLiquidIcon />}
                />
                {data.sedatedBy ? <>by: {data.sedatedBy}</> : <></>}

                {data.sedationMethod ? (
                  <> | with: {data.sedationMethod}</>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <Chip variant="outlined" color="primary" label="Non-Sedation" />
            )}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="#333333">
            Region:
            {data.examType.map((examType) => (
              <Chip
                key={examType}
                variant="outlined"
                color="primary"
                label={examType}
                sx={{ mx: 1 }}
              />
            ))}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="#333333">
            Protocol:
            {data.protocol.map((protocol) => (
              <Chip
                key={protocol}
                color="success"
                label={protocol}
                sx={{ mx: 1 }}
              />
            ))}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6" color="#333333">
            kV:
            {data.kV_a.map((kV) => (
              <Chip
                key={kV}
                label={kV}
                sx={{ mx: 1 }}
                avatar={<Avatar>A</Avatar>}
                variant="outlined"
                color="primary"
              />
            ))}
            {data.kV_b.map((kV) => (
              <Chip
                key={kV}
                label={kV}
                sx={{ mx: 1 }}
                avatar={<Avatar>B</Avatar>}
                variant="outlined"
                color="secondary"
              />
            ))}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            Pitch:
            {data.pitch.map((pitch) => (
              <Chip
                key={pitch}
                color="secondary"
                variant="outlined"
                label={pitch}
                sx={{ ml: 2 }}
              />
            ))}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ExamDetail;
