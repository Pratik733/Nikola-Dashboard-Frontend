import React, { useState, useEffect } from "react";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";

import "./lstyle.css";

const Signup = () => {
  const [inputs, setInputs] = useState({
    role: "Select",
    firstname: "",
    lastname: "",
    organization: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setFormErrors(validate(inputs));
    setIsSubmit(true);
    // try {
    //   await axios.post("http://localhost:8000/api/auth/register", inputs);
    // } catch (err) {
    //   setErr(err.response.data);
    // }
  };
  const register = async (e) => {
    try {
      await axios
        .post("http://54.95.196.89:8000/api/auth/register", inputs)
        .then(() => {
          if (!err) {
            alert("Registered Successfully");
          }
        });
    } catch (err) {
      setErr(err.response.data);
    }
  };
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      register();
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // if (!values.username) {
    //   errors.username = "Username is required!";
    // }
    if (!values.mobile) {
      errors.mobile = "Mobile Number is required";
    } else if (values.mobile.length < 10) {
      errors.mobile = "Mobile Number must be of 10 digits";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  console.log(err);
  // // const [role, setRole] = useState("Select");
  // // const [fname, setFname] = useState("");
  // // const [lname, setLname] = useState("");
  // // const [org, setOrg] = useState("");
  // // const [email, setEmail] = useState("");
  // // const [mob, setMob] = useState(0);
  // // const [pass, setPass] = useState("");

  // const initialValues = {
  //   role: "Select",
  //   fname: "",
  //   lname: "",
  //   org: "",
  //   email: "",
  //   mob: "",
  //   password: "",
  // };
  // const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(true);
  //   console.log("HELLLLLLLLLLo");
  // };
  // const register = () => {
  //   Axios.post("http://localhost:3002/register", {
  //     role: formValues.role,
  //     fname: formValues.fname,
  //     lname: formValues.lname,
  //     org: formValues.org,
  //     email: formValues.email,
  //     mob: formValues.mob,
  //     pass: formValues.password,
  //   }).then(() => {
  //     console.log("success");
  //   });
  // };
  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     register();
  //     alert("User Registered Successfully");
  //     console.log(formValues);
  //   }
  // }, [formErrors]);

  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   // if (!values.username) {
  //   //   errors.username = "Username is required!";
  //   // }
  //   if (!values.mob) {
  //     errors.mob = "Mobile Number is required";
  //   } else if (values.mob.length < 10) {
  //     errors.mob = "Mobile Number must be of 10 digits";
  //   }
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
    <>
      <div className="center">
        <h1>Register</h1>
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
              placeholder="First Name"
              type="text"
              name="firstname"
              onChange={handleChange}
            />
          </div>
          <div className="txt_field">
            <input
              placeholder="Last Name"
              type="text"
              name="lastname"
              onChange={handleChange}
            />
          </div>
          <div className="txt_field">
            <input
              placeholder="Organization"
              type="text"
              name="organization"
              onChange={handleChange}
            />
          </div>
          <div className="txt_field">
            <input
              placeholder="Email ID"
              type="text"
              name="email"
              onChange={handleChange}
            />
            <p className="errs">{formErrors.email}</p>
          </div>
          <div className="txt_field">
            <input
              placeholder="Mobile No."
              type="number"
              name="mobile"
              onChange={handleChange}
            />
            <p className="errs">{formErrors.mobile}</p>
          </div>
          <div className="txt_field">
            <input
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
            />
            <p className="errs">{formErrors.password}</p>
          </div>
          <p className="errs">{err && err}</p>

          <button className="b-login" onClick={handleClick}>
            Register
          </button>
          <div className="signup_link">
            Already a member?{" "}
            <Link className="linn" to="../login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
