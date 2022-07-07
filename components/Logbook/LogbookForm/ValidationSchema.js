import * as yup from "yup";

const NOTE_VALIDATION = yup.object().shape({
    username: yup.string().required(),
})

export default NOTE_VALIDATION;