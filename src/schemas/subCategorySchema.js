import * as yup from "yup";

export const addSubCategorySchema = yup.object().shape({
  title: yup.string().required("First Name is required"),
  path: yup.string().required("Last Name is required"),
  subCategoryDesc: yup.string().required("Sub Category is required"),
  category: yup.string().required("Category is required"),
  subCategoryImg: yup.string().required("SubCategory image is required"),
});
