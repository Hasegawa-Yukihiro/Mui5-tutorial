import React from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";

const MyComponent = styled(Button)(({ theme }) => ({
  color: "darkslategray",
  backgroundColor: theme.palette.mode,
  padding: 8,
  borderRadius: 4,
}));

export const Home: React.FC = () => {
  return (
    <>
      <div>
        <Button color={"primary"} variant={"contained"} />
        <h1>Hello World</h1>
      </div>
    </>
  );
};
