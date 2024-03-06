import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import { Input, Select } from "../../commons";
import { colors } from "../../styles/globals";

const StyledBox = styled(Box)({
  marginBottom: ["1rem", "1.4rem"],
});
const StyledLogin = styled(Box)({
  marginTop: "5rem",
  marginBottom: "5rem",
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
  firstname: Yup.string().required("please fill firstname").label("First Name"),
  lastname: Yup.string().required("plase fill lastname").label("last Name"),
  Email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is Required"),
  Password: Yup.string()
    .min(8, "password must be 8 characters or more")
    .matches(/[A-Z]+/, "password must contain atleast one uppercase character ")
    .matches(/[a-z]+/, "password must contain atleast one lowercase character")
    .matches(/\d+/, "password must contain atleast one number")
    .matches(
      /[@$!%*#?&]+/,
      "password must contain atleast one special character"
    )
    .required("Password can't be blank"),
  Passwordrepeat: Yup.string()
    .oneOf([Yup.ref("Password"), null], "Passwords must match")
    .required("Password confirmation is required"),
  Department: Yup.string().min(
    1,
    "Item Name must contain at least a character"
  ),
});
const Departments = [
  { title: "medsurg", value: "med" },
  { title: "law", value: "law" },
  { title: "medsurg", value: "medr" },
];

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  return (
    <>
      <Box backgroundColor="#FBF5F5" minHeight={"88vh"}>
        <Container maxwidth={"lg"}>
          <Stack flexDirection={"row"} justifyContent={"flex-start"}>
            <StyledLogin width={["90%", "40%"]}>
              <Box textAlign={"center"} margin={5}>
                <Typography
                  variant="h3"
                  fontSize={["1.25rem", "2rem"]}
                  fontWeight={600}
                  mb
                >
                  Create a GURU account
                </Typography>
                <Typography variant="p" fontSize={"1rem"}>
                  {" "}
                  please enter your details
                </Typography>
              </Box>
              <Formik
                initialValues={{
                  firstname: "",
                  lastname: "",
                  Email: "",
                  Password: "",
                  Passwordrepeat: "",
                  Department: "",
                }}
                validationSchema={validate}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setTimeout(async () => {
                    const payload = {
                      firstname: values.firstname,
                      lastname: values.lastname,
                      email: values.Email,
                      Password: values.Password,
                      Passwordrepeat: values.Passwordrepeat,
                      department: values.Department,
                    };
                    try {
                      //   const response = await axios.post(
                      //     `https://raw.pchofficials.com/api/submit-delivery`,
                      //     payload
                      //   );
                      console.log(payload);
                      resetForm(true);
                      setSubmitting(false);
                      navigate(from, { replace: true });
                      //setFormSubmitted(true);
                    } catch (err) {
                      //setFormSubmitError(true);
                      console.log("error");
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
                        name="firstname"
                        type="text"
                        placeholder="Firstname"
                      />
                    </StyledBox>
                    <StyledBox>
                      <Input
                        name="lastname"
                        type="text"
                        placeholder="Lastname"
                      />
                    </StyledBox>
                    <StyledBox>
                      <Input name="Email" type="email" placeholder="E-mail" />
                    </StyledBox>
                    <StyledBox>
                      <Input
                        name="Password"
                        type="text"
                        placeholder="Enter password"
                      />
                    </StyledBox>
                    <StyledBox>
                      <Input
                        name="Passwordrepeat"
                        type="password"
                        placeholder="Repeat password"
                      />
                    </StyledBox>
                    <StyledBox>
                      <Select name="Department" option={Departments} />
                    </StyledBox>
                    <StyledBox>
                      <StyledButton
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting}
                        fullWidth
                      >
                        {isSubmitting ? "Please Wait" : "sign up"}
                      </StyledButton>
                    </StyledBox>
                  </Form>
                )}
              </Formik>
            </StyledLogin>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Register;
