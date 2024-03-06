import React from "react";
import {
  Container,
  Stack,
  styled,
  Typography,
  Box,
  Button,
} from "@mui/material";
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
  textTransform: "capitalize",
});

const StyledButton = styled(Button)({
  backgroundColor: colors.PRIMARY,
  width: "200px",
  marginTop: "1rem",
  boxShadow: "none",
  "&:hover": { backgroundColor: colors.PRIMARY, boxShadow: "none" },
});

const ExperimentM7 = () => {
  const params = useParams();
  const Id = params.id;
  const numb = 6;

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
                ...Array.from({ length: numb }).reduce((acc, _, index) => {
                  return {
                    ...acc,
                    [`y${index + 1}`]: "",
                  };
                }, {}),
                l1: "",
                l2: "",
                b: "",
                w: "",
                po1: "",
                ...Array.from({ length: numb }).reduce((acc, _, index) => {
                  return {
                    ...acc,
                    [`x${index + 1}`]: "",
                  };
                }, {}),
                po2: "",
                ...Array.from({ length: numb }).reduce((acc, _, index) => {
                  return {
                    ...acc,
                    [`u${index + 1}`]: "",
                  };
                }, {}),
                po3: "",
                ...Array.from({ length: numb }).reduce((acc, _, index) => {
                  return {
                    ...acc,
                    [`v${index + 1}`]: "",
                  };
                }, {}),
                po4: "",
                ...Array.from({ length: numb }).reduce((acc, _, index) => {
                  return {
                    ...acc,
                    [`w${index + 1}`]: "",
                  };
                }, {}),
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(async () => {
                  const payload = {
                    ...Object.fromEntries(
                      Object.entries(values)
                        .filter(([key]) => key.startsWith("y"))
                        .map(([key, value]) => [key, value])
                    ),

                    l1: values.l1,
                    l2: values.l2,
                    b: values.b,
                    w: values.w,
                    po1: values.po1,

                    ...Object.fromEntries(
                      Object.entries(values)
                        .filter(([key]) => key.startsWith("x"))
                        .map(([key, value]) => [key, value])
                    ),
                    po2: values.po2,
                    ...Object.fromEntries(
                      Object.entries(values)
                        .filter(([key]) => key.startsWith("u"))
                        .map(([key, value]) => [key, value])
                    ),
                    po3: values.po3,
                    ...Object.fromEntries(
                      Object.entries(values)
                        .filter(([key]) => key.startsWith("v"))
                        .map(([key, value]) => [key, value])
                    ),
                    po4: values.po4,
                    ...Object.fromEntries(
                      Object.entries(values)
                        .filter(([key]) => key.startsWith("w"))
                        .map(([key, value]) => [key, value])
                    ),
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
                    <Typography>input your Mass(g) values</Typography>
                    {Array.from({ length: numb }).map((_, index) => (
                      <Input
                        key={index}
                        name={`y${index + 1}`}
                        type="number"
                        placeholder={`m${index + 1}`}
                        required
                      />
                    ))}
                  </StyledForm>
                  <StyledForm>
                    <Input
                      label={"input your l1(cm) value"}
                      name="l1"
                      type="number"
                      placeholder={`l1 `}
                      required
                    />
                  </StyledForm>
                  <StyledForm>
                    <Input
                      label={"input your l2(cm) value"}
                      name="l2"
                      type="number"
                      placeholder={`l2 `}
                      required
                    />
                  </StyledForm>
                  <StyledForm>
                    <Input
                      label={"input your b(cm) value"}
                      name="b"
                      type="number"
                      placeholder={`b `}
                      required
                    />
                  </StyledForm>
                  <StyledForm>
                    <Input
                      label={"input your w(cm) value"}
                      name="w"
                      type="number"
                      placeholder={`w `}
                      required
                    />
                  </StyledForm>
                  <StyledForm>
                    <Typography fontWeight={700} fontSize={"1rem"}>
                      loading for L1
                    </Typography>
                  </StyledForm>
                  <StyledForm>
                    <Input
                      label={
                        <span>
                          input your P<sub>o</sub> value
                        </span>
                      }
                      name="po1"
                      type="number"
                      placeholder={` `}
                      required
                    />
                  </StyledForm>
                  <StyledForm>
                    <Typography>input your p readings</Typography>
                    {Array.from({ length: numb }).map((_, index) => (
                      <Input
                        key={index}
                        name={`x${index + 1}`}
                        type="number"
                        placeholder={`p${index + 1}`}
                        required
                      />
                    ))}
                  </StyledForm>
                  <StyledForm>
                    <Typography fontWeight={700} fontSize={"1rem"}>
                      unloading for L1
                    </Typography>
                  </StyledForm>
                  <StyledForm>
                    <Input
                      label={
                        <span>
                          input your P<sub>o</sub> value
                        </span>
                      }
                      name="po2"
                      type="number"
                      placeholder={` `}
                      required
                    />
                  </StyledForm>
                  <StyledForm>
                    <Typography>input your p readings</Typography>
                    {Array.from({ length: numb }).map((_, index) => (
                      <Input
                        key={index}
                        name={`u${index + 1}`}
                        type="number"
                        placeholder={`p${index + 1}`}
                        required
                      />
                    ))}
                  </StyledForm>
                  <StyledForm>
                    <Typography fontWeight={700} fontSize={"1rem"}>
                      loading for L2
                    </Typography>
                  </StyledForm>
                  <StyledForm>
                    <Input
                      label={
                        <span>
                          input your P<sub>o</sub> value
                        </span>
                      }
                      name="po3"
                      type="number"
                      placeholder={` `}
                      required
                    />
                  </StyledForm>
                  <StyledForm>
                    <Typography>input your p readings</Typography>
                    {Array.from({ length: numb }).map((_, index) => (
                      <Input
                        key={index}
                        name={`v${index + 1}`}
                        type="number"
                        placeholder={`p${index + 1}`}
                        required
                      />
                    ))}
                  </StyledForm>
                  <StyledForm>
                    <Typography fontWeight={700} fontSize={"1rem"}>
                      unloading for L2
                    </Typography>
                  </StyledForm>
                  <StyledForm>
                    <Input
                      label={
                        <span>
                          input your P<sub>o</sub> value
                        </span>
                      }
                      name="po4"
                      type="number"
                      placeholder={` `}
                      required
                    />
                  </StyledForm>
                  <StyledForm>
                    <Typography>input your p readings</Typography>
                    {Array.from({ length: numb }).map((_, index) => (
                      <Input
                        key={index}
                        name={`w${index + 1}`}
                        type="number"
                        placeholder={`p${index + 1}`}
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

export default ExperimentM7;
