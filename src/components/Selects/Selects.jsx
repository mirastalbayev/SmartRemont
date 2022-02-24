import React, {useState} from "react";
import { Outlet, Link } from "react-router-dom";
import {
    Box,
    Grid,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
// import { goods } from "../../data/goods";

// const Selects = () => {
//     {goods.map(good => {
//         return (
//             <Box>
//                 <Grid container item xs={3} sx={{mb: '45px'}}>
//                     <Grid item xs={12}>
//                         <InputLabel sx={{mb: '15px'}}>
//                             ТИП РЕМОНТА
//                         </InputLabel>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Select
//                             fullWidth
//                             sx={{borderRadius: 0, p: '15px 10px'}}
//                         >
//                             <Link to={`/${good.type}`}>
//                                 <MenuItem key={good.id} value={good.id}>
//                                     {good.type}
//                                 </MenuItem>
//                             </Link>
//                         </Select>
//                     </Grid>
//                 </Grid>
//                 <Outlet />
//             </Box>
//         );
//     })}
// };

const Selects = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <Grid container item xs={3} sx={{mb: '45px'}}>
                <Grid item xs={12}>
                    <InputLabel sx={{mb: '15px'}}>
                        ТИП РЕМОНТА
                    </InputLabel>
                </Grid>
                <Grid item xs={12}>
                    <Select
                        fullWidth
                        sx={{borderRadius: 0, p: '15px 10px'}}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                    >
                        <Link to='/standard'>
                            <MenuItem 
                                value={1}
                                onClick={handleClose}
                            >
                                Smart Standard
                            </MenuItem>
                        </Link>
                        <Link to='/comfort'>
                            <MenuItem
                                value={2}
                                onClick={handleClose}
                            >
                                Smart Comfort
                            </MenuItem>
                        </Link>
                        <Link to='/business'>
                            <MenuItem
                                value={3}
                                onClick={handleClose}
                            >
                                Smart Business
                            </MenuItem>
                        </Link>
                    </Select>
                </Grid>
            </Grid>
            <Outlet />
        </Box>
    );
};

export default Selects;