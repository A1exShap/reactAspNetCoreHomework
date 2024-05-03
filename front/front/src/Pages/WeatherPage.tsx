import React, { useState } from 'react';
import logo from './logo.svg';
import '../App.css';
import { Button, Paper, styled } from '@mui/material';
import axios from 'axios';
import { WeatherData } from '../WeatherData';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

function WeatherPage() {
  const [error, setError] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData[] | null>(null);

  const getWeatherData = () => {
    axios.get(`/WeatherForecast`)
      .then(res => {
        setError(null);
        setWeatherData(res.data);
      })
      .catch(error => setError(JSON.stringify(error)));
  };
  
  return (
    <div className="App">
      <Button onClick={getWeatherData} variant='contained'>Get Weather</Button>
      
      {weatherData && weatherData.length > 0 && weatherData.map((data, index) => (
        <Paper key={index} className="p-10" elevation={2}>
          <h3>Date: {data.date}</h3>
          <p>Temperature: {data.temperatureC}°C / {data.temperatureF}°F</p>
          <p>Summary: {data.summary}</p>
        </Paper>
      ))}

      {error && <Paper className="red p-10" elevation={2}>
        Error: {error}
      </Paper>}
    </div>
  );
}

export default WeatherPage;
