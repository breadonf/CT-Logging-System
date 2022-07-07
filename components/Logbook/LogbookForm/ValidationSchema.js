import * as yup from "yup";

const LOG_VALIDATION = yup.object().shape({
    username: yup.string().required(),
})

export default LOG_VALIDATION;