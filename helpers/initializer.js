import { FormState } from "../components/Forms/RoutineForm/InitialFormState";

const initializer = (values) => {
  var sessionFormData = new FormState(
    values.radiologists,
    values.nurses,
    values.radiographers
  );
  console.log(
    "Modified value use this for debugging in initializer",
    sessionFormData
  );
  return sessionFormData;
};

export default initializer;
