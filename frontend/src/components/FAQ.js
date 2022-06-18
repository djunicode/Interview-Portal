import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ's Section ",
    rows: [
        {
            title: "Is it okay if I don't complete all the tasks?",
            content: `Tasks are there to help you learn what's important while building something using the same. Completing all the Tasks is not compulsory! However, doing more tasks WILL give you an edge over everyone else and it might boost your chances of getting selected. `,
        },
        {
            title: "The form closes on 31st July. Does that mean we have only 10 days left to complete our tasks?",
            content:
                "31st July is the closing date of the form. But, you can still continue to work on improving your tasks after the form has been closed. We will assess you based on the project that you present at the time of the interview. ",
        },
        {
            title: "What is GitHub?",
            content: ` The term GitHub might be new for most of you. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere. A great feature of GitHub is that it allows us, developers, to update your code and tracks our changes. This means that you can update and improve your code after submitting its link in the form. `,
        },
        {
            title: "How to upload my project to GitHub?",
            content: `You can upload your projects on GitHub by either dragging files to the website or in a much more cool-er way by using the command line. I know the command-line tool of Git is difficult. But it's a skill worth learning for this interview as well as any internship interviews in the future.`,
        },
        {
            title: "I've never given an interview. Help!",
            content: `There is no need to be scared by the word 'interview'. Just be yourself and present what you know. We won't ask difficult stuff or algorithms or anything. Be well versed with the projects or courses that you have done. `,
        },
        {
            title: "Can I refer to code/templates from websites?",
            content: `The tasks are aimed to help you learn the concepts of development in a pragmatic environment. Referring to or using ready made code snippets or templates will only hinder your learning progress and they might have an adverse impact when we ask you questions pertaining to these concepts. Thus, we strongly advise against the use of templates and code snippets. You may use them as a reference to fix a bug but do not copy paste it as is. We will know :)  `,
        },
        {
            title: "I am having difficulty in understanding the problem statement. What should I do?",
            content: `It is always welcomed to reach out to us mentors and ask your doubts. We have provided our contact details in the task document and you can always ask us any question. Remember: No doubt is silly.`,
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "rgba(81, 84, 206, 1)",
    rowTitleColor: "#8985f2",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function FAQ() {

    return (
        <div>
            <Grid container sm="12">
                <Grid item sm="12" md="12" sx={{
                    margin:"15px"
                }}>
            <Faq
                data={data}
                styles={styles}
                config={config}
                
            />
            </Grid>
            </Grid>
        </div>
    );
}