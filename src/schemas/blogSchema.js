import * as yup from "yup";


export const addBlogSchema = yup.object().shape({
  authorName: yup.string().required("Author name is required"),
  titleOfBlog: yup.string().required("Title of blog is required"),
  blogShortDesc: yup.string().required("Blog short description is required"),
  featuredImg: yup.string().required("Featured image is required"),
  category: yup
    .string()
    .required("Category is required")
    .oneOf(categories, "Category don't exist"),
});
