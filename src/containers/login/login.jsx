import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { updateUser, logoutUser } from "../../features/authUser";
import {
  Box,
  Container,
  styled,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Input } from "../../commons";
import { colors } from "../../styles/globals";

const StyledBox = styled(Box)({
  marginBottom: ["1rem", "1.4rem"],
});
const StyledLogin = styled(Box)({
  marginTop: "5rem",
  backgroundColor: "white",
  padding: "1rem",
  borderRadius: "15px",
});
const StyledButton = styled(Button)({
  backgroundColor: colors.PRIMARY,
  width: "200px",
  "&:hover": { backgroundColor: colors.PRIMARY },
});

const validate = Yup.object({
  Email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is Required"),
  Password: Yup.string()
    .min(6, "password  must contain at least six character")
    .required("Password can't be blank"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  return (
    <>
      <Box backgroundColor="#FBF5F5" minHeight={"88vh"}>
        <Container maxwidth={"lg"}>
          <Stack flexDirection={"row"} justifyContent={"flex-start"}>
            <StyledLogin width={["90%", "40%"]} mb={5}>
              <Box textAlign={"center"} margin={5}>
                <Typography
                  variant="h3"
                  fontSize={["1.5rem", "2rem"]}
                  fontWeight={600}
                  mb
                >
                  WELCOME BACK !
                </Typography>
                <Typography variant="p" fontSize={"1rem"}>
                  {" "}
                  please enter your details
                </Typography>
              </Box>
              <Formik
                initialValues={{
                  Email: "",
                  Password: "",
                }}
                validationSchema={validate}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setTimeout(async () => {
                    const load = {
                      username: values.Email,
                      password: values.Password,
                    };
                    try {
                      // const response = await axios.post(
                      //   `http://localhost:8080/api/register`,
                      //   load
                      // );
                      // const { data } = response;
                      setSubmitting(false);
                      dispatch(updateUser(load));
                      navigate(from, { replace: true });
                      //setFormSubmitted(true);
                    } catch (err) {
                      console.log(err);
                      resetForm(true);
                      //setFormSubmitError(true);
                      setTimeout(() => {
                        //setFormSubmitError(false);
                      }, 5000);
                    }
                  }, 400);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <StyledBox>
                      <Input
                        name="Email"
                        type="email"
                        placeholder="Enter  your E-mail"
                      />
                    </StyledBox>
                    <StyledBox>
                      <Input
                        name="Password"
                        type="password"
                        placeholder="Enter your password"
                      />
                    </StyledBox>
                    <Stack
                      direction={"row"}
                      justifyContent={"flex-end"}
                      p
                      mt={2}
                      mb={2}
                    ></Stack>

                    <StyledBox>
                      <StyledButton
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting}
                        fullWidth
                      >
                        {isSubmitting ? "Please Wait" : "sign in"}
                      </StyledButton>
                    </StyledBox>
                  </Form>
                )}
              </Formik>
              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                p
                mt={2}
                mb={2}
                color={colors.GREY}
              >
                <Box>
                  <Typography>Forgot your password?</Typography>
                </Box>
                <Box>
                  <Typography>Don't have an account ? Signup now</Typography>
                </Box>
              </Stack>
            </StyledLogin>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Login;
