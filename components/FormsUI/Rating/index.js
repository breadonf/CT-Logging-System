import { Box, FormLabel, Rating } from "@mui/material";
import { useField } from "formik";
import React from "react";

const labels = {
  0.5: "Need to discuss",
  1: "Consider repeat",
  1.5: "Poor",
  2: "Marginal",
  2.5: "Ok",
  3: "Fair",
  3.5: "Above Average",
  4: "Good",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
const RatingWrapper = ({ legend, name, ...otherProps }) => {
  const [hover, setHover] = React.useState(-1);
  const [field, meta] = useField(name);

  const configRating = {
    ...field,
    ...otherProps,
    variant: "filled",
    precision: 0.5,
    getLabelText: getLabelText,
    onChangeActive: (event, newHover) => {
      setHover(newHover);
    },
  };
  const configFormLabel = {};
  if (meta && meta.touched && meta.error) {
    configFormLabel.error = true;
    configFormLabel.helperText = meta.error;
  }

  return (
    <>
      <FormLabel
        {...configFormLabel}
        component="legend"
        sx={{ fontWeight: "bold", color: "#495371" }}
      >
        {legend}
      </FormLabel>
      <Rating {...configRating} />
      {field.value !== null && (
        <Box>{labels[hover !== -1 ? hover : field.value]}</Box>
      )}
    </>
  );
};

export default RatingWrapper;
