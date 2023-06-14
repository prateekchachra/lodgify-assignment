import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";

export type ContainerCardProps = React.PropsWithChildren & {
  style?: object;
};
export const ContainerCard = ({ children, style }: ContainerCardProps) => (
  <Card
    variant="outlined"
    sx={{
      borderRadius: "12px",
      padding: "16px",
      alignItems: "center",
      ...style,
    }}
  >
    <CardContent>{children}</CardContent>
  </Card>
);
