import React from "react";
import { Container, Box } from "@mui/material";
import { GridCard, HeadingFlex } from "../../commons";
import { PhysicsData } from "../../data";

const PhysicsAI = () => {
  const FirstSem = PhysicsData.slice(0,20)
  return (
    <>
      <Container maxWidth={"lg"}>
        <Box my={5}>
          <HeadingFlex
            title={"first semester"}
            jusConM="flex-start"
            fontsize="1rem"
          />
          <Box my={5}>
            <GridCard
              data={FirstSem}
              width="300px"
              gap="32px"
              phyAI={true}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default PhysicsAI;
