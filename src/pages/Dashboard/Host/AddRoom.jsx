import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../../components/Form/AddRoomFrom";
// import { useState } from "react";
import { imageUpload } from "../../../api/utils";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { addRoom } from "../../../api/rooms";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddRoom = () => {
    const navigate = useNavigate();
    const {user} =useAuth();
    const [loading, setLoading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('Uploadss Image');
    
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })
    const handleSubmit = async (e) =>{
        setLoading(true)
        e.preventDefault();
        const form  = e.target
        const location = form.location.value
        const category = form.category.value
        const title = form.title.value
        const to = dates.endDate
        const from = dates.startDate
        const price = form.price.value
        const guests = form.total_guest.value
        const bathrooms = form.bathrooms.value
        const bedrooms = form.bedrooms.value
        const description = form.description.value
        const image = form.image.files[0]
        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,

        }
       
        const image_url = await imageUpload(image)

        const roomData = {
            location, category, title, to, from, price,guests, bathrooms, bedrooms,host, description, image: image_url?.data?.display_url,
        }
       
        try{
           
            const data  = await addRoom(roomData)
            console.log(data);
            setUploadButtonText('uploaded')
            toast.success('Room added')   
            navigate('/dashboard/my-listing')
            
        }catch(err){
            console.log(err);
            toast.error(err.message)

        }finally{
            setLoading(false)
        }

        console.table(roomData);
    }

    // handle date change from react-date-range calender
    const handleDates = ranges =>{
        console.log(ranges);
        setDates(ranges.selection)
    }
    

     // Handle Image button text
    const handleImageChange = images => {
        // console.log('image-name', images.name); 
        setUploadButtonText(images.name)
      }
    return (
        <div>
            <Helmet>
                <title>Add Room | Dashboard</title>
            </Helmet>
           <AddRoomForm handleSubmit={handleSubmit}
            handleDates={handleDates}
             dates={dates}
             handleImageChange={handleImageChange}
             loading={loading}
             uploadButtonText={uploadButtonText}
             
             ></AddRoomForm>
        </div>
    );
};

export default AddRoom;