import { useEffect, useState } from "react";
import "./App.css";

interface User {
  id: number;
  name: string;
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
                  </p>
                  <p>
                    <strong>Phone: </strong>
                  </p>
                  <p>
                    <strong>Company: </strong>
                  </p>
                  <p>
                    <strong>Website: </strong>
                  </p>
                  <p>
                    <strong>Address: </strong>
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
