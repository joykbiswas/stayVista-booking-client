import { useEffect, useState } from "react";
import Cards from "./Cards";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";
import { getAllRooms } from "../../api/rooms";


const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(false);
    const [params ,setParams] =useSearchParams();
    const category = params.get('category')
    useEffect(() =>{
        setLoading(true)
        // fetch('http://localhost:5000/rooms')
        getAllRooms()
        .then(data =>{
         if(category){
            const filtered = data.filter(room =>room.category === category)
            setRooms(filtered)
            // console.log(filtered);
         }
           else setRooms(data)
           setLoading(false);
        })
    },[category])
    if(loading) return <Loader></Loader>

    return (
        <Container>
           {rooms && rooms.length > 0 ? (
             <div className=" pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7">
             {
              rooms.map(room =><Cards key={room._id}
                  room={room}
              ></Cards>)
             }
          </div>
           ): (
            <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
                <Heading center={true} title='No Rooms Available In This Category' 
                  subtitle= 'Please Select Other Categories'
            >
            </Heading>
            </div>
           )}
        </Container>
    );
};

export default Rooms;