import React from "react";
import { useNavigate } from "react-router-dom";
import { Stack, styled, Box, Typography } from "@mui/material";
import { colors } from "../styles/globals";
import { motion } from "framer-motion";

const GridContainer = styled(Box)({
  display: "grid",

  alignItems: "stretch",

  "@media screen and (max-width: 1200px)": {},
});

const StyledGridElements = styled(Box)({
  width: "100%",
});

const GridCard = ({
  BgColor = colors.OFF_WHITE,
  data,
  Height = "10px",
  width = "285px",
  gap = "22px",
  phyAI = false,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <GridContainer
        sx={{
          gridGap: gap,
          gridTemplateColumns: `repeat(auto-fill, minmax(${width}, 1fr))`,
        }}
      >
        {data.map((ele) => (
          <StyledGridElements key={ele.id}>
            <Stack
              minHeight={Height}
              backgroundColor={BgColor}
              padding={2}
              borderRadius={"10px"}
              textTransform={"capitalize"}
              textAlign={"center"}
              component={motion.div}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              onClick={() => navigate( phyAI ? `${ele.url}${ele.id}` : ele.link )}
              sx={{ cursor: "pointer" }}
            >
              <Typography mb variant="p" fontWeight={700}>
                {ele.experiment}
              </Typography>
              <Typography variant="p">{ele.title}</Typography>
            </Stack>
          </StyledGridElements>
        ))}
      </GridContainer>
    </>
  );
};

export default GridCard;
