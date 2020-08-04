import React, { useEffect, useState } from 'react';
import apiConfig from '../constants/apiKeys';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';
import { Accordion, Card } from 'react-bootstrap';

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
                        console.log(response);

                        var arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

                        var dateObj = new Date()
                        var weekdayNumber = dateObj.getDay()
                        var weekdayName = arrayOfWeekdays[weekdayNumber]

                        setWeatherData([
                            <div>
                                <h4 className="header">5-DAY WEATHER FORECAST</h4>
                                <h5 className="location">Location detected: {response.data.city.name}</h5>
                                <Accordion defaultActiveKey="" className="accordion">
                                    <Card style={{ backgroundColor: "#303e9f", border: "none" }}>
                                        <Accordion.Toggle className="card" as={Card.Header} eventKey="0">
                                            <div className="card-header-content">
                                                <span className="weekdayName">{weekdayName}</span>
                                                <span className="temperature">
                                                    <strong style={{ backgroundColor: "transparent" }}>
                                                        {(response.data.list[0].main.temp_max).toFixed(0)} °C
                                                    </strong>
                                                / {(response.data.list[0].main.temp_min).toFixed(0)} °C
                                                </span>
                                                <br />
                                                <span className="date">
                                                    {(response.data.list[0].dt_txt).slice(0, 10)}
                                                </span>
                                                <span className="humidity">
                                                    Avg. Humidity: {response.data.list[0].main.humidity}%
                                                </span>
                                            </div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className="card-body">
                                                <div className="card-content">
                                                    {(response.data.list[0].main.temp).toFixed(0)}°C
                                                        <br />
                                                    {(response.data.list[0].dt_txt).slice(10, 16)}
                                                </div>
                                                <div className="card-content">
                                                    {(response.data.list[1].main.temp).toFixed(0)}°C
                                                        <br />
                                                    {(response.data.list[1].dt_txt).slice(10, 16)}
                                                </div>
                                                <div className="card-content">
                                                    {(response.data.list[2].main.temp).toFixed(0)}°C
                                                        <br />
                                                    {(response.data.list[2].dt_txt).slice(10, 16)}
                                                </div>
                                                <div className="card-content">
                                                    {(response.data.list[3].main.temp).toFixed(0)}°C
                                                        <br />
                                                    {(response.data.list[3].dt_txt).slice(10, 16)}
                                                </div>
                                                <div className="card-content">
                                                    {(response.data.list[4].main.temp).toFixed(0)}°C
                                                        <br />
                                                    {(response.data.list[4].dt_txt).slice(10, 16)}
                                                </div>
                                                <div className="card-content">
                                                    {(response.data.list[5].main.temp).toFixed(0)}°C
                                                        <br />
                                                    {(response.data.list[5].dt_txt).slice(10, 16)}
                                                </div>
                                                <div className="card-content">
                                                    {(response.data.list[6].main.temp).toFixed(0)}°C
                                                        <br />
                                                    {(response.data.list[6].dt_txt).slice(10, 16)}
                                                </div>
                                                <div className="card-content">
                                                    {(response.data.list[7].main.temp).toFixed(0)}°C
                                                        <br />
                                                    {(response.data.list[7].dt_txt).slice(10, 16)}
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card style={{ backgroundColor: "#303e9f", border: "none" }}>
                                        <Accordion.Toggle className="card" as={Card.Header} eventKey="1">
                                            <div className="card-header-content">
                                                <span className="weekdayName">{"            "}</span>
                                                <span className="temperature">
                                                    <strong style={{ backgroundColor: "transparent" }}>
                                                        {(response.data.list[8].main.temp_max).toFixed(0)} °C
                                                    </strong>
                                                / {(response.data.list[8].main.temp_min).toFixed(0)} °C
                                                </span>
                                                <br />
                                                <span className="date">
                                                    {(response.data.list[8].dt_txt).slice(0, 10)}
                                                </span>
                                                <span className="humidity">
                                                    Avg. Humidity: {response.data.list[8].main.humidity}%
                                                </span>
                                            </div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body className="card-body">
                                                <div className="card-content">
                                                    {(response.data.list[9].main.temp).toFixed(0)}°C
                                                        <br />
                                                    {(response.data.list[9].dt_txt).slice(10, 16)}
                                                </div>
                                                <div className="card-content">
                                                    {(response.data.list[10].main.temp).toFixed(0)}°C
                                                        <br />
                                                    {(response.data.list[10].dt_txt).slice(10, 16)}
                                                </div>
                                                <div className="card-content">
                                                    {(response.data.list[11].main.temp).toFixed(0)}°C
                                                        <br />
                                                    {(response.data.list[11].dt_txt).slice(10, 16)}
                                                </div>
                                                <div className="card-content">
                                                    {(response.data.list[12].main.temp).toFixed(0)}°C
                                                        <br />
                                                    {(response.data.list[12].dt_txt).slice(10, 16)}
                                                </div>
                                                <div className="card-content">
                                                    {(response.data.list[13].main.temp).toFixed(0)}°C
                                                        <br />
                                                    {(response.data.list[13].dt_txt).slice(10, 16)}
                                                </div>
                                                <div className="card-content">
                                                    {(response.data.list[14].main.temp).toFixed(0)}°C
                                                        <br />
                                                    {(response.data.list[14].dt_txt).slice(10, 16)}
                                                </div>
                                                <div className="card-content">
                                                    {(response.data.list[15].main.temp).toFixed(0)}°C
                                                        <br />
                                                    {(response.data.list[15].dt_txt).slice(10, 16)}
                                                </div>
                                                <div className="card-content">
                                                    {(response.data.list[16].main.temp).toFixed(0)}°C
                                                        <br />
                                                    {(response.data.list[16].dt_txt).slice(10, 16)}
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card style={{ backgroundColor: "#303e9f", border: "none" }}>
                                        <Accordion.Toggle className="card" as={Card.Header} eventKey="2">
                                            <div className="card-header-content">
                                                <span className="weekdayName">{"            "}</span>
                                                <span className="temperature">
                                                    <strong style={{ backgroundColor: "transparent" }}>
                                                        {(response.data.list[17].main.temp_max).toFixed(0)} °C
                                                    </strong>
                                                / {(response.data.list[17].main.temp_min).toFixed(0)} °C
                                                </span>
                                                <br />
                                                <span className="date">
                                                    {(response.data.list[17].dt_txt).slice(0, 10)}
                                                </span>
                                                <span className="humidity">
                                                    Avg. Humidity: {response.data.list[17].main.humidity}%
                                                </span>
                                            </div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>Data from the day</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card style={{ backgroundColor: "#303e9f", border: "none" }}>
                                        <Accordion.Toggle className="card" as={Card.Header} eventKey="3">
                                            <div className="card-header-content">
                                                <span className="weekdayName">{"            "}</span>
                                                <span className="temperature">
                                                    <strong style={{ backgroundColor: "transparent" }}>
                                                        {(response.data.list[26].main.temp_max).toFixed(0)} °C
                                                    </strong>
                                                / {(response.data.list[26].main.temp_min).toFixed(0)} °C
                                                </span>
                                                <br />
                                                <span className="date">
                                                    {(response.data.list[26].dt_txt).slice(0, 10)}
                                                </span>
                                                <span className="humidity">
                                                    Avg. Humidity: {response.data.list[26].main.humidity}%
                                                </span>
                                            </div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>Data from the next day</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card style={{ backgroundColor: "#303e9f", border: "none" }}>
                                        <Accordion.Toggle className="card" as={Card.Header} eventKey="4">
                                            <div className="card-header-content">
                                                <span className="weekdayName">{"            "}</span>
                                                <span className="temperature">
                                                    <strong style={{ backgroundColor: "transparent" }}>
                                                        {(response.data.list[35].main.temp_max).toFixed(0)} °C
                                                    </strong>
                                                / {(response.data.list[35].main.temp_min).toFixed(0)} °C
                                                </span>
                                                <br />
                                                <span className="date">
                                                    {(response.data.list[35].dt_txt).slice(0, 10)}
                                                </span>
                                                <span className="humidity">
                                                    Avg. Humidity: {response.data.list[35].main.humidity}%
                                                </span>
                                            </div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body>Data from another day</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
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
                            console.log(response);

                            var arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

                            var dateObj = new Date()
                            var weekdayNumber = dateObj.getDay()
                            var weekdayName = arrayOfWeekdays[weekdayNumber]
                            setWeatherData([
                                <div>
                                    <h4 className="header">5-DAY WEATHER FORECAST</h4>
                                    <h5 className="location">Location detected: {response.data.city.name}</h5>
                                    <Accordion defaultActiveKey="" className="accordion">
                                        <Card style={{ backgroundColor: "#303e9f", border: "none" }}>
                                            <Accordion.Toggle className="card" as={Card.Header} eventKey="0">
                                                <div className="card-header-content">
                                                    <span className="weekdayName">{weekdayName}</span>
                                                    <span className="temperature">
                                                        <strong style={{ backgroundColor: "transparent" }}>
                                                            {(response.data.list[0].main.temp_max).toFixed(0)} °C
                                                        </strong>
                                                    / {(response.data.list[0].main.temp_min).toFixed(0)} °C
                                                    </span>
                                                    <br />
                                                    <span className="date">
                                                        {(response.data.list[0].dt_txt).slice(0, 10)}
                                                    </span>
                                                    <span className="humidity">
                                                        Avg. Humidity: {response.data.list[0].main.humidity}%
                                                    </span>
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body className="card-body">
                                                    <div className="card-content">
                                                        {(response.data.list[0].main.temp).toFixed(0)}°C
                                                            <br />
                                                        {(response.data.list[0].dt_txt).slice(10, 16)}
                                                    </div>
                                                    <div className="card-content">
                                                        {(response.data.list[1].main.temp).toFixed(0)}°C
                                                            <br />
                                                        {(response.data.list[1].dt_txt).slice(10, 16)}
                                                    </div>
                                                    <div className="card-content">
                                                        {(response.data.list[2].main.temp).toFixed(0)}°C
                                                            <br />
                                                        {(response.data.list[2].dt_txt).slice(10, 16)}
                                                    </div>
                                                    <div className="card-content">
                                                        {(response.data.list[3].main.temp).toFixed(0)}°C
                                                            <br />
                                                        {(response.data.list[3].dt_txt).slice(10, 16)}
                                                    </div>
                                                    <div className="card-content">
                                                        {(response.data.list[4].main.temp).toFixed(0)}°C
                                                            <br />
                                                        {(response.data.list[4].dt_txt).slice(10, 16)}
                                                    </div>
                                                    <div className="card-content">
                                                        {(response.data.list[5].main.temp).toFixed(0)}°C
                                                            <br />
                                                        {(response.data.list[5].dt_txt).slice(10, 16)}
                                                    </div>
                                                    <div className="card-content">
                                                        {(response.data.list[6].main.temp).toFixed(0)}°C
                                                            <br />
                                                        {(response.data.list[6].dt_txt).slice(10, 16)}
                                                    </div>
                                                    <div className="card-content">
                                                        {(response.data.list[7].main.temp).toFixed(0)}°C
                                                            <br />
                                                        {(response.data.list[7].dt_txt).slice(10, 16)}
                                                    </div>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
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