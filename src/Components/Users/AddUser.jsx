import { useState } from 'react';
import Card from '../UI/Card';
import './AddUser.css';
import Button from '../UI/Button';

const AddUser = () => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(userName, age);
    setUserName('');
    setAge('');
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
