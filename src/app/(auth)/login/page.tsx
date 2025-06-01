import React from "react";

export default function LoginPage() {
  return (
    <div>
      <h2>Login Page</h2>
      <p>This is the login page within the auth group.</p>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
