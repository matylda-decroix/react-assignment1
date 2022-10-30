import "./App.css";
import { useQuery } from "@tanstack/react-query";

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
      <div>
        {users?.map((user) => {
          return (
            <div key={user.id}>
              <div>
                <img
                  src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
                />
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
    </>
  );
}

export default App;
