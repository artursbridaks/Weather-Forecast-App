import React from 'react';

const HourlyTemperature = ({ temperature, datetime }) => (
    <div className="card-content">
        {temperature.toFixed(0)}°C
        <br />
        {datetime.slice(10, 16)}
    </div>
);

export default HourlyTemperature;
