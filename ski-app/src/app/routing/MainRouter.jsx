import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import { useEffect, useState } from "react";
import postsService from "../../setup/services/post.service";

const MainRouter = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await postsService.getAllPosts();
      setPosts(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home posts={posts} />} />
      <Route path="/details/:id" element={<Details posts={posts} fetchPosts={fetchPosts} />} />
    </Routes>
  );
};

export default MainRouter;
