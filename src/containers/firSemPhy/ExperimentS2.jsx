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
const ExperimentS2 = () => {
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
                r: "",
                f: "",
                w: "",

                ...Array.from({ length: numb }).reduce((acc, _, index) => {
                  return {
                    ...acc,
                    [`m${index + 1}`]: "",
                  };
                }, {}),
                ...Array.from({ length: numb }).reduce((acc, _, index) => {
                  return {
                    ...acc,
                    [`l${index + 1}`]: "",
                  };
                }, {}),
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(async () => {
                  const payload = {
                    dp: values.dp,
                    r: values.r,
                    f: values.f,
                    w: values.w,
                    ...Object.fromEntries(
                      Object.entries(values)
                        .filter(([key]) => key.startsWith("m"))
                        .map(([key, value]) => [key, value])
                    ),
                    ...Object.fromEntries(
                      Object.entries(values)
                        .filter(([key]) => key.startsWith("l"))
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
                      label={"radius of the wire, R"}
                      name="r"
                      type="number"
                      placeholder={`R`}
                      required
                    />
                  </StyledForm>
                  <StyledForm>
                    <Input
                      label={"input your value for frequency,f"}
                      name="f"
                      type="number"
                      placeholder={`f`}
                      required
                    />
                  </StyledForm>
                  <StyledForm>
                    <Input
                      label={"tension of wire, T"}
                      name="w"
                      type="number"
                      placeholder={`T `}
                      required
                    />
                  </StyledForm>

                  <Typography>{`Input your ${numb} values of M`}</Typography>
                  {Array.from({ length: numb }).map((_, index) => (
                    <Input
                      key={index}
                      name={`m${index + 1}`}
                      type="number"
                      placeholder={`M-${index + 1}`}
                      required
                    />
                  ))}
                  <StyledForm>
                    <Typography>{`Input your ${numb} values of l`}</Typography>
                    {Array.from({ length: numb }).map((_, index) => (
                      <Input
                        key={index}
                        name={`l${index + 1}`}
                        type="number"
                        placeholder={`l-${index + 1}`}
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
                      {isSubmitting ? <FormLoader /> : "see solution"}
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

export default ExperimentS2;
