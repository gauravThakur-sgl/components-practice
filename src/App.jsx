import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./ErrorPage"
import Root from "./routes/Root"
import UserForm from "./components/UserForm"
import Home from "./components/Home"

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
      element: <UserForm />,
      errorElement: <ErrorPage />
    },
    {
      path: "components",
      element: <Home />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App