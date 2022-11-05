import { lazy } from "react";
import React,{useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { DeliveryMethod, useAccountDeliveryData } from "../../state/AccountOrderedDeliveries";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from "react-bootstrap/Accordion"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import ToggleButton from "react-bootstrap/ToggleButton"
import Form from 'react-bootstrap/Form';
const Container = lazy(() => import("../../common/Container"));

const Orders = () => {
    const [state, dispatch] = useAccountDeliveryData();

    const [selected, setSelected] = useState(undefined)
    const [radioValue, setRadioValue] = useState(DeliveryMethod.UNKNOWN)
    const getWeekday = (date: Date) => {
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return weekday[date.getDay()];
    }

    const renderSwitch = (param) =>{
        switch(param) {
            case DeliveryMethod.FIXED:
              return <p> </p>;
            case DeliveryMethod.QUICK_COURIER:
              return 'foo';
            case DeliveryMethod.SCHEDUELED:
              return 'foo';
            case DeliveryMethod.SELF_PICKUP:
              return 'foo';
            default:
                return <></>
          }
    }

    function datediff(first, second) {
        return Math.abs(Math.round((second - first) / (1000 * 60 * 60 * 24)));
    }
    const radiobuttons = [
    { name: 'Deliver Now', value: DeliveryMethod.QUICK_COURIER },
    { name: 'Schedule Delivery', value: DeliveryMethod.SCHEDUELED },
    { name: 'Self-Pickup', value: DeliveryMethod.SELF_PICKUP },
    { name: 'Fixed delivery', value: DeliveryMethod.FIXED},
  ];

    const isEditable = (date: Date) => {
        return datediff(date, new Date()) > 2
    }
    return (
        <Row className="justify-content-center" >
            <Card className="my-4" style={{ width: '1200px' }}>
                <Card.Body>
                    <Card.Title>Food Delivery</Card.Title>
                    <Card.Text>
                      Your upcoming deliveries:
                      <Accordion defaultActiveKey="0">
        {state.map(function (el, index) {
            return datediff(new Date(), el.delivery_date)<3 && new Date()<= el.delivery_date ?
            <Accordion.Item eventKey= {index}>
                <Accordion.Header>{el.delivery_date.getDate() + "/" + (el.delivery_date.getMonth() + 1)} </Accordion.Header>
            <Accordion.Body>
                <Row>
                    <Col>
                    <ButtonGroup>
        {radiobuttons.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant='outline-success'
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value as DeliveryMethod)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
                                
                    </Col>
                    <Col>
                     {renderSwitch(radioValue)}
                    </Col>
                </Row>
            </Accordion.Body>
        </Accordion.Item>
        : <></>
        })}
    
    </Accordion>

                    </Card.Text>
                </Card.Body>
            </Card >
            <Card style={{ width: '1200px' }}>
                <Card.Body>
                    <Card.Title>Meal Planning</Card.Title>
                    <Card.Text>
                        <Tabs
                            defaultActiveKey="relevant"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="relevant" title="Relevant">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Day</th>
                                            <th>Meal</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {state.map(function (el, index) {
                                            return new Date() > el.delivery_date ?
                                                <></>
                                                : <tr key={index}>
                                                    <td>{el.delivery_date.getDate() + "/" + (el.delivery_date.getMonth() + 1)}</td>
                                                    <td>{getWeekday(el.delivery_date)}</td>
                                                    <td>{el.mealId}</td>
                                                    <td> <Button disabled={!isEditable(el.delivery_date)}>Change meal</Button></td>
                                                </tr>
                                        }
                                        )}
                                    </tbody>
                                </Table>
                            </Tab>
                            <Tab eventKey="history" title="History">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Day</th>
                                            <th>Meal</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {state.map(function (el, index) {
                                            return new Date() <= el.delivery_date ?
                                                <></>
                                                : <tr key={index}>
                                                    <td>{el.delivery_date.getDate() + "/" + (el.delivery_date.getMonth() + 1)}</td>
                                                    <td>{getWeekday(el.delivery_date)}</td>
                                                    <td>{el.mealId}</td>
                                                    <td>{isEditable(el.date) ? "Yes" : "No"}</td>
                                                </tr>
                                        }
                                        )}
                                    </tbody>
                                </Table>
                            </Tab>
                        </Tabs>

                    </Card.Text>

                </Card.Body>
            </Card>
        </Row>
    )
};

export default Orders;
