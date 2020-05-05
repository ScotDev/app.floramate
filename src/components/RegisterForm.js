import React from 'react';
// import '../styles.min.css';

function RegisterForm() {
    return <form className="form">
        <label>
            Name:
      <input type="text" />
        </label>
        <input type="submit" value="Submit" />
    </form>
}

export default RegisterForm;