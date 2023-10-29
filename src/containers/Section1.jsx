import { Button, Box, Hidden, useMediaQuery } from "@mui/material";
import { section1Content } from "../utils/content";
import React from "react";
import useMeasure from "react-use-measure";

const {
  MainBG,
  TreesImage,
  CliffImage,
  HorseImage,
  ShootingStarImage,
  title,
  subtitle,
} = section1Content;

const CustomButton = ({ children, ...props }) => (
  <Button
    variant="outlined"
    sx={{
      borderRadius: 4,
      color: "text.primary",
      borderColor: "text.primary",
      height: 58,
      px: 2,
    }}
    {...props}
  >
    {children}
  </Button>
);

const Section1 = () => {
  // const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [ref, { height }] = useMeasure();

  return (
    <Box sx={{ width: "100%" }}>
      {/* Main BackGround */}
      <Box sx={{ position: "fixed", zIndex: -10, top: 0, left: 0, right: 0 }}>
        <img src={MainBG.src} style={{ width: "100%" }} />
      </Box>
      {/* BackGround Elements */}
      <Box
        ref={ref}
        sx={{
          position: "absolute",
          width: "100%",
          zIndex: -1,
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <img src={MainBG.src} style={{ width: "100%", opacity: 0 }} />

        {/* Star */}
        <img
          src={ShootingStarImage.src}
          style={{
            position: "absolute",
            top: "30px",
            right: "15%",
            width: "500px",
          }}
        />

        {/* Trees */}
        <Hidden mdDown>
          <img
            src={TreesImage.src}
            style={{
              position: "absolute",
              width: "100%",
              right: 0,
              left: 0,
              bottom: "13%",
            }}
          />
        </Hidden>

        {/* Cliff */}
        <img
          src={CliffImage.src}
          style={{
            height: "100%",
            position: "absolute",
            right: 0,
            top: 0,
            backgroundSize: "cover",
          }}
        />

        {/* Horse */}
        <img
          src={HorseImage.src}
          style={{
            position: "absolute",
            height: "38%",
            right: "14%",
            bottom: "45%",
            transform: "rotate(7deg)",
          }}
        />

        <Box
          sx={{
            bgcolor: "background.default",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "800px",
            top: `calc(${height}px - 13%)`,
          }}
        ></Box>
      </Box>

      {/* Contents */}
    </Box>
  );
};

export default Section1;
