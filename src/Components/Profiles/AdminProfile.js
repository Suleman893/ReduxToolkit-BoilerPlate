import React from "react";
import { Img } from "../../GlobalStyles";
import {
  Form,
  FormInput,
  FormLabel,
  UploadedImage,
  UserImage,
  FormButton,
  FormColumn,
  FormFields,
  FieldError,
  CombinedField,
} from "../Forms/FormStyles";
import AddImage from "../../assets/images/AddImage.png";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { editTheAdmin } from "../../features/admin/adminSlice";
import Loader from "../Loader/Loader";
import { useFormik } from "formik";
import { updateAdminSchema } from "../../schemas/adminSchema";


const AdminProfile = () => {
  const dispatch = useDispatch();

  const roles = ["Admin", "Super Admin"];
  const { adminInfo, isLoading } = useSelector((state) => state.admin);

  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      _id: adminInfo?.admin._id,
      firstName: adminInfo?.admin.firstName,
      lastName: adminInfo?.admin.lastName,
      role: adminInfo?.admin.role,
      adminImage: adminInfo?.admin.adminImage,
    },
    validationSchema: updateAdminSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: (data) => {
      dispatch(editTheAdmin(data));
    },
  });

  // if (isLoading) {
  //   return <Loader />;
  // }

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
        setFieldValue("adminImage", current.src);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ProfileContainer>
    {isLoading ? <Loader /> :
      <Form onSubmit={handleSubmit}>
        <FormFields Wrap>
          <FormColumn>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <FormInput
              type="firstName"
              name="firstName"
              placeholder="Enter First Name"
              onChange={handleChange}
              value={values.firstName}
            />
            <FieldError>
              {errors.firstName ? errors.firstName : null}
            </FieldError>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <FormInput
              type="lastName"
              name="lastName"
              placeholder="Enter Last Name"
              onChange={handleChange}
              value={values.lastName}
            />
            <FieldError>{errors.lastName ? errors.lastName : null}</FieldError>
            <CombinedField>
              <FormLabel htmlFor="role">Role</FormLabel>
              <select
                name="role"
                id="role"
                onChange={handleChange}
                value={values.role}
              >
                {roles.map((role, index) => (
                  <option value={role} key={index}>
                    {role}
                  </option>
                ))}
              </select>
              <FieldError>{errors.role ? errors.role : null}</FieldError>
            </CombinedField>
          </FormColumn>
          <UserImage primary onClick={() => imageUploader.current.click()}>
            <input
              type="file"
              accept="image/*"
              name="adminImage"
              onChange={(e) => handleImageUpload(e)}
              ref={imageUploader}
              style={{
                display: "none",
              }}
            />
            <Img src={AddImage} alt="Add Image" />
            <UploadedImage>
              <img src={values.adminImage} ref={uploadedImage} alt="" />
            </UploadedImage>
          </UserImage>
        </FormFields>
        <FormButton type="submit" Width>
          Update
        </FormButton>
      </Form>
}
    </ProfileContainer>
  );
};

export const ProfileContainer = styled.div`
  transition: 850ms;
  background: #ffffff;
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease-in-out;
  padding: 30px 20px;
  border-radius: 10px;
`;
export default AdminProfile;
