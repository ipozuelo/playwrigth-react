import { useState } from "react";
import { login } from "../config/firebase";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useUserContext();

  useRedirectActiveUser(user,'/search')

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      console.log("Login Correcto");
      const creadentialUser = await login({ email, password });
      console.log(creadentialUser);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/register" className="btn btn-outline-primary">
        Registrate
      </Link>
    </>
  );
};

export default Login;
