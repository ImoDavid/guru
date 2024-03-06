import React from "react";
import {
  Container,
  Stack,
  styled,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Input } from "../../commons";
import { colors } from "../../styles/globals";
import { PhysicsData } from "../../data";
import { updateInit } from "../../features/formStore";

const StyledH3 = styled(Typography)({
  fontSize: "2rem",
  textTransform: "uppercase",
  fontWeight: 700,
  marginBottom: 8,

  "@media screen and (max-width: 1200px)": {
    fontSize: "1rem",
  },
});

const StyledButton = styled(Button)({
  backgroundColor: colors.PRIMARY,
  width: "200px",
  marginTop: "1rem",
  boxShadow: "none",
  "&:hover": { backgroundColor: colors.PRIMARY, boxShadow: "none" },
});
const validate = Yup.object({
  InitValue: Yup.number().min(1, `Enter a number greater than 0`),
  diameter: Yup.number().min(1, `Enter a number greater than 0`),
  thickness: Yup.number().min(1, `Enter a number greater than 0`),
  breadth: Yup.number().min(1, `Enter a number greater than 0`),
  length: Yup.number().min(1, `Enter a number greater than 0`),
  period: Yup.number().min(1, `Enter a number greater than 0`),
});

const SinglePractical = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const Id = params.id;

  const item = PhysicsData.find((practical) => practical.id === Id);

  return (
    <>
      <Container maxWidth="lg">
        <Box color={colors.BLACK} p={3} mt={5}>
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
                InitValue: "",
                diameter: "",
                thickness: "",
                breadth: "",
                length: "",
                period:"",
              }}
              validationSchema={validate}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(async () => {
                  const payload = {
                    InitValue: values.InitValue,
                    diameter: values.diameter,
                    thickness: values.thickness,
                    breadth: values.breadth,
                    length: values.length,
                    period: values.period,
                  };

                  try {
                    dispatch(updateInit(payload));
                    resetForm(true);
                    setSubmitting(false);
                    navigate(`/automation/physicsAI/${Id}/${Id}`);
                    //setFormSubmitted(true);
                  } catch (err) {
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
                  <Input
                    label={item?.label || "how many rows will your table have?"}
                    name="InitValue"
                    type="number"
                    placeholder={`Enter number here `}
                    required
                  />
                  {item.dm && (
                    <Box my={3} variant="span">
                      <Input
                        label={"how many values for diameter?"}
                        name="diameter"
                        type="number"
                        placeholder={`Enter number here `}
                        required
                      />
                    </Box>
                  )}
                  {item.sl && (
                    <>
                      <Box my={3} variant="span">
                        <Input
                          label={"how many values for Breadth?"}
                          name="breadth"
                          type="number"
                          placeholder={`Enter number here `}
                          required
                        />
                      </Box>
                      <Box my={3} variant="span">
                        <Input
                          label={"how many values for Diameter?"}
                          name="diameter"
                          type="number"
                          placeholder={`Enter number here `}
                          required
                        />
                      </Box>
                    
                      <Box my={3} variant="span">
                        <Input
                          label={"how many values for Period of Oscillation?"}
                          name="period"
                          type="number"
                          placeholder={`Enter number here `}
                          required
                        />
                      </Box>
                      <Box my={3} variant="span">
                        <Input
                          label={"how many values for Length of Wire?"}
                          name="length"
                          type="number"
                          placeholder={`Enter number here `}
                          required
                        />
                      </Box>
                    </>
                  )}

                  <Stack alignItems={"center"}>
                    <StyledButton
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Please Wait" : "get tables"}
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

export default SinglePractical;
