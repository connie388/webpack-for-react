// https://reactjs.org/docs/hooks-reference.html
// refer to How to Create a Reusable React Form component by Gerald Ezenagu
import { useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        [action.id]: action.value,
      };
    default:
      return state;
  }
};

// props: inputs contain initial data of the form
export const useForm = (inputs) => {
  const [form, dispatch] = useReducer(formReducer, inputs);

  //A method to handle form inputs
  const handleChange = (event) => {
    //To stop default events
    event.persist();

    const target = event.target;
    const value =
      target.getAttribute("type") === "checkbox"
        ? target.checked
        : target.value;
    const id = target.id;
    // validate(event, name, value);

    // setInputs((values) => ({ ...values, [id]: value }));
    dispatch({ type: "INPUT_CHANGE", value: value, id: id });
  };

  const setFormData = ({ id, value }) => {
    dispatch({ type: "INPUT_CHANGE", value: value, id: id });
  };

  return [form, handleChange, setFormData];
};
