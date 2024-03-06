import React from "react";
import { Container, Stack, Typography, Box } from "@mui/material";
import { Headline } from "../../commons";
import { FaCreditCard, FaHandshake } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { GiPartyPopper } from "react-icons/gi";
import { colors } from "../../styles/globals";

const Data = [
  {
    icon: <FaCreditCard color={colors.PRIMARY} size={"2rem"} />,
    title: "choose plan",
    text: `pick from a variety of our student friendly planspick from a
  variety of our student friendly planspick from a variety of
  our student`,
    showIcon: true,
  },
  {
    icon: <FaHandshake color={colors.PRIMARY} size={"2rem"} />,
    title: "subscribe",
    text: `pick from a variety of our student friendly planspick from a
  variety of our student friendly planspick from a variety of
  our student`,
    showIcon: true,
  },
  {
    icon: <GiPartyPopper color={colors.PRIMARY} size={"2rem"} />,
    title: "Enjoy",
    text: `pick from a variety of our student friendly planspick from a
  variety of our student friendly planspick from a variety of
  our student`,
    showIcon: false,
  },
];

const HowItWorks = () => {
  return (
    <>
      <Box marginTop={[6, 10]} marginBottom={[6, 8]}>
        <Container maxWidth={"lg"}>
          <Headline title={"how it works"} />

          <Stack flexDirection={["column", "row"]}>
            {Data.map((ele) => (
              <Stack
                flexDirection={["column", "row"]}
                width={["100%", "33%"]}
                bgcolor={""}
                minHeight={"250px"}
                key={ele.id}
              >
                <Box width={["100%", "90%"]} textAlign={"center"} py={5}>
                  <Box mb={2}>{ele.icon}</Box>
                  <Box px={3}>
                    <Typography
                      mb
                      fontWeight={700}
                      textTransform={"capitalize"}
                    >
                      {ele.title}
                    </Typography>
                    <Typography>{ele.text}</Typography>
                  </Box>
                </Box>
                {ele.showIcon && (
                  <>
                    <Stack
                      alignItems={["center"]}
                      justifyContent={["center"]}
                      display={["none", "flex"]}
                    >
                      <IoIosArrowForward size={"2rem"} color={colors.PRIMARY} />
                    </Stack>
                    <Stack
                      alignItems={["center"]}
                      justifyContent={["center"]}
                      display={["flex", "none"]}
                    >
                      <IoIosArrowDown size={"2rem"} color={colors.PRIMARY} />
                    </Stack>
                  </>
                )}
              </Stack>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default HowItWorks;
