import React, {ChangeEvent, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useAppDispatch, useAppSelector} from "../hooks";
import {data, dataThunks} from "../features/Card/card.slice";
import { MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";


const CardFile = () => {
    const dispatch = useAppDispatch();
    const currencyData = useAppSelector(data)
    const [rate,setRate]=useState(1 )
    const [startValue,setStartValue]=useState(1 )

    const onRateChange = (value:string)=> {
        let newRate = currencyData.filter(f=>f.txt==value ? f.rate : undefined)
        setRate(newRate[0].rate)
    }
    const onInputChange = (val:string) =>{
          val.startsWith('0') ? setStartValue(Number(val.slice(1))) : setStartValue(Number(val));

    }

    useEffect(() => {
        dispatch(dataThunks.addCourse());
        console.log('useEffect')
    }, []);

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );


    return (
        <>
            {/*{*/}
            {/*    currencyData && currencyData.map(f => f.txt)*/}
            {/*}*/}
            <Card variant='outlined' sx={{ minWidth: 275 }}>


                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Введіть потрібну сумму:
                        </Typography>
                        <Typography variant="h5" component="div">
                            <TextField type="number" InputProps={{
                                inputProps:{ min: 9}}} onChange={(e:ChangeEvent<HTMLInputElement>)=>onInputChange(e.target.value)} value={startValue}  />
                        </Typography>

                        <Typography variant="body2">
                            Відношення до 1 гривні {rate}
                        </Typography>

                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"

                            onChange={(e:SelectChangeEvent<"">)=>onRateChange(e.target.value)}

                        >
                            {currencyData && currencyData.map(f => (
                            <MenuItem key={f.r030}  value={f.txt}>{f.txt}</MenuItem>
                            ))
                            }
                        </Select>

                        <CardActions sx={{justifyContent: 'center'}}>
                            <Button  size="small">Learn More</Button>
                        </CardActions>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Ви отримаете :
                            {startValue*rate}
                        </Typography>
                        </CardContent>

            </Card>
        </>

    );
};

export default CardFile;