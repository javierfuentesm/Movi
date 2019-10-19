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

class Viajes extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Mis Viajes</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Origen</th>
                        <th>Destino</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>19-Oct-2019</td>
                        <td>08:28:46</td>
                        <td>Curazao 1222</td>
                        <td>Platzi México</td>
                      </tr>
                      <tr>
                        <td>19-Oct-2019</td>
                        <td>08:28:46</td>
                        <td>Curazao 1222</td>
                        <td>Platzi México</td>
                      </tr>
                      <tr>
                        <td>19-Oct-2019</td>
                        <td>08:28:46</td>
                        <td>Curazao 1222</td>
                        <td>Platzi México</td>
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

export default Viajes;
