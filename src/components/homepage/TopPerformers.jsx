import React from "react";
import { Container, Box } from "@mui/material";
import { GridCard, Headline } from "../../commons";

const Quiz = [
  { title: "PHY111 QUIZ", id: "PHY111", url: "/performers/" },
  { title: "MTH111 QUIZ", id: "MTH111", url: "/performers/" },
  { title: "PHY121 QUIZ", id: "PHY121", url: "/performers/" },
  { title: "MTH121 QUIZ", id: "MTH121", url: "/performers/" },
  { title: "GST112 QUIZ", id: "GST111", url: "/performers/" },
];

const TopPerformers = () => {
  return (
    <>
      <Box marginTop={[6, 5]} marginBottom={[6, 8]}>
        <Container maxWidth={"lg"}>
          <Headline title={"Top performers"} />
          <GridCard data={Quiz} phyAI={true} />
        </Container>
      </Box>
    </>
  );
};

export default TopPerformers;
