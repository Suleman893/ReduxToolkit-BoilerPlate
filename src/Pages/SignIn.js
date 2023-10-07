import React, { useState } from "react";
import styled from "styled-components";
import {
  CombinedField,
  FieldError,
  FormInput,
  FormLabel,
  PasswordShow,
} from "../Components/Forms/FormStyles";
import { Button, Img } from "../GlobalStyles";
import BTLogo from "../assets/images/BTLogo.png";
import { useDispatch } from "react-redux";
import {
  loginTheAdmin,
  registerTheAdminWithGoogle,
  registerTheAdminWithFacebook,
} from "../features/admin/adminSlice";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import FacebookLogin from "react-facebook-login";

function SignIn() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("Password is required"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema,
      onSubmit: (data) => {
        data.history = history; //Passing the history/navigate hook to the loginTheAdmin function :D
        dispatch(loginTheAdmin(data));
      },
    });

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const responseFacebook = (response) => {
    dispatch(registerTheAdminWithFacebook({ response, history }));
  };

  const renderForm = (
    <FrontPage>
      <CompanyName>
        <RoundedLogo>
          <Img src={BTLogo} alt="logo" />
        </RoundedLogo>
      </CompanyName>
      <LogInForm>
        {/* <RoundedLogo Differ>
          <Img src={logo} alt="logo" /> */}
        {/* <LogoHeading>Admin Panel</LogoHeading> */}
        {/* </RoundedLogo> */}
        <FormContent onSubmit={handleSubmit}>
          <CombinedField>
            <FormLabel>Email </FormLabel>
            <FormInput
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              FontSize="16px"
              Padding="15px"
              PlaceholderStyle="true"
            />
            <FieldError>
              {touched.email && errors.email && <>{errors.email}</>}
            </FieldError>
          </CombinedField>
          <CombinedField>
            <FormLabel>Password </FormLabel>
            <FormInput
              type={passwordShown ? "text" : "password"}
              placeholder="Enter Password"
              name="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              FontSize="16px"
              Padding="15px"
              PlaceholderStyle="true"
            />
            <PasswordShow onClick={togglePassword} />
            <FieldError>
              {touched.password && errors.password && <>{errors.password}</>}
            </FieldError>
          </CombinedField>
          <Button type="submit">Login</Button>
        </FormContent>
        <OAuthSection>
          {/* <FcGoogle
            style={{
              fontSize: "30px",
            }} 
          /> */}
          <GoogleLogin
            type="icon"
            onSuccess={({ credential }) => {
              dispatch(registerTheAdminWithGoogle({ credential, history }));
            }}
            onError={() => {
              toast.error("Login Failed", { theme: "colored" });
            }}
          />
          <FacebookLogin
            appId="612458577372049"
            autoLoad={true}
            fields="name,email,picture"
            // onClick={componentClicked}
            callback={responseFacebook}
            icon="fa-facebook"
            size="small"
            textButton=""
            cssClass="facebook"
          />
        </OAuthSection>
      </LogInForm>
    </FrontPage>
  );

  return <div>{renderForm}</div>;
}

export const FrontPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 10px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const CompanyName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;
  background: #2196f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 920px) {
    display: none;
  }
`;

export const LogoHeading = styled.div`
  font-size: 30px;
  line-height: 35px;
  color: #2196f3;
`;
export const LogInForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 30px;
  padding: 20px;
  width: 50%;
  @media screen and (max-width: 920px) {
    width: 100%;
  }
`;
export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

export const RoundedLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: ${({ Differ }) => (Differ ? "100px" : "200px")};
  }
`;

export const OAuthSection = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 20px;

  .facebook {
    width: 39px;
    height: 39px;
    background: #2196f3;
    border: 1px solid rgba(130, 151, 255, 0.5);
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    font-weight: 900;
    cursor: pointer;
  }
`;

export default SignIn;
