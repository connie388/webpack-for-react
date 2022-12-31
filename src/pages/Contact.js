import React from "react"; //for React and EJX
import Input from "../components/Input";
import Button from "../components/Button";
import { useForm } from "../components/hooks/form-hook";

const Contact = (props) => {
  const [formState, inputHandler] = useForm({
    name: { value: "" },
    email: { value: "" },
    phone: { value: "" },
    message: { value: "" },
  });
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <form
      onSubmit={submitHandler}
      className="small-center-form container"
    >
      <Input
        id="name"
        element="input"
        type="text"
        label="Name"
        onInput={inputHandler}
        placeholder="Your name"
        required
      />
      <Input
        id="email"
        element="input"
        type="email"
        label="E-mail"
        placeholder="Enter email"
        onInput={inputHandler}
        required
      />
      <Input
        id="phone"
        element="input"
        type="tel"
        label="Number"
        onInput={inputHandler}
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
        onInput={inputHandler}
      />
      <Button type="submit">SUBMIT</Button>
    </form>
  );
};

export default Contact;
