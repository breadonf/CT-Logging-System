import { Button, Chip, Grid, Typography } from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import RadioGroup from "../../FormsUI/RadioGroup";
import React from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Select from "../../FormsUI/Select";
import SettingsIcon from "@mui/icons-material/Settings";
import Textfield from "../../FormsUI/Textfield";
import Toggle from "../../FormsUI/Toggle";

function CardiacSetup({ formik, numberOfSites, setNumberOfSites }) {
  return (
    <Grid container spacing={2} component={"div"} sx={{ py: 5 }}>
      <Grid item xs={12}>
        <Typography variant="h5" color="#05668D">
          <SettingsIcon sx={{ mr: 1 }} /> Setup
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <RadioGroup
          name="sedation"
          legend="Sedation"
          options={[
            { label: "Not required", value: "Not required" },
            { label: "MAC", value: "MAC" },
            {
              label: "GA with Breathing Suspension",
              value: "GA with Breathing Suspension",
            },
          ]}
        />
      </Grid>
      <Grid item xs={4}>
        <RadioGroup
          name="breathingControl"
          legend="Breathing Control"
          options={[
            { label: "Inspiration", value: "Inspiration" },
            { label: "Expiration", value: "Expiration" },
            {
              label: "No Preference",
              value: "No Preference",
            },
            {
              label: "Free",
              value: "Free",
            },
          ]}
        />
      </Grid>
      <Grid item xs={4}>
        <Textfield name="targetHR" label="Target heart rate" />
      </Grid>

      {[...Array(numberOfSites)].map((x, i) => (
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={1}
          item
          xs={12}
          key={`Site-${i}`}
        >
          <Grid item xs={1} sx={{ mt: 2 }}>
            <Chip label={`${i + 1}`} />
          </Grid>
          <Grid item xs={3} sx={{ mt: 2 }}>
            <Select
              name={`IVSite[${i}].location`}
              label="Location"
              options={{
                "": "",
                "Lower Limb": "Lower Limb",
                "Upper Limb": "Upper Limb",
              }}
            />
          </Grid>
          <Grid item xs={3} sx={{ mt: 2 }}>
            <Select
              name={`IVSite[${i}].side`}
              label="Side"
              options={{
                "": "",
                Any: "Any",
                Right: "Right",
                Left: "Left",
              }}
            />
          </Grid>
          <Grid item xs={2} sx={{ ml: 4, mt: 2 }}>
            <Toggle name={`IVSite[${i}].Diffusics`} label="Diffusics?" />
          </Grid>
          <Grid item xs={1}>
            <Button
              type="button"
              disabled={numberOfSites == 3}
              onClick={() => {
                setNumberOfSites((prev) => prev + 1);
                formik.setFieldValue("IVSite", [
                  ...formik.values.IVSite,
                  { location: [], side: [], Diffusics: false },
                ]);
              }}
            >
              <AddCircleIcon></AddCircleIcon>
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button
              type="button"
              disabled={numberOfSites < 2}
              onClick={() => {
                setNumberOfSites((prev) => prev - 1);
                formik.values.IVSite.pop();
              }}
            >
              <RemoveCircleIcon></RemoveCircleIcon>
            </Button>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default CardiacSetup;
