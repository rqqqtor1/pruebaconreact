import React from 'react';

const Form = () => {
  return (
    <div className="dropdown">
      {/* Botón para mostrar el formulario */}
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Open Form
      </button>

      {/* Formulario dentro del menú desplegable */}
      <div className="dropdown-menu p-4" aria-labelledby="dropdownMenuButton">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleDropdownFormEmail1"
              placeholder="email@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleDropdownFormPassword1"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="dropdownCheck"
              />
              <label className="form-check-label" htmlFor="dropdownCheck">
                Remember me
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">
          New around here? Sign up
        </a>
        <a className="dropdown-item" href="#">
          Forgot password?
        </a>
      </div>
    </div>
  );
};

export default Form;