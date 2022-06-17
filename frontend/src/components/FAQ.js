import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ's Section ",
    rows: [
        {
            title: "What is Unicode?",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.`,
        },
        {
            title: "How do we schedule an interview?",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor. Lorem ipsum dolor sit amet,",
        },
        {
            title: "Want to change your interview dates?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante.. `,
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