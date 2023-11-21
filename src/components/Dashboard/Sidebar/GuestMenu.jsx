import { BsFingerprint } from "react-icons/bs";
import MenuItem from "./MenuItem";


const GuestMenu = () => {
    return (
        <div>
        {/* Menu Items */}
            <nav>
              <MenuItem
                icon={BsFingerprint}
                label='My Bookings'
                address='my-bookings'
              />

            </nav>
        </div>
    );
};

export default GuestMenu;