import { Link,  } from "react-router-dom"

function Root() {
  return (
    <>
      <div className="flex justify-center items-center">
        <ul className="flex font-bold text-lg gap-2 mt-2">
          <li className="border rounded-lg p-2">
            <Link to={"components"}>Component</Link>
          </li>
          <li className="border rounded-lg p-2">
            <Link to={"signup"} >SignUp</Link>
          </li>
        </ul>
      </div>
      {/* <div>
        <Outlet />
      </div> */}
    </>
  )
}

export default Root