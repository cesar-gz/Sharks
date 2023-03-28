import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// this is the "Types of Sharks" heading page
export default function ListSharks() {

/*

  const [users, setUsers] = useState([]);

  useEffect(() => {
      getUsers();
  }, []);

  function getUsers() {
    axios.get('http://localhost/api/users/').then(function (response) {
        console.log(response.data);
      setUsers(response.data);
    });
  }

  const deleteUser = (id) => {
    axios.delete(`http://localhost/api/user/${id}/delete`).then(function (response) {
      console.log(response.data);
      getUsers();
    });
  }

  return (
    <div>
      <h2>Types of Sharks</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) =>
            <tr key={key}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>
                <Link to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          )}

        </tbody>
      </table>
    </div>
  )

*/
  return (
    <div>
      <h2>Types of Sharks</h2>
    </div>
  )
}
