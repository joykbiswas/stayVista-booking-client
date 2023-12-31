import axiosSecure from "."

// fetch all rooms
export const getAllRooms = async () =>{
    const {data} =await axiosSecure.get('/rooms')
    return data;
}

//Fetch all  rooms for host
export const getHostRooms = async (email) =>{
    const {data} =await axiosSecure.get(`/rooms/${email}`)
    return data;
}

// fetch sing rooms data
export const getRoom = async (id) =>{
    const {data} =await axiosSecure.get(`/room/${id}`)
    return data;
}

// save a room data in db
export const addRoom = async roomData =>{
    const {data} =await axiosSecure.post(`/rooms`, roomData)
    return data
}