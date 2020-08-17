import React, { useEffect, useState } from 'react';
import apiConfig from '../constants/apiKeys';
import { Accordion } from 'react-bootstrap';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';
import DayCard from './Day/DayCard';

const groupTemperaturesByDate = (temperatures) => {
    let grouped = {};

    temperatures.forEach((temperature) => {
        var date = new Date(temperature.dt * 1000).toLocaleDateString();

        if (!grouped.hasOwnProperty(date)) {
            grouped[date] = [];
        }

        grouped[date].push(temperature);
    });

    return grouped;
};

const WeekContainer = () => {
    const [weatherData, setWeatherData] = useState(null)
    const [loading, setLoading] = useState(false)

    const weekAPI = async () => {
        try {
            navigator.geolocation.getCurrentPosition(function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                axios
                    .get(`${apiConfig.base}/forecast?lat=${latitude}&lon=${longitude}&appid=${apiConfig.key}&units=metric`)
                    .then(response => {
                        setWeatherData([
                            <div>
                                <h4 className="header">5-DAY WEATHER FORECAST</h4>
                                <h5 className="location">Location detected: {response.data.city.name}</h5>
                                <Accordion defaultActiveKey="" className="accordion">
                                    {Object.entries(groupTemperaturesByDate(response.data.list)).map(([date, temperatures]) => (
                                        <DayCard
                                            key={date}
                                            temperatures={temperatures}
                                            index={date}
                                        />
                                    ))}
                                </Accordion>
                            </div>
                        ]);
                    });
                setLoading(true)
            }, function (error) {
                if (error.code === error.PERMISSION_DENIED) {
                    alert("Location access denied. Custom location - London");
                    axios
                        .get(`${apiConfig.base}/forecast?q=London&appid=${apiConfig.key}&units=metric`)
                        .then(response => {
                            setWeatherData([
                                <div>
                                    <h4 className="header">5-DAY WEATHER FORECAST</h4>
                                    <h5 className="location">Location detected: {response.data.city.name}</h5>
                                    <Accordion defaultActiveKey="" className="accordion">
                                        {Object.entries(groupTemperaturesByDate(response.data.list)).map(([date, temperatures]) => (
                                            <DayCard
                                                key={date}
                                                temperatures={temperatures}
                                                index={date}
                                            />
                                        ))}
                                    </Accordion>
                                </div>
                            ]);
                        });
                    setLoading(true)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        weekAPI()
    }, []);

    return (
        <div className="WeekContainer">
            {loading ? weatherData : <ReactBootStrap.Spinner animation="border" />}
        </div>
    );
}

export default WeekContainer;