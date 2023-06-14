import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { motion, AnimatePresence } from "framer-motion";

export type ProgressBarProps = {
  progress: number;
  style?: object;
};
const ProgressBar = styled(LinearProgress)(({ theme }) => ({
  height: "20px",
  borderRadius: "12px",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#f2fbfa",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: "12px",
    backgroundColor: "#00b797",
  },
}));

export const LodgifyProgressBar = ({ progress, style }: ProgressBarProps) => {
  const barRef = useRef<HTMLElement>(null);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(
    () =>
      setBarWidth(
        barRef.current?.offsetWidth ? barRef.current?.offsetWidth : 0
      ),
    [barRef, progress]
  );

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        width: "100%",
        ...style,
      }}
    >
      <ProgressBar
        ref={barRef}
        variant="determinate"
        value={progress}
        sx={{
          width: "100%",
        }}
      />
      <AnimatePresence>
        <motion.div
          key="progress-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Box
            sx={{
              top: 0,
              left:
                progress === 0
                  ? "8px"
                  : `${(progress * barWidth) / 100 - 36}px`,
              bottom: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color={progress === 0 ? "#00b797" : "#ffffff"}
              sx={{
                fontWeight: "600",
              }}
            >{`${progress}%`}</Typography>
          </Box>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};
