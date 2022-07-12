// import * as React from 'react';
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import LaptopMacIcon from '@mui/icons-material/LaptopMac';
// import HotelIcon from '@mui/icons-material/Hotel';
// import RepeatIcon from '@mui/icons-material/Repeat';
// import Typography from '@mui/material/Typography';

// export default function CustomizedTimeline() {
//   return (
//     <Timeline position="alternate">
//       <TimelineItem>
//         <TimelineOppositeContent
//           sx={{ m: 'auto 0' }}
//           align="right"
//           variant="body2"
//           color="text.secondary"
//         >
//           9:30 am
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineConnector />
//           <TimelineDot>
//             <FastfoodIcon />
//           </TimelineDot>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//           <Typography variant="h6" component="span">
//             Eat
//           </Typography>
//           <Typography>Because you need strength</Typography>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineOppositeContent
//           sx={{ m: 'auto 0' }}
//           variant="body2"
//           color="text.secondary"
//         >
//           10:00 am
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineConnector />
//           <TimelineDot color="primary">
//             <LaptopMacIcon />
//           </TimelineDot>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//           <Typography variant="h6" component="span">
//             Code
//           </Typography>
//           <Typography>Because it&apos;s awesome!</Typography>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineConnector />
//           <TimelineDot color="primary" variant="outlined">
//             <HotelIcon />
//           </TimelineDot>
//           <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//           <Typography variant="h6" component="span">
//             Sleep
//           </Typography>
//           <Typography>Because you need rest</Typography>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
//           <TimelineDot color="secondary">
//             <RepeatIcon />
//           </TimelineDot>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//           <Typography variant="h6" component="span">
//             Repeat
//           </Typography>
//           <Typography>Because this is the life you love!</Typography>
//         </TimelineContent>
//       </TimelineItem>
//     </Timeline>
//   );
// }

import React from "react";
import {
  Timeline,
  Events,
  UrlButton,
  TextEvent,
  YouTubeEvent,
} from "@merc/react-timeline";
import { Card, Grid, Typography, Divider } from "@mui/material";
import { themes, createTheme } from "@merc/react-timeline";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  divider: {
    width: "100%",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  card2: {
    padding: "3%",
    // height: "65vh",
    boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.25)!important",
    borderRadius: "10px!important",
  },
}));

const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: "#efefef",
  },
  date: {
    backgroundColor: "#09c1d7",
  },
  marker: {
    borderColor: "#09c1d7",
  },
  timelineTrack: {
    backgroundColor: "#09c1d7",
  },
});

const TimeLine = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card2} sx={{ height: "fit-content" }}>
      <Grid container sx={{ height: "fit-content" }}>
        <Grid item className={classes.header} sx={{ height: "fit-content" }}>
          <Typography gutterBottom variant="h3" component="div" mt={1} mb={1}>
            <strong>Timeline </strong>
          </Typography>
        </Grid>
        <Divider className={classes.divider} />
        <Grid xs={12} md={12} sx={{ minHeight: "40vh" }}>
          <Timeline theme={customTheme}>
            <Events>
              <TextEvent date="02 May" text="Tasks will be assigned" />
              <TextEvent date="18 May" text="Application Form will be live" />
              <TextEvent date="28 May" text="Last Day for registration" />
              <TextEvent date="05 June" text="Interview Round" />
              <TextEvent date="14 June" text="Results" />
            </Events>
          </Timeline>
        </Grid>
      </Grid>
    </Card>
  );
};
export default TimeLine;
