import React from "react";
import Typography from "@mui/material/Typography";

export type HeadingProps = React.PropsWithChildren & {
  style?: object;
};

export const Heading = ({ children, style }: HeadingProps) => (
  <Typography
    variant="h6"
    sx={{
      fontWeight: "700",
      ...style,
    }}
  >
    {children}
  </Typography>
);
