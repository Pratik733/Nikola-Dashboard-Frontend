import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../authContext";

const Signup = () => {
  const [inputs, setInputs] = useState({
    role: "Select",
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <label>Role</label>
            <select name="role" onChange={handleChange}>
              <option value="Select">Select</option>
              <option value="Auto OEM">Auto OEM</option>
              <option value="Battery OEM">Battery OEM</option>
              <option value="Data Analyzer">Data Analyzer</option>
              <option value="Fleet Operator">Fleet Operator</option>
              <option value="End User">End User</option>
              <option value="Used Battery Buyer">Used Battery Buyer</option>
              <option value="EV Insurer">EV Insurer</option>
            </select>
            <input
              type="text"
              placeholder="Username"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
