import { useEffect, useState } from "react";
import "./App.css";

interface User {
  id: number;
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
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((res) => {
        setUsers(res);
      })
    );
  });
  return (
    <>
      <div>
        <div>
          {users.map((user) => {
            return (
              <div key={user.id}>
                <div>
                  <img />
                </div>
                <div>
                  <h2>{user.name}</h2>
                  <p>
                    <strong>Email: </strong>
                    {user.email}
                  </p>
                  <p>
                    <strong>Phone: </strong>
                    {user.phone}
                  </p>
                  <p>
                    <strong>Company: </strong>
                    {user.company.name}
                  </p>
                  <p>
                    <strong>Website: </strong>
                    {user.website}
                  </p>
                  <p>
                    <strong>Address: </strong>
                    {user.address.street}, {user.address.suite},
                    {user.address.city}, {user.address.zipcode}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
