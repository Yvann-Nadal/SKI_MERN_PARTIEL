import { Box } from "@mui/material";
import LoginForm from "../components/LoginForm";

const Login = ({ posts, fetchPosts, shops }) => {
  return (
    <Box>
      <LoginForm posts={posts} fetchPosts={fetchPosts} shops={shops} />
    </Box>
  );
};

export default Login;
