import axiosSecure from "."
// save user data in database
export const saveUser = async user =>{
    const currentUser = {
        email: user.email,
        role: 'guest',
        status: 'verified',
    }
    const {data} = await axiosSecure.put(`/users/${user?.email}`, currentUser)
    return data

}

// get token from server
export const getToken = async email  =>{
    const {data} = await axiosSecure.post(`/jwt`, {email})
    console.log('token received from server', data);
    return data
}

// Clear token from browser
export const clearCookie = async () =>{
    const {data} = await axiosSecure.get('/logout')
    console.log('logout and token remove', data);
    return data ;
}

// Get user role
export const getRole = async email =>{
    const {data} =await axiosSecure.get(`/user/${email}`)
    return data.role;
}

// get all users
export const getAllUser = async () =>{
    const {data} =await axiosSecure.get('/users')
    return data;
}

export const updateRole = async ({email,role}) =>{
    const currentUser = {
        email,
        role,
        status: 'verified',
    }
    const {data} = await axiosSecure.put(`/users/update/${email}`, currentUser)
    return data

}

//Became a host
export const becomeHost = async (email) =>{
    const currentUser = {
        email,
        status:'Requested',
    }
    const {data} = await axiosSecure.put(`/users/${email}`, currentUser)
    return data;
}