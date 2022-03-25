import * as React from 'react';
import PropTypes from 'prop-types';

const UserForm = ({ user, handleChange, handleSubmit }) => {
  const handleSubmitType = (e) => {
    if (user.id) {
      handleSubmit(e, "existing", user.id);
    }
    if (!user.id) {
      handleSubmit(e, "new");
    }
  };

  return (
    <>
      <form className="UserForm" onSubmit={handleSubmitType}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            value={user.name || ""}
            onChange={(e) => handleChange(e)}
          ></input>
        </fieldset>
        <fieldset>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            value={user.username || ""}
            onChange={(e) => handleChange(e)}
          ></input>
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={user.email || ""}
            onChange={(e) => handleChange(e)}
          ></input>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

UserForm.propTypes = {
  addPerson: PropTypes.func,
};

export default UserForm;
