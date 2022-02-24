import React from "react";
import {
    Box,
    Button,
    Grid,
    Typography,
} from "@mui/material";

const Header = () => {
    return (
        <Box>
            <Grid container item xs={12} sx={{mb: '120px'}}>
                <Grid item xs={12} sx={{mb: '60px'}}>
                    <Typography sx={{fontSize: '70px', fontWeight: '700', lineHeight: '70px'}}>
                        Галерея <br/> проектов
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={{mb: '44px', fontSize: '25px', lineHeight: '35px'}}>
                        Сумма экономии рассчитана в сравнении с суммой цен этого же перечня товаров по отдельности
                    </Typography>
                    <Button variant="outlined" color="error" sx={{borderRadius: 0, border: '2px solid', p: '20px 50px', fontSize: '20px'}}>
                        Выбрать дизайн
                    </Button>
                </Grid>
                <Grid item xs={9} className={'globalCentered'}>
                    <Typography sx={{fontSize: '45px'}}>
                        Мы успешно завершили <br/> уже <span className={'test'}>более 450</span> ремонтов
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Header;