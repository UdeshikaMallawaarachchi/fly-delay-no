import React, { useState } from "react";
import { Form, Button, DatePicker, Input, Image } from "antd";
import ContentImage from '../Assets/AmericanAirlines.png'
import NavBar from "./Navbar";
import Footer from "./Footer";

export default function FlightPredictionContainer() {
    const [predictionText, setPredictionText] = useState('Please fill out the form to predict flight delay.');
    const onFinish = async (values) => {
        try {
            const response = await fetch('http://127.0.0.1:5000/predict_delay', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data); // Handle response from Flask backend
            if (data.probability_of_delay > 0) {
                setPredictionText(`Your flight is predicted to delay with a probability of ${Math.round(data.probability_of_delay * 100)}%.`);
            } else {
                setPredictionText("Your flight is predicted to be on time.");
            }
        } catch (error) {
            console.error('Error:', error);
            setPredictionText("Failed to predict flight delay. Please try again.");
        }
    };

    return (
        <div>
            <NavBar/>
            <div className="PredictionContainer">
                <div className="PredictionFormContainer">
                    <h1 className="PredictionFormHeading">Search your American Airline Flights</h1>
                    <p>To view Departure delays, please select departure/arrival, the flight number airport and enter today's date.</p>
                    <Form className="PredictionForm" layout="vertical" onFinish={onFinish}>
                        <Form.Item
                            name="MONTH"
                            label="Month"
                            rules={[{ required: true, message: 'Please select the month!' }]}
                        >
                            <Input placeholder="Enter month" />
                        </Form.Item>
                        <Form.Item
                            name="DAY_OF_MONTH"
                            label="Day"
                            rules={[{ required: true, message: 'Please select a day!' }]}
                        >
                            <Input placeholder="Enter the day" />
                        </Form.Item>
                        <Form.Item
                            name="OP_CARRIER_FL_NUM"
                            label="Flight Number"
                            rules={[{ required: true, message: 'Please input your flight number!' }]}
                        >
                            <Input placeholder="Enter flight number" />
                        </Form.Item>
                        <Form.Item
                            name="DEST"
                            label="Arrival"
                            rules={[{ required: true, message: 'Please input arrival airport!' }]}
                        >
                            <Input placeholder="Enter arrival airport" />
                        </Form.Item>
                        <Form.Item
                            name="ORIGIN"
                            label="Departure"
                            rules={[{ required: true, message: 'Please input departure airport!' }]}
                        >
                            <Input placeholder="Enter departure airport" />
                        </Form.Item>
                        <Form.Item
                            name="DEP_HOUR"
                            label="Departure Hour"
                            rules={[{ required: true, message: 'Please input departure airport!' }]}
                        >
                            <Input placeholder="Enter departure airport" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Search
                            </Button>
                        </Form.Item>
                        
                    </Form>
                    <p className="PredictedText">{predictionText}</p>
                </div>
                <div className="PredictionImageContainer">
                    <Image className="PredictionImage" src={ContentImage} preview={false}></Image>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}