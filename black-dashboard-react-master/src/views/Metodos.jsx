/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Metodos extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Mis Metodos de Pago</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Empresa</th>
                        <th>Tarjeta</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Amex</td>
                        <td>3610</td>
                       
                      </tr>
                      <tr>
                      <td>Visa</td>
                        <td>4120</td>
                     
                      </tr>
                   
                   
                  
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          
          </Row>
        </div>
      </>
    );
  }
}

export default Metodos;
