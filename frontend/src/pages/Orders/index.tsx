import { lazy } from "react";
import React from "react";
import Table from 'react-bootstrap/Table';

const Container = lazy(() => import("../../common/Container"));

const Orders = () => {
  return (
    <Container>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Order number</th>
                <th>Date</th>
                <th>Meal Type</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td></td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
            </tr>
            </tbody>
        </Table>
    </Container>
    
    )};

export default Orders;
