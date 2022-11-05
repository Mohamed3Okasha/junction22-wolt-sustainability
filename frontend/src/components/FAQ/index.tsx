import { useState, useEffect } from 'react';
import { Row, Col } from "antd";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'


const FAQ = () => {

    return (
        <>
            <Row justify="center">
                <h1>Frequently Asked Questions</h1>
            </Row>
            <Row>
                <Col style={{ marginTop: 16 }}>
                    <p>
                        <b>Q:</b> Will the meals be cold?
                    </p>
                    <p>
                        <b>A:</b> Yes, and yet the meals are fresh because they are cooked the same day they are delivered.
                    </p>
                </Col>
                <Col style={{ marginTop: 16 }}>
                    <p>
                        <b>Q:</b> How is it different from food delivery?
                    </p>
                    <p>
                        <b>A:</b> Food delivery is expensive. A half-decent meal will cost you 12 euros at the very minimum.
                        In addition, restaurant food is meant to be tasty, but not necessary healthy.
                    </p>
                </Col>
            </Row>
        </>
    );
};

export default FAQ;
