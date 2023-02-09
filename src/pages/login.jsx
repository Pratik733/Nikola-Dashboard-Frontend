import React, { useContext, useState, useEffect } from "react";
import Axios from "axios";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../authContext";

import "./lstyle.css";
// import { Indexdash } from "./indexdash";

const Login = () => {
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

  // const initialValues = {
  //   role: "Select",
  //   email: "",
  //   password: "",
  // };
  // const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);
  // const [result, setResult] = useState([]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(true);
  //   // if (result.length >= 1) {
  //   //   alert("succ");
  //   // }
  // };
  // async function login() {
  //   await Axios.post("http://localhost:3002/login", {
  //     role: formValues.role,
  //     email: formValues.email,
  //     pass: formValues.password,
  //   }).then((res) => {
  //     setResult(res.data);
  //     console.log(res);
  //     // return res.data.length == 1 ? <Indexdash /> : <Login />;
  //   });
  // }
  // useEffect(() => {
  //   console.log(formErrors);
  //   // login();
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     login().then(() => {
  //       console.log(isSubmit);
  //       console.log(result);

  //       if (result.length == 1) {
  //         alert("Logged In Successfully");
  //       } else {
  //         alert("Wrong Credentials");
  //       }
  //     });
  //   }
  //   // console.log(formErrors);
  //   // if (Object.keys(formErrors).length === 0 && isSubmit) {
  //   //   console.log(formValues);
  //   // }
  // }, [formErrors]);

  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   // if (!values.username) {
  //   //   errors.username = "Username is required!";
  //   // }
  //   if (!values.email) {
  //     errors.email = "Email is required!";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "This is not a valid email format!";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   } else if (values.password.length < 4) {
  //     errors.password = "Password must be more than 4 characters";
  //   } else if (values.password.length > 10) {
  //     errors.password = "Password cannot exceed more than 10 characters";
  //   }
  //   return errors;
  // };

  return (
    <div className="center">
      <h1>Login</h1>
      <form>
        <div className="field">
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
        </div>
        <div className="txt_field">
          <input
            placeholder="Username or Email ID"
            type="text"
            name="email"
            onChange={handleChange}
          />
          {/* <p>{formErrors.email}</p> */}
        </div>
        <div className="txt_field">
          <input
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}
          />
          {/* <p>{formErrors.password}</p> */}
        </div>
        <p className="errs"> {err && err}</p>
        <div className="pass">Forgot Password?</div>
        <button className="b-login" onClick={handleLogin}>
          Login
        </button>
        <div className="signup_link">
          Not a member?{" "}
          <Link className="linn" to="../signup">
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
