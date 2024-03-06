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

const ExperimentM2 = () => {
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
                n: "",
                t1: "",
                t2: "",

                ...Array.from({ length: numb }).reduce((acc, _, index) => {
                  return {
                    ...acc,
                    [`Y${index + 1}`]: "",
                  };
                }, {}),
                ...Array.from({ length: numb }).reduce((acc, _, index) => {
                  return {
                    ...acc,
                    [`t1${index + 1}`]: "",
                  };
                }, {}),
                ...Array.from({ length: numb }).reduce((acc, _, index) => {
                  return {
                    ...acc,
                    [`t2${index + 1}`]: "",
                  };
                }, {}),
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(async () => {
                  const payload = {
                    dp: values.dp,
                    n: values.n,
                    ...Object.fromEntries(
                      Object.entries(values)
                        .filter(([key]) => key.startsWith("Y"))
                        .map(([key, value]) => [key, value])
                    ),
                    ...Object.fromEntries(
                      Object.entries(values)
                        .filter(([key]) => key.startsWith("t1"))
                        .map(([key, value]) => [key, value])
                    ),
                    ...Object.fromEntries(
                      Object.entries(values)
                        .filter(([key]) => key.startsWith("t2"))
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
                      label={"Number of oscillations"}
                      name="n"
                      type="number"
                      placeholder={`0`}
                      required
                    />
                  </StyledForm>
                  <StyledForm>
                    <Input
                      label={
                        <Typography>
                          {"Initial t"}
                          <sub>1</sub>
                        </Typography>
                      }
                      name="t1"
                      type="number"
                      placeholder={`t1`}
                      required
                    />
                  </StyledForm>
                  <StyledForm>
                    <Input
                      label={
                        <Typography>
                          {"Initial t"}
                          <sub>2</sub>
                        </Typography>
                      }
                      name="t2"
                      type="number"
                      placeholder={`t2`}
                      required
                    />
                  </StyledForm>
                  <Typography>{`Input your ${numb} Y(cm) values`}</Typography>
                  {Array.from({ length: numb }).map((_, index) => (
                    <Input
                      key={index}
                      name={`Y${index + 1}`}
                      type="number"
                      placeholder={`t1-${index + 1}`}
                      required
                    />
                  ))}
                  <StyledForm>
                    <Typography>
                      {`Input your ${numb} `}t<sub>1</sub> values
                    </Typography>
                    {Array.from({ length: numb }).map((_, index) => (
                      <Input
                        key={index}
                        name={`t1${index + 1}`}
                        type="number"
                        placeholder={`t1-${index + 1}`}
                        required
                      />
                    ))}
                  </StyledForm>
                  <StyledForm>
                    <Typography>
                      {`Input your ${numb} `}t<sub>2</sub> values
                    </Typography>
                    {Array.from({ length: numb }).map((_, index) => (
                      <Input
                        key={index}
                        name={`t2${index + 1}`}
                        type="number"
                        placeholder={`t2-${index + 1}`}
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
                      {isSubmitting ? <FormLoader/> : "get solution"}
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

export default ExperimentM2;
