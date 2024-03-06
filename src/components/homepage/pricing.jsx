import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Stack,
  styled,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Divider,
} from "@mui/material";
import { Headline, PrimaryButton, HeadingFlex } from "../../commons";
import { FaCheckCircle } from "react-icons/fa";
import { colors } from "../../styles/globals";
import { motion } from "framer-motion";

const plans = [
  {
    title: "basic plan",
    id: "basic",
    amount: "500",
    features: ["validity :  24 hours", ],
  },
  {
    title: "silver plan",
    id: "silver",
    amount: "1,500",
    features: ["1000% discount","validity :  30 days",],
  },
  { title: "platinum plan", id: "platinum", amount: "2,500", features: ["1000% discount","personalized experience","validity :  90 days"]},
];
const GridContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(285px, 1fr))`,
  gridGap: "22px",
  alignItems: "stretch",

  "@media screen and (max-width: 1200px)": {
    gridGap: "14px",
    gridTemplateColumns: `repeat(auto-fill, minmax(220px, 1fr))`,
  },
});

const StyledGridElements = styled(Box)({
  width: "100%",
});
const StyledTip = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: "0.3rem",
});

const Pricing = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box marginTop={[6, 10]} marginBottom={[6, 8]}>
        <Container maxWidth={"lg"}>
          <Headline title={"Complete packages for every student"} />
          <GridContainer>
            {plans.map((ele) => (
              <StyledGridElements
                key={ele.id}
                component={motion.div}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <Card
                  sx={{
                    backgroundColor: `${colors.WHITE}`,
                    p: 5,
                    borderRadius: "10px",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.50)",
                    borderColor: `grey`,
                    minHeight:"250px"
                  }}
                  elevation={0}
                >
                  <CardContent sx={{ padding: 3 }}>
                    <Box>
                      <HeadingFlex
                        title={ele.title}
                        price={<>&#8358; {ele.amount}</>}
                      />
                    </Box>
                    {ele.features?.map((ele, i) => (
                      <Box key={i}>
                        <StyledTip>
                          <FaCheckCircle color={colors.PRIMARY} size={"1rem"} />
                          <Typography mx={1} fontSize={"0.8rem"}>
                            {ele}
                          </Typography>
                        </StyledTip>
                      </Box>
                    ))}
                  </CardContent>
                  <CardActions>
                    <PrimaryButton
                      width={"97%"}
                      text={"subscribe"}
                      onClick={() => navigate(`/plans/${ele.id}`)}
                    />
                  </CardActions>
                </Card>
              </StyledGridElements>
            ))}
          </GridContainer>
        </Container>
      </Box>
    </>
  );
};

export default Pricing;
