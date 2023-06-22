import { useState } from "react";
import { register } from "../config/firebase";
import { useUserContext } from "../context/userContext";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useUserContext();

  useRedirectActiveUser(user,'/search')

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("submit");
    try {
      console.log("Usuario Creado");
      register({ email, password });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <h1>Register</h1>
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
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
