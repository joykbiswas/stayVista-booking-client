import MenuItem from "./MenuItem";
import {  BsHouseGearFill } from 'react-icons/bs'
import { BsFillHouseAddFill } from "react-icons/bs";

const HostMenu = () => {
    return (
        <div>
            
            <nav>
              <MenuItem
                icon={BsFillHouseAddFill}
                label='Add Room'
                address='add-room'
              />
            </nav>
            <nav>
              <MenuItem
                icon={BsHouseGearFill}
                label='My Listing'
                address='my-listing'
              />

              {/* Menu Items */}
            </nav>
        </div>
    );
};

export default HostMenu;