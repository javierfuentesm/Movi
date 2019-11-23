import React from "react";
import {
  Card,
  CardHeader,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Container,
  CardFooter,
  Col,
  Row
} from "reactstrap";
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../auth/firebaseConfig.js';
const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log(firebaseConfig);

class Login extends React.Component {
    render() {
      const {
        user,
        signOut,
        signInWithGoogle,
      } = this.props;
      console.log(user);
      return (
        <Container>
         
    
          <Row>
           
              <Col md={12}>
                <Card>
                  <CardHeader> Login</CardHeader>
    
                  <CardImg
                    top
                    width="100%"
                    src="https://picsum.photos/740/420/?random"
                  
                  />
                  <CardBody>
                    <CardTitle>
                      <h3>Login</h3>
                    </CardTitle>
                    <CardSubtitle>
                      <h5>Inicia sesión con tu cuenta de Google</h5>
                    </CardSubtitle>
                    {
              user
                ? <p>Hola, {user.displayName}</p>
                : <p>Iniciar Sesión.</p>
            }
  
            {
              user
                ? <a onClick={signOut}>Cerrar Sesión</a>
                : <a onClick={signInWithGoogle}>Iniciar sesión</a>
            }
                 
                  </CardBody>
                  <CardFooter className="text-muted">
                  
                  </CardFooter>
                </Card>
              </Col>
          
          </Row>
        </Container>
      );
    }
  }
  const firebaseAppAuth = firebaseApp.auth();

  const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
  };
  
  export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(Login);