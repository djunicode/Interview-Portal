import { Grid, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import SideNavbar from "../components/SideNavbar";
import Chip from "@mui/material/Chip";
import "../styles/profile.css";

export default function Profile() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${localStorage.getItem("token")}`);

  const [user, setUser] = useState({
    email: "",
    grad_year: "",
    name: "",
    sapid: "",
  });

  const [app, setApp] = useState({
      "stack": [{
          "name":"",
          "repo_link":"",
      }],
      "resume_link":"",
  })

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    fetch(
      "https://unicodeinterview.pythonanywhere.com/accounts/interviewee_update/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => console.log("error", error));

    fetch(
      "https://unicodeinterview.pythonanywhere.com/accounts/application/",
      requestOptions
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result.stack[0].name)
        setApp(result)
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <SideNavbar>
        <h2> Profile Page </h2>

        <Grid container spacing={2} sx={{ padding: "2% 30%" }}>
          <Grid item xs={12}>
            <TextField
              disabled={true}
              value={user.name}
              label="Name"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ padding: "2% 30%" }}>
          <Grid item xs={6}>
            <TextField
              disabled={true}
              value={user.sapid}
              label="SAP ID"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              disabled={true}
              value={user.grad_year}
              label="Grad year"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ padding: "2% 30%" }}>
          <Grid item xs={12}>
            <TextField
              disabled={true}
              value={user.email}
              label="Email"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ padding: "2% 30%" }}>
          <Grid item xs={12}>
            <TextField disabled={true} value={app.resume_link} label="Resume Link" fullWidth />
          </Grid>
        </Grid>

        <div style={{ padding: "1% 30%", textAlign: "left" }}>
          Stacks Applied
        </div>
        <Grid container spacing={2} sx={{ padding: "2% 32%" }}>
            {app.stack.map((item)=>
                <Chip
                label={item.name}
                color="secondary"
                sx={{ margin: "5px" }}
                onClick={() => {}}
                onDelete={() => {}}
              />
            )}
        </Grid>

        <Grid container spacing={2} sx={{ padding: "1% 30%" }}>
          <Grid item xs={6}>
            <Button
              size="large"
              variant="contained"
              sx={{ textTransform: "none", padding:'4% 10%' }}
            >
              Edit Profile
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              size="large"
              variant="contained"
              sx={{ textTransform: "none", padding:'4% 10%' }}
            >
              Save Profile
            </Button>
          </Grid>
        </Grid>
      </SideNavbar>
    </>
  );
}
