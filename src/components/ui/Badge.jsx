/* eslint-disable react/prop-types */
export default function Badge(props) {
    const { badgeTitle }= props
    return (
      <>
          <div className="p-2 flex justify-center items-center rounded-lg shadow-sm bg-green-50">
              <div><span className=" border border-green-300 p-1 rounded-md bg-green-200 text-sm text-green-600">{badgeTitle}</span></div>
          </div>
      </>
    )
}

