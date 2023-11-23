/* eslint-disable react/prop-types */
import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import  Calendar from "./Calender";
import { useState } from "react";
import BookingModal from "../Modal/BookingModal";
import useAuth from "../../hooks/useAuth";


const RoomReservation = ({room}) => {

    console.log(room);
     let [isOpen, setIsOpen] = useState(false);
     const {user} = useAuth();

     const closeModal = () =>{
        setIsOpen(false)
     }

     const [value, setValue] = useState({
        startDate: new Date(room?.from),
        endDate: new Date(room?.to),
        key: 'selection'
    })

    
    //   Total days * price
    const totalDays = parseInt(formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0]
    )
    const totalPrice = totalDays * room?.price
    
    const [bookingInfo, setBookingInfo] = useState({
        guest: {name: user?.displayName, email:user?.email, image: user?.photoURL},
        host: room?.host?.email,
        location: room?.location,
        price: totalPrice,
        to:value.endDate,
        from: value.startDate,
        title: room?.title,
        roomId: room?._id,
        image: room?.image,
    })
    
   console.log(value);
    return (
        <div className="rounded-xl border-2 border-neutral-300 overflow-hidden bg-white">
        <div className="flex items-center gap-1 p-4">
            <h2 className="text-2xl font-semibold">$ {room?.price}</h2>
            <p className="font-light text-neutral-600">night</p>
        </div>
        <hr />
        <div className="flex justify-center">
        <Calendar value={value} ></Calendar>
        </div>
        <hr />
        <div className="p-4">
            <Button disabled={room.host.email === user.email || room.booked}
             onClick={() => setIsOpen(true)} label={'Reserve'}></Button>
        </div>
        <hr />
        <div className="p-4 flex items-center justify-between font-semibold text-lg">
            <h3>Total </h3>
            <h5>$ {totalPrice}</h5>
        </div>

        <BookingModal closeModal={closeModal} isOpen={isOpen} bookingInfo={bookingInfo}></BookingModal>
        </div>
    );
};

export default RoomReservation;