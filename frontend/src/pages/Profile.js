import { Grid, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import SideNavbar from "../components/SideNavbar";
import Chip from "@mui/material/Chip";
import "../styles/profile.css";

export default function Profile() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${localStorage.getItem("token")}`);
  myHeaders.append("Content-Type", "application/json");

  const [profile, setProfile] = useState(true);
  let sap = localStorage.getItem("sapid");

  const [user, setUser] = useState({
    email: "",
    grad_year: "",
    name: "",
    sapid: "",
    pass: "",
    confirm_pass: "",
  });

  const [app, setApp] = useState({
    stack: [
      {
        name: "",
        repo_link: "",
      },
    ],
    resume_link: "",
  });

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  async function handleSave() {
    var raw2 = JSON.stringify({
      user: {
        name: user.name,
        sapid: "5",
        grad_year: user.grad_year,
        email: user.email,
        password: user.pass,
        confirm_password: user.pass,
      },
    });
    var requestOptions2 = {
      method: "PUT",
      headers: myHeaders,
      body: raw2,
      redirect: "follow",
    };
    await fetch(
      "https://unicodeinterview.pythonanywhere.com/accounts/interviewee_update/",
      requestOptions2
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    fetch(
      `https://unicodeinterview.pythonanywhere.com/accounts/interviewee_get/${sap}`,
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
        console.log(result.stack[0].name);
        setApp(result);
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
              disabled={profile}
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              label="Name"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ padding: "2% 30%" }}>
          <Grid item xs={6}>
            <TextField disabled value={user.sapid} label="SAP ID" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField
              disabled={profile}
              value={user.grad_year}
              onChange={(e) => setUser({ ...user, grad_year: e.target.value })}
              label="Grad year"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ padding: "2% 30%" }}>
          <Grid item xs={12}>
            <TextField
              disabled={profile}
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              label="Email"
              fullWidth
            />
          </Grid>
        </Grid>

        {!profile ? (
          <Grid container spacing={2} sx={{ padding: "2% 30%" }}>
            <Grid item xs={12}>
              <TextField
                value={user.pass}
                onChange={(e) => setUser({ ...user, pass: e.target.value })}
                label="Password"
                fullWidth
              />
            </Grid>
          </Grid>
        ) : null}

        <Grid container spacing={2} sx={{ padding: "2% 30%" }}>
          <Grid item xs={12}>
            <TextField
              disabled={profile}
              value={app.resume_link}
              label="Resume Link"
              fullWidth
            />
          </Grid>
        </Grid>

        <div style={{ padding: "1% 30%", textAlign: "left" }}>
          Stacks Applied
        </div>
        <Grid container spacing={2} sx={{ padding: "2% 32%" }}>
          {app.stack.map((item, index) => (
            <Chip
              key={index}
              label={item.name}
              color="secondary"
              sx={{ margin: "5px" }}
              onClick={() => {}}
              onDelete={() => {}}
            />
          ))}
        </Grid>

        <Grid container spacing={2} sx={{ padding: "1% 30%" }}>
          <Grid item xs={6}>
            <Button
              size="large"
              variant="contained"
              sx={{ textTransform: "none", padding: "4% 10%" }}
              onClick={() => setProfile(false)}
            >
              Edit Profile
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              size="large"
              variant="contained"
              sx={{ textTransform: "none", padding: "4% 10%" }}
              onClick={handleSave}
            >
              Save Profile
            </Button>
          </Grid>
        </Grid>
      </SideNavbar>
    </>
  );
}
