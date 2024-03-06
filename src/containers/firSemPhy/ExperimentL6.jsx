import React from "react";
import {
  Container,
  Stack,
  styled,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { Input } from "../../commons";
import { colors } from "../../styles/globals";
import { PhysicsData } from "../../data";
import { FormLoader } from "../../components/loader";

const StyledH3 = styled(Typography)({
  fontSize: "2rem",
  textTransform: "uppercase",
  fontWeight: 700,
  marginBottom: 2,
  "@media screen and (max-width: 1200px)": {
    fontSize: "1.3rem",
  },
});
const StyledForm = styled(Box)({
  marginTop: "2rem",
  marginBottom: "2rem",
});

const StyledButton = styled(Button)({
  backgroundColor: colors.PRIMARY,
  width: "200px",
  marginTop: "1rem",
  boxShadow: "none",
  "&:hover": { backgroundColor: colors.PRIMARY, boxShadow: "none" },
});
const ExperimentL6 = () => {
  const params = useParams();
  const { initValue } = useSelector((state) => state.formStore);
  const Id = params.id;
  const numb = initValue;

  const item = PhysicsData.find((practical) => practical.id === Id);

  return (
    <>
      <Container maxWidth="lg">
        <Box p={3} mt={5}>
          <Box textAlign={"center"} textTransform={"capitalize"}>
            <StyledH3>{item?.experiment}</StyledH3>
            <StyledH3>{item?.title}</StyledH3>
            <Typography variant="p" fontSize={"1rem"} fontWeight={700}>
              table arrangements
            </Typography>
          </Box>
          <Box px={["0", "15rem"]} my={5} minHeight={"50vh"}>
            <Formik
              initialValues={{
                dp: "",
                f: "",
                ...Array.from({ length: numb }).reduce((acc, _, index) => {
                  return {
                    ...acc,
                    [`d${index + 1}`]: "",
                  };
                }, {}),
                ...Array.from({ length: numb }).reduce((acc, _, index) => {
                  return {
                    ...acc,
                    [`p1${index + 1}`]: "",
                  };
                }, {}),
                ...Array.from({ length: numb }).reduce((acc, _, index) => {
                  return {
                    ...acc,
                    [`p2${index + 1}`]: "",
                  };
                }, {}),
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(async () => {
                  const payload = {
                    dp: values.dp,
                    f: values.f,
                    ...Object.fromEntries(
                      Object.entries(values)
                        .filter(([key]) => key.startsWith("d"))
                        .map(([key, value]) => [key, value])
                    ),
                    ...Object.fromEntries(
                      Object.entries(values)
                        .filter(([key]) => key.startsWith("p1"))
                        .map(([key, value]) => [key, value])
                    ),
                    ...Object.fromEntries(
                      Object.entries(values)
                        .filter(([key]) => key.startsWith("p2"))
                        .map(([key, value]) => [key, value])
                    ),
                    numberOfrows: numb,
                  };

                  try {
                    console.log(payload);
                    resetForm(true);
                    setSubmitting(false);
                    //setFormSubmitted(true);
                  } catch (err) {
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
                  <StyledForm>
                    <Input
                      label={
                        "how many decimal places do you want for your calculations"
                      }
                      name="dp"
                      type="number"
                      placeholder={`Enter Decimal place `}
                      required
                    />
                  </StyledForm>
                  <StyledForm>
                    <Input
                      label={
                        <span>
                          input your value of f<sub>app</sub>
                        </span>
                      }
                      name="f"
                      type="number"
                      placeholder={`Fapp`}
                      required
                    />
                  </StyledForm>

                  <Typography>{`Input your ${numb} values of D`}</Typography>
                  {Array.from({ length: numb }).map((_, index) => (
                    <Input
                      key={index}
                      name={`d${index + 1}`}
                      type="number"
                      placeholder={`D-${index + 1}`}
                      required
                    />
                  ))}
                  <StyledForm>
                    <Typography>
                      {`Input your ${numb} values of P`}
                      <sub>1</sub>
                    </Typography>
                    {Array.from({ length: numb }).map((_, index) => (
                      <Input
                        key={index}
                        name={`p1${index + 1}`}
                        type="number"
                        placeholder={`P1-${index + 1}`}
                        required
                      />
                    ))}
                  </StyledForm>
                  <StyledForm>
                    <Typography>
                      {`Input your ${numb} values of P`}
                      <sub>2</sub>
                    </Typography>
                    {Array.from({ length: numb }).map((_, index) => (
                      <Input
                        key={index}
                        name={`p2${index + 1}`}
                        type="number"
                        placeholder={`P2-${index + 1}`}
                        required
                      />
                    ))}
                  </StyledForm>

                  <Stack alignItems={"center"}>
                    <StyledButton
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? <FormLoader/> : "see solution"}
                    </StyledButton>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ExperimentL6;
