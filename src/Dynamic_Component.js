import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Dynamic_Component.scss";
function DynamicComponent({ recieveData }) {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  let handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
    // console.log('value-->',value);
  };

  let sendData = (e) => {
    e.preventDefault();
    recieveData(value)
  };

  return (
    <div className="Parent_Form">
      <Form className="Form" onSubmit={sendData}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={value.email}
            name="email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={value.password}
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default DynamicComponent;
