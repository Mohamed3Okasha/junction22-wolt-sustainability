import { useState, useEffect } from 'react';
import { Row, Col } from "antd";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'


const Pricing = ({id}) => {
    const [isTwoMeals, setTwoMeals] = useState(true);

    return (
        <>
            <Col id={id}>
                <Row justify="center">
                    <h1>Pricing</h1>
                </Row>
                <Row justify="center">
                    <p>The subscription is automatically updated every week</p>
                </Row>
                <Row justify="center">
                    <p>Cancel any time</p>
                </Row>
                <Row justify="center">
                    <p><b>Meals per week</b></p>
                </Row>
                <Row justify="space-evenly" align="middle" style={{ marginBottom: 16 }}>
                    <BootstrapSwitchButton
                        checked={isTwoMeals}
                        onlabel='2 meals'
                        offlabel='1 meal'
                        onChange={(checked: boolean) => {
                            setTwoMeals(checked)
                        }}
                    />
                </Row>
            </Col>

            <Col>
            {
                isTwoMeals
                    ?
                    <Row justify="space-evenly" align="middle">
                        <Col>
                            <p><b>1 week</b></p>
                            <p>126 € / week</p>
                            <p>9 € / day</p>
                        </Col>
                        <Col>
                            <p><b>2 weeks</b></p>
                            <p>252 € / week</p>
                            <p>9 € / day</p>
                        </Col>
                        <Col>
                            <p><b>4 weeks</b></p>
                            <p>504 € / week</p>
                            <p>9 € / day</p>
                        </Col>
                    </Row>
                    :
                    <Row justify="space-evenly" align="middle">
                        <Col>
                            <p><b>1 week</b></p>
                            <p> 63 € / week</p>
                            <p>9 € / day</p>
                        </Col>
                        <Col>
                            <p><b>2 weeks</b></p>
                            <p>126 € / week</p>
                            <p>9 € / day</p>
                        </Col>
                        <Col>
                            <p><b>4 weeks</b></p>
                            <p>252 € / week</p>
                            <p>9 € / day</p>
                        </Col>
                    </Row>
            }
            </Col>

            <Row justify="center" style={{ marginTop: 16 }}>
                <p>All plans include delivery</p>
            </Row>
        </>
    );
};

export default Pricing;
