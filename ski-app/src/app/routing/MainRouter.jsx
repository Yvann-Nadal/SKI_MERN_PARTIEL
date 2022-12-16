import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import { useEffect, useState } from "react";
import postsService from "../../setup/services/post.service";
import shopsService from "../../setup/services/shop.service";
import Login from "../pages/Login";
import Shop from "../pages/Shop";
import PostForm from "../pages/PostForm";
import Booking from "../pages/Booking";

const MainRouter = () => {
  const [posts, setPosts] = useState([]);
  const [shops, setShops] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await postsService.getAllPosts();
      setPosts(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchShops = async () => {
    try {
      const response = await shopsService.getAllShops();
      setShops(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchShops();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home posts={posts} />} />
      <Route path="/details/:id" element={<Details posts={posts} fetchPosts={fetchPosts} shops={shops} />} />
      <Route path="/login/:id" element={<Login shops={shops} />} />
      <Route path="/shop/:id" element={<Shop fetchPosts={fetchPosts} fetchShops={fetchShops} shops={shops} />} />
      <Route path="/shop/:id/post/create" element={<PostForm fetchPosts={fetchPosts} fetchShops={fetchShops} shops={shops} />} />
      <Route path="/shop/:id/post/update/:id" element={<PostForm fetchPosts={fetchPosts} fetchShops={fetchShops} shops={shops} />} />
      <Route path="/bookings/:id" element={<Booking posts={posts} shops={shops} />} />
    </Routes>
  );
};

export default MainRouter;
