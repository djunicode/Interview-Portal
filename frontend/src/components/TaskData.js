import React, { useState, useEffect } from "react";
import { Card, Divider, Grid } from "@mui/material";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const TaskData = (props) => {
  const theme = useTheme();
  const style = {
    position: "absolute",
    width: "80%",
    height: "80%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 10,
    p: 4,
  };

  const [data, setData] = useState([
    {
      id: "",
      task_question: "",
      task_description: "",
      task_resources: "",
      stack: "",
    },
  ]);
  const [open, setOpen] = useState(false);
  const [resource, setResource] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    var config = {
      method: "get",
      url: "https://unicodeinterview.pythonanywhere.com/accounts/tasks/",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    };
    console.log(localStorage.getItem("token"));
    axios(config)
      .then(function (response) {
        console.log(response.data[0].stack);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(props.stack);
  console.log(data);
  // console.log(data[0].stack);
  return (
    <div>
      <Grid>
        {data.map((item, index) => (
          <>
            <Card
              key={index}
              sx={{
                display: "flex",
                mb: 5,

                boxShadow:
                  " inset 0 -3em 3em rgba(0,0,0,0.1), 0 0  0 2px rgb(255,255,255), 0.3em 0.3em 1em rgba(0,0,0,0.3)",
              }}
              onClick={() => {
                setResource(item.task_resources);
                handleOpen();
              }}
            >
              <Box
                sx={{
                  width: { xs: 31, md: 80 },
                  height: { xs: 31, md: 80 },
                  borderRadius: 50,
                  backgroundColor: "#8985f2",
                  textAlign: "center",
                  verticalAlign: "center",
                  mt: 2,
                  ml: 2,
                }}
              >
                <Typography
                  component="div"
                  variant="h2"
                  sx={{
                    color: "white",
                    width: { xs: 31, md: 80 },
                    height: { xs: 31, md: 80 },
                    borderRadius: 50,
                    mt: { xs: 1, md: 2 },
                  }}
                >
                  {item.stack == props.stack ? item.id : "01"}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",

                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography variant="h5" sx={{ textAlign: "left" }}>
                    {item.stack == props.stack
                      ? item.task_question
                      : "Question"}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    sx={{
                      textAlign: "left",
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    {item.stack == props.stack ? item.task_description : "Desc"}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </>
        ))}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <iframe src={resource} width="100%" height="100%" />
          </Box>
        </Modal>
      </Grid>
    </div>
  );
};

export default TaskData