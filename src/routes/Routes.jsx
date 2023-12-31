import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import { getRoom,  } from '../api/rooms'
import DashboardLayout from '../layouts/DashboardLayout'
import AddRoom from '../pages/Dashboard/Host/AddRoom'
import MyListing from '../pages/Dashboard/Host/MyListing'
import HostRoute from './HostRoute'
import AdminRoute from './AdminRoute'
import ManageUser from '../pages/Dashboard/Admin/ManageUsers'
import Profile from '../pages/Dashboard/Common/Profile'
import MyBookings from '../pages/Dashboard/Guest/MyBookings'
import ManageBookings from '../pages/Dashboard/Host/ManageBooking'
import Statistics from '../pages/Dashboard/Common/Statistics'
// import { getAllRooms } from '../api/rooms'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path:'/room/:id',
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
        loader: ({params}) => getRoom(params.id)

      }
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        index:true,
        element:<PrivateRoute><Statistics></Statistics></PrivateRoute>
      },
      {
        path: 'add-room',
        element: <PrivateRoute><HostRoute><AddRoom></AddRoom></HostRoute></PrivateRoute>
      },
      {
        path: 'my-listings',
        element: <HostRoute><MyListing></MyListing></HostRoute>
      },
      {
        path: 'manage-users',
        element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
      },
      {
        path: 'profile',
        element: <Profile></Profile>
      },
      {
        path: 'my-bookings',
        element: <MyBookings></MyBookings>
      },
      {
        path:'manage-bookings',
        element:<HostRoute><ManageBookings></ManageBookings></HostRoute>
      },
      
    ]
  }
])
