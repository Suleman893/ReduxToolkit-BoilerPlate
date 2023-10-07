import React, { useEffect } from "react";
import "suneditor/dist/css/suneditor.min.css";
import { useFormik } from "formik";
import {
  FieldError,
  Form,
  FormButton,
  FormColumn,
  FormFields,
  FormInput,
  FormLabel,
} from "../Components/Forms/FormStyles";
import { blogById, editTheBlog } from "../features/blog/blogSlice";
import { addBlogSchema } from "../schemas/blogSchema";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader/Loader";
import { useParams } from "react-router-dom";
import BlogEditor from "../Components/Blog/BlogEditor";

const BlogDetail = ({ sidebarOpen }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blog, isLoading, isBlogUpdated } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(blogById(id));
    // eslint-disable-next-line
  }, [isBlogUpdated]);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      authorName: blog.authorName,
      titleOfBlog: blog.titleOfBlog,
      blogShortDesc: blog.blogShortDesc,
      featuredImg: blog.featuredImg,
      category: blog.category,
      blogDesc: blog.blogDesc,
    },
    validationSchema: addBlogSchema,
    enableReinitialize: true,
    onSubmit: (data) => {
      dispatch(editTheBlog({ id, data }));
    },
  });

  return (
    <BlogContainer open={sidebarOpen}>
      {isLoading ? (
        <Loader />
      ) : (
        <Form onSubmit={handleSubmit}>
          <FormFields Wrap>
            <FormColumn>
              <FormLabel htmlFor="authorName">Author Name</FormLabel>
              <FormInput
                type="text"
                name="authorName"
                value={values.authorName}
                onChange={handleChange}
                placeholder="Enter author name"
                onBlur={handleBlur}
              />
              <FieldError>
                {touched.authorName && errors.authorName && (
                  <>{errors.authorName}</>
                )}
              </FieldError>
              <FormLabel htmlFor="titleOfBlog">Title of Blog</FormLabel>
              <FormInput
                type="text"
                name="titleOfBlog"
                value={values.titleOfBlog}
                onChange={handleChange}
                placeholder="Enter title of blog"
                onBlur={handleBlur}
              />
              <FieldError>
                {touched.titleOfBlog && errors.titleOfBlog && (
                  <>{errors.titleOfBlog}</>
                )}
              </FieldError>
              <FormLabel htmlFor="blogShortDesc">
                Short Description of Blog
              </FormLabel>
              <FormInput
                type="text"
                name="blogShortDesc"
                value={values.blogShortDesc}
                onChange={handleChange}
                placeholder="Enter short description of blog"
                onBlur={handleBlur}
              />
              <FieldError>
                {touched.blogShortDesc && errors.blogShortDesc && (
                  <>{errors.blogShortDesc}</>
                )}
              </FieldError>
              <FormLabel htmlFor="featuredImg">Featured Image</FormLabel>
              <FormInput
                type="text"
                name="featuredImg"
                value={values.featuredImg}
                onChange={handleChange}
                placeholder="Place link of featured image"
                onBlur={handleBlur}
              />
              <FieldError>
                {touched.featuredImg && errors.featuredImg && (
                  <>{errors.featuredImg}</>
                )}
              </FieldError>
              <FormLabel htmlFor="category">Category</FormLabel>
              <FormInput
                type="text"
                name="category"
                value={values.category}
                onChange={handleChange}
                placeholder="Choose the category of blog"
                onBlur={handleBlur}
              />
              <FieldError>
                {touched.category && errors.category && <>{errors.category}</>}
              </FieldError>
              <BlogEditor blogDescProp={blog} setFieldValue={setFieldValue} />
            </FormColumn>
          </FormFields>
          <FormButton Width type="submit">
            Update Blog
          </FormButton>
        </Form>
      )}
    </BlogContainer>
  );
};

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
  margin-left: ${({ open }) => (open ? `100px` : `270px`)};
  margin-top: 40px;
  margin-right: 10px;
  margin-bottom: 20px;
  background: #fff;
  padding: 20px 40px;
`;

export default BlogDetail;
