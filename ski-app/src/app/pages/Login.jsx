import { Box } from "@mui/material";
import LoginForm from "../components/LoginForm";

const Login = ({ shops }) => {
  return (
    <Box>
      <LoginForm shops={shops} />
    </Box>
  );
};

export default Login;
