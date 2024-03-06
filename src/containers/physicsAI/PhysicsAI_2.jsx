import React from "react";
import { Container, Box } from "@mui/material";
import { GridCard, HeadingFlex } from "../../commons";
import { PhysicsData2 } from "../../data";

const PhysicsAI_2 = () => {
  return (
    <>
      <Container maxWidth={"lg"}>
        <Box my={5}>
          <HeadingFlex
            title={"second  semester"}
            jusConM="flex-start"
            fontsize="1rem"
          />
          <Box my={5}>
            <GridCard
              data={PhysicsData2}
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

export default PhysicsAI_2;
