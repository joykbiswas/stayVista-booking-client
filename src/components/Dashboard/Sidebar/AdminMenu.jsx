import { FaUserCog } from "react-icons/fa";
import MenuItem from "./MenuItem";


const AdminMenu = () => {
    return (
        <div>
            <nav>
              <MenuItem
                icon={FaUserCog}
                label='Manage Users'
                address='manage-users'
              />

            </nav>
        </div>
    );
};

export default AdminMenu;