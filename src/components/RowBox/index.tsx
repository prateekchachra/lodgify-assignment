import React from "react";
import Box from "@mui/material/Box";

export const RowBox = ({ children }: React.PropsWithChildren) => (
  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
    {children}
  </Box>
);
