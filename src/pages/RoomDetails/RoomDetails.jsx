import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/Roominfo";
// import RoomReservation from "../../components/RoomDetails/RoomReservation";

const RoomDetails = () => {
  const { id } = useParams();
  const [rooms, setRooms] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const singleRoom = data.find((room) => room._id === id);
        console.log(singleRoom);
        setRooms(singleRoom);
        setLoading(false);
      });
  }, [id]);
  if (loading) return <Loader></Loader>;

  return (
    <Container>
      <Helmet>
        <title>{rooms?.title}</title>
      </Helmet>

      {
        rooms && (
          <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <Header room={rooms}></Header>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
          <RoomInfo room={rooms}></RoomInfo>
          <div className="md:col-span-3 order-first md:order-last mb-10">
            {/* <RoomReservation room={rooms}></RoomReservation> */}
          </div>
        </div>
      </div>
        )
      }
    </Container>
  );
};

export default RoomDetails;
// fetch('https://raw.githubusercontent.com/shakilahmedatik/stay-vista-resources/main/data/rooms.json')