import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';


function Dashboard() {
    const users = JSON.parse(localStorage.getItem("login"));
return (
    <Container style={{ marginTop: '50px' }}>
        <Row>
        <Col md={{ span: 6, offset: 3 }}>
            <Card style={{ padding: '30px' }}>
            <h2 style={{ paddingBottom: '30px' }}>Dashboard </h2>
            <Table striped bordered hover>
    <thead>
        <tr>
          <th>First Name</th>
          <th>Email Address</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
      {users.map((user) => (  
              <tr >  
                <td>{user.name}</td>  
                <td>{user.email}</td>
                <td>{user.password}</td>  
              </tr>  
            ))}  
      </tbody>
    </Table>
            </Card>
          </Col>
        </Row>
      </Container>
  );
}

export default Dashboard;