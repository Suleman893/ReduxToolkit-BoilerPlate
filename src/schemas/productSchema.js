import * as yup from "yup";

export const addProductSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  videoLink: yup.string().required("Video link is required"),
  blogLink: yup.string().required("Blog link is required"),
});
