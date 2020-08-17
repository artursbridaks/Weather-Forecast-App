import React from 'react';
import DayForecast from './DayForecast';
import { Accordion, Card } from 'react-bootstrap';

const DayCard = ({ index, temperatures }) => (
    <Card style={{ backgroundColor: "#303e9f", border: "none" }}>
        <Accordion.Toggle className="card" as={Card.Header} eventKey={index}>
            <div className="card-header-content">
                <span className="weekdayName"></span>
                <span className="temperature">
                    <strong style={{ backgroundColor: "transparent" }}>
                        {0} °C
                    </strong>
                    / {0} °C
                </span>
                <br />
                <span className="date">
                    {"date"}
                </span>
                <span className="humidity">
                    Avg. Humidity: {0}%
                </span>
            </div>
        </Accordion.Toggle>
        <DayForecast
            index={index}
            temperatures={temperatures}
        />
    </Card>
);

export default DayCard;
