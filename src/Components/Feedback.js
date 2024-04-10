import React from 'react'
import NavBar from './Navbar'
import Footer from './Footer'
import { Form, Button, Input, Image } from "antd";
import ContentImage from '../Assets/AmericanAirlines.png'

export default function Feedback() {
    const onFinish = (values) => {
        // You can replace this with a real search functionality
        console.log('Received values of form: ', values);
    };
  return (
    <div>
        <NavBar/>
        <div className="PredictionContainer">
                <div className="PredictionFormContainer">
                    <h1 className="PredictionFormHeading">Give Us a Feedback</h1>
                    <p>Your feedback is valuable for better improvements</p>
                    <Form className="PredictionForm" layout="vertical" onFinish={onFinish}>
                        <Form.Item
                            name="firstName"
                            label="First Name"
                            rules={[{ required: true, message: 'Please enter your name!' }]}
                        >
                             <Input placeholder="Your First Name" />
                        </Form.Item>
                        <Form.Item
                            name="lastName"
                            label="Last Name"
                        >
                            <Input placeholder="Your Last Name" />
                        </Form.Item>
                        <Form.Item
                            name="country"
                            label="Country"
                        >
                            <Input placeholder="Your Contry" />
                        </Form.Item>
                        <Form.Item
                            name="message"
                            label="Message"
                            rules={[{ required: true, message: 'Please enter your feedback!' }]}
                        >
                            <Input placeholder="Write your feedback here" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Send
                            </Button>
                        </Form.Item>
                        <p className="PredictedText">Thank You for your feedback...</p>
                    </Form>
                </div>
                <div className="PredictionImageContainer">
                    <Image className="PredictionImage" src={ContentImage} preview={false}></Image>
                </div>
            </div>
        <Footer/>
    </div>
  )
}
