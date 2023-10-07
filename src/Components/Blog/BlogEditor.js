import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/src/assets/css/suneditor.css";

const BlogEditor = ({ blogDescProp, setFieldValue }) => {
  const handleBlogDesc = (value) => {
    setFieldValue("blogDesc", value);
  };

  return (
    <SunEditor
      name="blogDesc"
      autoFocus={true}
      defaultValue={blogDescProp.blogDesc}
      onChange={handleBlogDesc}
      height="300"
      placeholder="Write the blog..."
      setDefaultStyle="font-family: Inter-Bold; font-size: 16px;"
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
  );
};

export default BlogEditor;
