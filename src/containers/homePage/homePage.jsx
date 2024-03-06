import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Stack, styled, Typography, Box } from "@mui/material";
import { PrimaryButton, SubHeader } from "../../commons";
import { colors } from "../../styles/globals";
import { TopPerformers, Pricing, HowItWorks } from "../../components/homepage";

const StyledBox = styled(Box)({
  // background: `url(https://res.cloudinary.com/dfljnnxln/image/upload/v1700576621/pexels-pixabay-267885_iem48o.jpg)`,
  backgroundColor: colors.PRIMARY,
  // backgroundSize: "cover",
  // backgroundPosition: "Top Center",
  // backgroundRepeat: "no-repeat",
  "@media screen and (max-width: 1200px)": {
    //background: `url(https://res.cloudinary.com/dfljnnxln/image/upload/v1700577047/young-pretty-student-smiling-gleefully-feeling-happy-satisfied-relaxed-with-crossed-arms-looking-side_1194-27617_itch8o.avif)`,
    // backgroundSize: "cover",
    // backgroundPosition: "Bottom Right",
  },
});

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledBox minHeight={["40vh", "40vh"]}>
        <Container>
          <Stack alignItems={"center"}>
            <Box mt={[5, 8]} textAlign={"center"} p={3}>
              <Typography
                fontSize={["2rem", "2.8rem"]}
                color={colors.WHITE}
                fontWeight={700}
                textTransform={"capitalise"}
              >
                An easy way to get your practicals sorted
              </Typography>
              <Typography
                variant="p"
                color={"white"}
                fontSize={["1rem", "1rem"]}
              >
                welcome to Guru,your gateway to a world of knowdledge and
                learning opportuinities.
              </Typography>
              {/* <Typography
                variant="p"
                color={"white"}
                fontSize={["1rem", "1rem"]}
              >
                Guru makes it easy to get things done.Get unlimited access to
                all the features of our service by signing up today.
              </Typography> */}
              <Box mt={3}>
                <Link to="/automation">
                  <PrimaryButton
                    text={"start learning"}
                    width={"150px"}
                    BGColor="white"
                    textColor="black"
                    // onClick={() => navigate("/automation")}
                  />
                </Link>
              </Box>
            </Box>
          </Stack>
        </Container>
      </StyledBox>
      <HowItWorks />
      <Container>
        <Pricing />
        <SubHeader
          title="Tell us how you'll like us to improve, leave a feedback."
          djes="With As an active trader you can also qualify for lower fees and extra benefits.transparent pricing structure Arbonnetradestockminingfx you get dummy lopsum .
           "
          image="https://s3.amazonaws.com/prod-hmhco-vmg-craftcms-public/home/HMHCo_Homepage_students-with-teacher_WF17092822.png"
          btext="send feedback"
        />
      </Container>
      <TopPerformers />
    </>
  );
};

export default HomePage;
