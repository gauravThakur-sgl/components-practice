/* eslint-disable react/prop-types */
function ToolTip(props) {
    const { buttonStyle } = props
  return (
    <>
        <div className="div gap-2 bg-blue-50">
            <button className={`${buttonStyle}` + "border rounded-md"} >ToolTip</button>
        </div>
        <div>
          <h1></h1>
          <div>
            {children}
            <div>
            {message}
          </div>
          </div>
        </div>
    </>
  )
}

export default ToolTip


