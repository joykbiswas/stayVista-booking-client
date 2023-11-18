/* eslint-disable react/prop-types */
// import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import  Calendar from "./Calender";
// import { useState } from "react";


const RoomReservation = ({room}) => {
    console.log(room);
    // const totalDays = parseInt(formatDistance(new Date(room?.to), new Date(room?.from)).split( ' ')[0]
    // )
    // const totalPrice = totalDays * room?.price
    
    // const [value, setValue] = useState({
    //     startDate: new Date(room?.from),
    //     endDate: new Date(room?.to),
    //     key: 'selection'
    // })
    return (
        <div className="rounded-xl border-2 border-neutral-300 overflow-hidden bg-white">
        <div className="flex items-center gap-1 p-4">
            <h2 className="text-2xl font-semibold">$ {room?.price}</h2>
            <p className="font-light text-neutral-600">night</p>
        </div>
        <hr />
        <div className="flex justify-center">
        <Calendar ></Calendar>
        </div>
        <hr />
        <div className="p-4">
            <Button label={'Reserve'}></Button>
        </div>
        <hr />
        <div className="p-4 flex items-center justify-between font-semibold text-lg">
            <h3>Total </h3>
            <h5>$ {room?.totalPrice}</h5>
        </div>
        </div>
    );
};

export default RoomReservation;