import { Box } from "@mui/material";
import BookingList from "../components/BookingList";

const Booking = ({ posts, shops }) => {
  return (
    <Box>
      <BookingList posts={posts} shops={shops} />
    </Box>
  );
};

export default Booking;
