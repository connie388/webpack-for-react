import React from "react"; //for React and EJX
import Input from "../components/Input";
import Button from "../components/Button";
import { useForm } from "../components/hooks/useForm";

const Contact = (props) => {
  const [form, handleChange] = useForm({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(form);
  };
  return (
    <div className="wrapper">
      <form onSubmit={submitHandler} className="small-center-form container">
        <Input
          id="name"
          element="input"
          type="text"
          label="Name"
          value={form.name}
          changeHandler={handleChange}
          placeholder="Your name"
          required
        />
        <Input
          id="email"
          element="input"
          type="email"
          label="E-mail"
          value={form.email}
          placeholder="Enter email"
          changeHandler={handleChange}
          required
        />
        <Input
          id="phone"
          element="input"
          type="tel"
          label="Number"
          value={form.phone}
          changeHandler={handleChange}
          placeholder="Enter phone number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
          childrenClassName=""
        >
          <small>Format: 123-456-7890</small>
        </Input>
        <Input
          id="message"
          element="textarea"
          label="Message"
          placeholder="Enter your message"
          value={form.message}
          changeHandler={handleChange}
        />
        <Button type="submit">SUBMIT</Button>
      </form>
    </div>
  );
};

export default Contact;
