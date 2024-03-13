import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root";
import AuthProvider from "./providers/AuthProvider";
import HomePage from "./pages/HomePage";
import Listings from "./pages/Listings";
import Details from "./pages/Details";
import Wishlist from "./pages/Wishlist";
import MakeOffer from "./pages/MakeOffer";
import Profile from "./pages/user/Profile";
import Bought from "./pages/user/Bought";
import Reviews from "./pages/user/Reviews";
import AgentProfile from "./pages/agent/AgentProfile";
import AgentListings from "./pages/agent/AgentListings";
import ListingAdd from "./pages/agent/ListingAdd";
import ListingUpdate from "./pages/agent/ListingUpdate";
import ListingSold from "./pages/agent/ListingSold";
import AdminProfile from "./pages/admin/AdminProfile";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageListings from "./pages/admin/ManageListings";
import ManageReviews from "./pages/admin/ManageReviews";
import ErrorPage from "./pages/ErrorPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
      {
        path: '/listings',
        element: <Listings/>,
      },
      {
        path: '/details',
        element: <Details/>,
      },
      {
        path: '/wishlist',
        element: <Wishlist/>,
      },
      {
        path: '/make-offer',
        element: <MakeOffer/>,
      },
      {
        path: '/signup',
        element: <SignupPage/>,
      },
      {
        path: '/login',
        element: <LoginPage/>,
      },

      // Users Dashboard
      {
        path: '/user',
        element: <Profile/>,
      },
      {
        path: '/bought',
        element: <Bought/>,
      },
      {
        path: '/reviews',
        element: <Reviews/>,
      },

      // Agent Dashboard
      {
        path: '/agent',
        element: <AgentProfile/>,
      },
      {
        path: '/agent-listings',
        element: <AgentListings/>,
      },
      {
        path: '/listing-add',
        element: <ListingAdd/>,
      },
      {
        path: '/listing-update',
        element: <ListingUpdate/>,
      },
      {
        path: '/listing-sold',
        element: <ListingSold/>,
      },

      // Admin Dashboard
      {
        path: '/admin',
        element: <AdminProfile/>,
      },
      {
        path: '/manage-users',
        element: <ManageUsers/>,
      },
      {
        path: '/manage-listings',
        element: <ManageListings/>,
      },
      {
        path: '/manage-reviews',
        element: <ManageReviews/>,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);