import { Helmet } from "react-helmet-async";
import Rooms from "../../components/Rooms/Rooms";
import Categories from "../../components/categories/Categories";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      <Categories></Categories>
      <Rooms></Rooms>
    </div>
  );
};

export default Home;
