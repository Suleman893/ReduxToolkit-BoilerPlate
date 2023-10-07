import React, { useState } from "react";
import SunEditor from "suneditor-react";
import 'suneditor/src/assets/css/suneditor.css';
import { useFormik } from "formik";
import {
  FieldError,
  Form,
  FormButton,
  FormColumn,
  FormFields,
  FormInput,
  FormLabel,
  InputTag,
  InputTags,
  RemoveTag,
  TagField,
} from "../Components/Forms/FormStyles";
import { postTheBlog } from "../features/blog/blogSlice";
import { addBlogSchema } from "../schemas/blogSchema";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader/Loader";

const Blog = ({ sidebarOpen }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.blog);
  const [blogDesc, setBlogDesc] = useState("");
  const [blogTags, setBlogTags] = useState([]);

  const handleBlogDesc = (value) => {
    setBlogDesc(value);
  };

  const addTags = (e) => {
    if (e.target.value !== "") {
      if (e.target.name === "blogTags")
        setBlogTags([...blogTags, e.target.value]);
      if (e.target.name === "tags") setBlogTags([...blogTags, e.target.value]);
      else e.target.value = "";
    }
  };

  const removeTags = (indexToRemove, name) => {
    if (name === "blogTags")
      setBlogTags(blogTags.filter((_, index) => index !== indexToRemove));
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        authorName: "",
        titleOfBlog: "",
        blogShortDesc: "",
        featuredImg: "",
        category: "",
      },
      validationSchema: addBlogSchema,
      onSubmit: (data) => {
        dispatch(postTheBlog({ data, blogDesc,blogTags }));
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
              <FormLabel htmlFor="blogTags">Blog tags</FormLabel>
              <TagField>
                <input
                  type="text"
                  name="blogTags"
                  placeholder="Enter multiple blog Tags"
                  onBlur={(e) => addTags(e)}
                />
                <InputTags>
                  {blogTags.map((blogTag, index) => (
                    <InputTag key={index}>
                      <span>{blogTag}</span>
                      <RemoveTag onClick={() => removeTags(index, "blogTags")}>
                        x
                      </RemoveTag>
                    </InputTag>
                  ))}
                </InputTags>
              </TagField>
              <SunEditor
                value={blogDesc}
                onChange={handleBlogDesc}
                height="300"
                placeholder="Write the blog..."
                setDefaultStyle="font-family: Inter-Bold; font-size: 16px;"
                autoFocus={true}
                setOptions={{
                  buttonList: [
                    [
                      "bold",
                      "underline",
                      "italic",
                      "strike",
                      "list",
                      "align",
                      "fontSize",
                      "formatBlock",
                      "table",
                      "image",
                      "video",
                      "print",
                      "codeView",
                      "fullScreen",
                      "showBlocks",
                      "fontColor",
                      "hiliteColor",
                      "indent",
                      "outdent",
                      "lineHeight",
                    ],
                  ],
                }}
              />
            </FormColumn>
          </FormFields>
          <FormButton Width type="submit">
            Post Blog
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

export default Blog;
