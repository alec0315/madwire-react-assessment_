import * as React from 'react';
import PropTypes from 'prop-types';

const UsersTable = ({ users = {}, handleEditChange }) => {
  const renderPersons = () => {
    if (users.persons) {
      return users.persons.map((person, idx) => {
        return (
          <tr key={`person-${name}-${idx}`}>
            <th>{person.name}</th>
            <th>{person.username}</th>
            <th>{person.email}</th>
            <th>
              <button
                onClick={() => {
                  handleEditChange(person.id);
                }}
              >
                Edit
              </button>
            </th>
          </tr>
        );
      });
    }

    return null;
  };

  return (
    <table className="UsersTable table table-striped">
      <thead>
        <tr className="table-active">
          <td>Name</td>
          <td>Username</td>
          <td>Email</td>
          <td>Edit</td>
        </tr>
        {renderPersons()}
      </thead>
    </table>
  );
};

UsersTable.propTypes = {
  users: PropTypes.object,
};

export default UsersTable;
