import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./ErrorPage"
import Root from "./routes/Root"
import Home from "./components/Home"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import UserFormPage from "./pages/UserFormPage"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      // children: [
      //   {
      //     path: "signup",
      //     element: <UserForm />,
      //     errorElement: <ErrorPage />
      //   },
      //   {
      //     path: "components",
      //     element: <Home />
      //   },
      // ]
    },
    {
      path: "signup",
      element: <SignupPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "components",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "userform",
      element: <UserFormPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "login",
      element: <LoginPage />,
      errorElement: <ErrorPage />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App