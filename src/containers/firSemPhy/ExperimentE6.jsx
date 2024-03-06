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
const ExperimentE6 = () => {
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
                e1: "",
                l1: "",
                l2: "",
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(async () => {
                  const payload = {
                    dp: values.dp,
                    e1: values.e1,
                    l1: values.l1,
                    l2: values.l2,

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
                      label={"Emf of standard cell(v)"}
                      name="e1"
                      type="number"
                      placeholder={` Emf`}
                      required
                    />
                  </StyledForm>
                  <StyledForm>
                    <Input
                      label={"balance length for standard cell(mm)"}
                      name="l1"
                      type="number"
                      placeholder={` L1`}
                      required
                    />
                  </StyledForm>
                  <StyledForm>
                    <Input
                      label={"balance length for standard cell(mm)"}
                      name="l2"
                      type="number"
                      placeholder={` L2`}
                      required
                    />
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

export default ExperimentE6;
