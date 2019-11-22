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
      return (
        <Container>
         
    
          <Row>
           
              <Col md={4}>
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
                      <h5>Inicia sesión con tu cuenta de Facebook</h5>
                    </CardSubtitle>
                    {
              user
                ? <p>Hello, {user.displayName}</p>
                : <p>Please sign in.</p>
            }
  
            {
              user
                ? <button onClick={signOut}>Sign out</button>
                : <button onClick={signInWithGoogle}>Sign in with Google</button>
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