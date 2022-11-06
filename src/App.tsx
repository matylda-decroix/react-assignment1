import "./App.css";
import { useQuery } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: { name: string };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

function App() {
  const { data, isLoading } = useQuery(
    ["users"],
    (): Promise<User[]> =>
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const users = data;
  return (
    <>
      {isLoading === true && <div>Loading user data...</div>}
      <div className="div">
        {users?.map((user) => {
          return (
            <Container key={user.id} className="container">
              <Row className="row">
                <Col className="col">
                  <img
                    src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
                  />
                </Col>
                <Col className="col2">
                  <div>
                    <h2>{user.name}</h2>
                    <p className="p">
                      <strong>Email: </strong>
                      {user.email}
                    </p>
                    <p className="p">
                      <strong>Phone: </strong>
                      {user.phone}
                    </p>
                    <p className="p">
                      <strong>Company: </strong>
                      {user.company.name}
                    </p>
                    <p className="p">
                      <strong>Website: </strong>
                      {user.website}
                    </p>
                    <p className="p">
                      <strong>Address: </strong>
                      {user.address.street}, {user.address.suite},
                      {user.address.city}, {user.address.zipcode}
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          );
        })}
      </div>
    </>
  );
}

export default App;
