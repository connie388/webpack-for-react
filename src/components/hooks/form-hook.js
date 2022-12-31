// https://reactjs.org/docs/hooks-reference.html
// refer to How to Create a Reusable React Form component by Gerald Ezenagu
import { useReducer, useCallback } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        inputs: { ...state.inputs, [action.inputId]: { value: action.value } },
      };
    default:
      return state;
  }
};

export const useForm = (initialInput) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInput,
  });

  const inputHandler = (id, value) => {
    dispatch({ type: "INPUT_CHANGE", value: value, inputId: id });
  };

  const setFormData = useCallback((inputData) => {
    dispatch({ type: "SET_DATA", inputs: inputData });
  }, []);

  return [formState, inputHandler, setFormData];
};
