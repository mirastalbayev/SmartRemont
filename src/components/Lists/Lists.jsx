import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
    Box,
    Grid,
    List,
    ListItem,
    Typography,
} from "@mui/material";
import { getGoods } from "../../data/goods";

const Lists = () => {
    const goods = getGoods();
    // const typeGoods = goods.filter(e => e.p);
    // const typeGoods = goods.map((type, index) => ())

    return (
        <Box>
            <Grid container item xs={3}>
                <Grid item xs={12} sx={{mb: '20px'}}>
                    <Typography
                        sx={{fontSize: '20px'}}
                    >
                        Найдено {} объекта:
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <List>
                        {goods.map(good => (
                            <ListItem
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? '#fff' : '#000',
                                        backgroundColor: isActive ? '#000' : '#d3d3d3',
                                        marginBottom: '13px',
                                        padding: '20px',
                                    };
                                }}
                                type={good.type}
                                component={NavLink} to={`/${good.type}/${good.id}`}
                            >
                                {good.name.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
            <Outlet />
        </Box>
    );
};

export default Lists;