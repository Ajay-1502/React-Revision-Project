import './UsersList.css';
import Card from '../UI/Card';

const UsersList = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.users.map((user, index) => {
          return (
            <div>
              <li key={index}>{`${user.name} ${user.age} years old`}</li>
            </div>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
