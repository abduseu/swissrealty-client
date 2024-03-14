import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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
import Private from "./components/Private";



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
        path: '/details/:id',
        element: <Details/>,
      },
      {
        path: '/wishlist',
        element: <Private><Wishlist/></Private>,
      },
      {
        path: '/make-offer',
        element: <Private><MakeOffer/></Private>,
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
        element: <Private><Profile/></Private>,
      },
      {
        path: '/bought',
        element: <Private><Bought/></Private>,
      },
      {
        path: '/reviews',
        element: <Private><Reviews/></Private>,
      },

      // Agent Dashboard
      {
        path: '/agent',
        element: <Private><AgentProfile/></Private>,
      },
      {
        path: '/agent-listings',
        element: <Private><AgentListings/></Private>,
      },
      {
        path: '/listing-add',
        element: <Private><ListingAdd/></Private>,
      },
      {
        path: '/listing-update',
        element: <Private><ListingUpdate/></Private>,
      },
      {
        path: '/listing-sold',
        element: <Private><ListingSold/></Private>,
      },

      // Admin Dashboard
      {
        path: '/admin',
        element: <Private><AdminProfile/></Private>,
      },
      {
        path: '/manage-users',
        element: <Private><ManageUsers/></Private>,
      },
      {
        path: '/manage-listings',
        element: <Private><ManageListings/></Private>,
      },
      {
        path: '/manage-reviews',
        element: <Private><ManageReviews/></Private>,
      },
    ]
  }
])


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);