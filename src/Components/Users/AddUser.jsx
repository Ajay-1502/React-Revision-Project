import React, { useState } from 'react';
import Card from '../UI/Card';
import './AddUser.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.length > 0 && age.length > 0) {
      age > 0 && props.onAddUser(userName, age);
    } else {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid username & age',
      });
      return;
    }
    setUserName('');
    setAge('');
  };

  const errorHandler = () => {
    setError();
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </div>
  );
};

export default AddUser;
