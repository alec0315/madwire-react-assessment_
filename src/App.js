import React from 'react';
import { hot } from 'react-hot-loader/root';
import UserForm from './UserForm';
import UsersTable from './UsersTable';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [users, setUsers] = React.useState({});

  React.useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      setUsers({ persons });
    });
  }, []);

  const addPerson = (person) => {
    setUsers((prevState) => ({
      persons: [...prevState.persons, person],
    }));
  };

  const initialState = {
    name: '',
    username: '',
    email: '',
  };

  const [newUser, setNewUser] = React.useState(initialState);

  const handleChange = (e) => {
    setNewUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event, type, id) => {
    if (type === 'new') {
      let id = uuidv4();
      setNewUser((prevState) => ({
        ...prevState,
        id: id,
        ...newUser,
      }));
      addPerson(newUser);
      setNewUser(initialState);
    }

    if (type === 'existing') {
      console.log('HERE', id);
      return users.persons.map((person, idx) => {
        if (person.id === id) {
          users.persons.slice(idx, 1);
          setUsers((prevState) => ({
            ...prevState,
            persons: [...users.persons],
          }));
        }

        addPerson(newUser);
        setNewUser(initialState);
      });
    }
    event.preventDefault();
  };

  const handleEditChange = (id) => {
    return users.persons.map((person) => {
      if (person.id === id) {
        setNewUser((prevState) => ({
          ...prevState,
          name: person.name,
          username: person.username,
          email: person.email,
        }));
      }
    });
  };

  return (
    <>
      <h1>Users</h1>
      <UsersTable users={users} handleEditChange={handleEditChange} />
      <h2>Add User</h2>
      <UserForm
        user={newUser}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
export default hot(App);
