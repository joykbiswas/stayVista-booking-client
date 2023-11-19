import axiosSecure from "."

// fetch all rooms
export const getAllRooms = async () =>{
    const {data} =await axiosSecure.get('/rooms')
    return data;
}

// fetch sing rooms data
export const getRoom = async (id) =>{
    const {data} =await axiosSecure.get(`/room/${id}`)
    return data;
}