import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Homepage from "./routes/homepage/Homepage";
import DashboardPage from "./routes/dashboardPage/DashboardPage";
import ChatPage from "./routes/chatPage/ChatPage";
import RootLayout from "./routes/rootLayout/RootLayout";
import DashboardLayout from "./routes/dashboardLayout/DashboardLayout";
import SignUpPage from "./routes/signUpPage/signUpPage";
import SignInPage from "./routes/signInPage/signInPage";
import FaQ from "./routes/FaQ/faQ";
import FeedBack from "./routes/feedBack/feedBack";
import TermsOfService from "./routes/TermsOfService/TermsOfService";
import PrivacyPolicy from "./routes/PrivacyPolicy/PrivacyPolicy";
import AgreeMent from "./routes/agreeMent/AgreeMent";
import { useUser } from '@clerk/clerk-react'; // Import useUser

const ProtectedRoute = ({ element }) => {
  const { user } = useUser(); // Check for user

  return user ? element : <Navigate to="/sign-in" />;
};

const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage/>,
      },
      {
        path:"/faq",
        element: <FaQ/>,
      },
      {
        path:"/termsofservice",
        element: <TermsOfService/>,
      },
      {
        path:"/privacypolicy",
        element: <PrivacyPolicy/>,
      },
      {
        path:"/feedback",
        element: <FeedBack/>,
      },
      {
        path:"/agreement",
        element: <AgreeMent/>,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <ProtectedRoute element={<DashboardPage />} />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ProtectedRoute element={<ChatPage />} />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);