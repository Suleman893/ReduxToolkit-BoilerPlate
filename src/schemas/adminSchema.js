import * as yup from "yup";

const roles = ["Admin", "Super Admin"];

export const adminSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is Required"),
  role: yup.string().oneOf(roles, "The role you chose does not exist"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Your password is too short.")
    .max(14, "Password can't be greater than 14 characters"),
  confirmPassword: yup
    .string()
    .label("confirm password")
    .required()
    .oneOf([yup.ref("password"), null], "Password must match"),
});

export const updateAdminSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  role: yup.string().oneOf(roles, "This role don't exist"),
});
