import React from "react";
import { Container, Box } from "@mui/material";
import { GridCard, HeadingFlex } from "../../commons";

const Data = [
  {
    title: "Physics practical solver (1st semester)",
    id: "PHY111",
    link: "/automation/physicsAI",
  },
  {
    title: "Physics practical solver (2nd semester)",
    id: "PHY121",
    link: "/automation/physicsAI_2",
  },
  { title: "gst assignments and term papers", id: "GST" },
  { title: "engineering automated courses", id: "EAC" },
];
const FSQuiz = [
  { title: "PHY111 QUIZ", id: "PHY111" },
  { title: "MTH111 QUIZ", id: "PHY111" },
  { title: "PHY121 QUIZ", id: "PHY111" },
  { title: "MTH121 QUIZ", id: "PHY111" },
];
const SSQuiz = [
  { title: "PHY111 QUIZ", id: "PHY111" },
  { title: "MTH111 QUIZ", id: "PHY111" },
  { title: "PHY121 QUIZ", id: "PHY111" },
  { title: "MTH121 QUIZ", id: "PHY111" },
];

const Automation = () => {
  return (
    <>
      <Container maxWidth={"lg"}>
        <Box my={5}>
          <HeadingFlex
            title={"automation"}
            jusConM="flex-start"
            fontsize="1rem"
          />
          <GridCard data={Data} />
        </Box>
        <Box my={5}>
          <HeadingFlex
            title={"first semester quiz"}
            jusConM="flex-start"
            fontsize="1rem"
          />
          <GridCard data={FSQuiz} />
        </Box>
        <Box my={5}>
          <HeadingFlex
            title={"second semester quiz"}
            jusConM="flex-start"
            fontsize="1rem"
          />
          <GridCard data={SSQuiz} />
        </Box>
      </Container>
    </>
  );
};

export default Automation;
