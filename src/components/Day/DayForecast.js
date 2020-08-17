import React from 'react';
import HourlyTemperature from './HourlyTemperature';
import { Accordion, Card } from 'react-bootstrap';

const DayForecast = ({ index, temperatures }) => (
    <Accordion.Collapse eventKey={index}>
        <Card.Body className="card-body">
            {temperatures.map((temperature, key) => (
                <HourlyTemperature
                    key={key}
                    temperature={temperature.main.temp}
                    datetime={temperature.dt_txt}
                />
            ))}
        </Card.Body>
    </Accordion.Collapse>
);

export default DayForecast;
