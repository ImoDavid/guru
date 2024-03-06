import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../features/authUser";
import {
  Box,
  Container,
  styled,
  Stack,
  Typography,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Link as RRLink, NavLink, useNavigate } from "react-router-dom";
import { colors } from "../../styles/globals";
import { motion } from "framer-motion";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserCheck } from "react-icons/fa6";
import { PrimaryButton, truncateText } from "../../commons";

const navLinks = [
  { page: "blog", url: "/loginf", drop: false },
  { page: "contact", url: "#experience", drop: false },
  { page: "fAQ", url: "#projects", drop: true },
];
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

// const StyledNavLink = styled(Box)({
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "center",
//   alignItems: "center",
//   textTransform: "capitalize",
//   fontWeight: "500",
//   fontSize: ["1rem", "1rem"],
//   cursor: "pointer",
//   marginRight: "2.8rem",
// });

// const StyledLink = styled(NavLink)({
//   display: "flex",
//   alignItems: "center",
//   textDecoration: "none",
//   color: colors.NAV_TEXT,
//   "&:hover": {
//     color: colors.PRIMARY,
//   },
// });
const StyledMobileContainer = styled(Box)({
  position: "absolute",
  height: "100vh",
  width: "100%",
  background: "rgba(0, 0, 0, 0.7)",
  top: "0",
  right: 0,
  padding: "1rem 0 ",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
});

// const MobileLink = styled(Box)({
//   textDecoration: "none",
//   color: colors.OFF_WHITE,
//   margin: "1rem 0",
//   textTransform: "capitalize",
//   fontWeight: 700,
//   fontSize: "16px",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",

//   "&:last-child": {
//     marginBottom: 0,
//   },
//   "&:hover": {
//     color: colors.ORANGE,
//   },
// });

const Topbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { isActive, user, jwt } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    navigate("/login");
  };
  const outUser = () => {
    dispatch(logoutUser());
  };
  const settings = [
    { name: "Profile", whenClicked: handleCloseUserMenu },
    { name: "Logout", whenClicked: outUser },
  ];

  return (
    <>
      <Box width={"100%"} height={["3rem", "4.5rem"]} bgcolor={colors.WHITE}>
        <Container maxWidth={"lg"}>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            padding={1}
          >
            {" "}
            <Box onClick={() => navigate("/")}>
              <Typography
                mt={[0, 1]}
                fontSize={["1rem", "1.5rem"]}
                fontWeight={900}
                color={colors.BLACK}
                sx={{ cursor: "pointer" }}
              >
                {" "}
                CalixGuru
              </Typography>
            </Box>
            {/* <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "block",
                  xl: "block",
                },
              }}
            >
              <Stack direction={"row"} ml={3}>
                {navLinks.map((ele) => (
                  <StyledNavLink key={ele.url}>
                    <StyledLink
                      to={ele.url}
                      underline="none"
                      color={colors.BLACK}
                    >
                      {ele.page}{" "}
                    </StyledLink>
                  </StyledNavLink>
                ))}
              </Stack>
            </Box> */}
            {!isActive ? (
              <>
                <Stack
                  flexDirection={"row"}
                  mr={3}
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "none",
                      lg: "flex",
                      xl: "flex",
                    },
                  }}
                >
                  {" "}
                  <Box m={1}>
                    <PrimaryButton
                      width={"5rem"}
                      textColor={colors.PRIMARY}
                      BDColor={colors.PRIMARY}
                      hoverBDColor={colors.WHITE}
                      variant={"outlined"}
                      hoverBGColor={colors.PRIMARY}
                      hoverTextColor={colors.WHITE}
                      text={"sign in"}
                      BGColor={colors.WHITE}
                      onClick={() => navigate("/login")}
                    />
                  </Box>
                  <Box m={1}>
                    <PrimaryButton
                      width={"10rem"}
                      variant={"contained"}
                      pad="0.45rem"
                      text={"sign up"}
                      onClick={() => navigate("/register")}
                    />
                  </Box>
                </Stack>
              </>
            ) : (
              <Box
                m={1}
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "none",
                    lg: "flex",
                    xl: "flex",
                  },
                }}
              >
                {/* <PrimaryButton
                  width={"10rem"}
                  variant={"contained"}
                  text={"sign out"}
                  pad="0.45rem"
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                /> */}
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip>
                    <PrimaryButton
                      onClick={handleOpenUserMenu}
                      text={truncateText(user, 12)}
                      End={true}
                      icon={jwt ? <FaUserCheck color="black" /> : ""}
                      width={"150px"}
                    />
                    {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Typography>imo</Typography>
                    </IconButton> */}
                  </Tooltip>

                  <Menu
                    sx={{ mt: "55px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting.name}>
                        <Typography
                          textAlign="center"
                          onClick={() => {
                            setting.whenClicked();
                            setAnchorElUser(null);
                          }}
                        >
                          {setting.name}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
            )}
            <Box
              fontSize={"1.5rem"}
              onClick={() => {
                setNavbarOpen(!navbarOpen);
              }}
              color={colors.ORANGE}
              sx={{
                display: {
                  xs: "block",
                  sm: "block",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
              }}
            >
              {" "}
              {isActive ? (
                <PrimaryButton
                  BGColor={colors.PRIMARY}
                  textColor={colors.WHITE}
                  text={truncateText(user, 8)}
                  End={true}
                  icon={jwt ? <FaUserCheck color={colors.BLACK} size={"1.1rem"}/>  : ""}
                />
              ) : (
                <RiMenu3Fill />
              )}
            </Box>
            <StyledMobileContainer
              component={motion.nav}
              animate={navbarOpen ? "open" : "closed"}
              variants={variants}
              boxShadow={2}
              zIndex={10000}
            >
              <Stack
                direction={"column"}
                alignItems={"center"}
                width={"100%"}
                height={"100vh"}
                padding={"1rem"}
                backgroundColor={colors.FOOTER}
              >
                <Box
                  fontSize={"2.0rem"}
                  color={colors.WHITE}
                  mb={1}
                  onClick={() => {
                    setNavbarOpen(!navbarOpen);
                  }}
                  sx={{
                    display: {
                      xs: "block",
                      sm: "block",
                      md: "block",
                      lg: "none",
                      xl: "none",
                    },
                    position: "absolute",
                    top: "40px",
                    right: "40px",
                  }}
                >
                  <AiOutlineClose />
                </Box>
                <Stack
                  alignItems={"center"}
                  justifyContent={"center"}
                  width={"100%"}
                  height={"100vh"}
                >
                  {/* {navLinks.map((ele) => (
                    <MobileLink
                      key={ele.url}
                      underline="none"
                      color={colors.NAV_TEXT}
                      onClick={() => {
                        navigate(ele.url);
                        setNavbarOpen(!navbarOpen);
                      }}
                    >
                      <Typography>{ele.page}</Typography>
                    </MobileLink>
                  ))} */}
                  {!isActive ? (
                    <>
                      <PrimaryButton
                        width={"90%"}
                        variant={"contained"}
                        text={"sign in"}
                        pad="0.7rem"
                        marTop="2rem"
                        textColor={colors.PRIMARY}
                        BGColor={colors.WHITE}
                        hoverBGColor={colors.WHITE}
                        onClick={() => {
                          navigate("/login");
                          setNavbarOpen(!navbarOpen);
                        }}
                      />
                      <PrimaryButton
                        width={"90%"}
                        variant={"contained"}
                        text={"sign up"}
                        pad="1rem"
                        marTop="2rem"
                        onClick={() => {
                          navigate("/register");
                          setNavbarOpen(!navbarOpen);
                        }}
                      />
                    </>
                  ) : (
                    <PrimaryButton
                      width={"90%"}
                      variant={"contained"}
                      text={"sign out"}
                      pad="1rem"
                      marTop="2rem"
                      onClick={() => {
                        dispatch(logoutUser());
                        setNavbarOpen(!navbarOpen);
                      }}
                    />
                  )}
                </Stack>
              </Stack>
            </StyledMobileContainer>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Topbar;
