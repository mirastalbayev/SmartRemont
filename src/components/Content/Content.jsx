import React from "react";
import {
    Box,
    Grid,
    Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { getGood } from "../../data/goods";

import Img1 from "../../assets/images/01_img.jpeg";
// import Img2 from "../../assets/images/04_img.jpg";
// import Img3 from "../../assets/images/07_img.jpeg";
// import Img4 from "../../assets/images/10_img.jpeg";
// import Img5 from "../../assets/images/13_img.jpeg";
// import Img6 from "../../assets/images/16_img.jpeg";
// import Img7 from "../../assets/images/19_img.jpeg";
// import Img8 from "../../assets/images/22_img.jpeg";
// import Img9 from "../../assets/images/25_img.jpeg";
// import Img10 from "../../assets/images/28_img.jpeg";
// import Img11 from "../../assets/images/31_img.jpeg";
// import Img12 from "../../assets/images/34_img.jpeg";
// import Img13 from "../../assets/images/37_img.jpeg";
// import Img14 from "../../assets/images/40_img.jpeg";
// import Img15 from "../../assets/images/43_img.jpeg";

const Content = () => {
    const params = useParams();
    const good = getGood(parseInt(params.goodId, 10));

    return (
        <Box>
            <Grid container item xs={9}>
                <Grid item xs={12}>
                    <img src={Img1} alt="#" />
                    {/* {good.img} */}
                </Grid>
                <Grid item xs={11}>
                    <Typography>
                        <b>{good.name}</b> - {good.city}, {good.street}
                    </Typography>
                    <Typography>
                        {good.description}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Content;

// src={`${item.img}`}