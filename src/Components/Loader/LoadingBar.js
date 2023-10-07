import { CircularProgress } from "@mui/material";

const LoadingBar = () => {
  return (
    <CircularProgress
    style={{display: 'flex', justifyContent: 'center', color:"#64BAFF" }}
    />
  );
};

export default LoadingBar;