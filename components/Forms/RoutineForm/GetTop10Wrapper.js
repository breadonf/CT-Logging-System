import { Box, Button, Grid, Modal, Typography } from "@mui/material";

import React from "react";
import getTop10 from "~/helpers/getTop10";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function GetTop10Wrapper({ formik, records }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    records.refetch();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [top10, setTop10] = React.useState([]);
  React.useEffect(() => {
    if (records.data?.length) {
      setTop10(
        getTop10(
          records.data,
          parseInt(formik.values?.rate),
          parseInt(formik.values?.weight)
        )
      );
    }
  }, [records]);
  return (
    <Grid item xs={4} alignSelf="center">
      <Button
        disabled={(formik.values.rate == "") | (formik.values.weight == "")}
        onClick={handleOpen}
        variant="contained"
        color="secondary"
        fullWidth
      >
        TTP prediction
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Prediction
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            The closest prediction is:
            {records.data?.length ? top10[0].ttp : <></>}s
          </Typography>
        </Box>
      </Modal>
    </Grid>
  );
}
