import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Phone from './Phone';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function PhoneGrid({ data }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12, lg: 12 }}>
                {data.map((phone, index) => (
                    <Grid item xs={2} sm={4} md={4} lg={3} key={index}>
                        <Item> <Phone
                            key={phone.id}
                            imageURL={phone.imageURL}
                            name={phone.name}
                            manufacter={phone.manufacter}
                            price={phone.price}
                            description={phone.description}
                            color={phone.color}
                            screen={phone.screen}
                            processor={phone.processor}
                            ram={phone.ram}
                        /> </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default PhoneGrid;