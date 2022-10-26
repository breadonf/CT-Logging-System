import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";

import Link from "next/link";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import getTop10 from "~/helpers/getTop10";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30vw",
  bgcolor: "background.paper",
  boxShadow: 4,
  p: 4,
  borderRadius: "25px",
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
          <Grid container spacing={2} component={"div"}>
            <Grid item xs={12} sx={{ pb: 4 }} alignSelf="center">
              <Typography
                textAlign="center"
                id="modal-modal-title"
                variant="h5"
              >
                Prediction Table
              </Typography>
              <Divider></Divider>
            </Grid>
            <Grid xs={12} alignSelf="center">
              {top10.length ? (
                top10.map((entry) => (
                  <Grid
                    sx={{ pl: 2, pb: 1, pr: 1, pt: 1 }}
                    spacing={1}
                    container
                    alignContent="center"
                    justifyContent="center"
                  >
                    <Grid item xs={2} alignSelf="center">
                      <Chip label={entry.count} variant="outlined" />
                    </Grid>
                    <Grid item xs={2} alignSelf="center">
                      <Typography>TTP: {entry.ttp}</Typography>
                    </Grid>
                    <Grid item xs={4} alignSelf="center">
                      <Chip label={entry.protocol} variant="outlined" />
                    </Grid>
                    <Grid item xs={3} alignSelf="center">
                      <Typography>Discrepancy: {entry.distance}</Typography>
                    </Grid>
                    <Grid item xs={1} alignSelf="center">
                      <Link key={entry.count} href={`/exam/${entry.count}`}>
                        <Tooltip title="View exam detail">
                          <SearchIcon />
                        </Tooltip>
                      </Link>
                    </Grid>
                  </Grid>
                ))
              ) : (
                <></>
              )}
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
}
