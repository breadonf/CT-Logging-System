import * as yup from "yup";

const LOG_VALIDATION = yup.object().shape({
    inputDate: yup.string().required("Required"),
    effectiveDate: yup.string().required("Required"),
    inputUser: yup.string().required("Please Enter Your Name"),
})

export default LOG_VALIDATION;