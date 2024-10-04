/* eslint-disable react/prop-types */
function Select(props) {
  const { title, id,selectStyle, labelStyle } = props;
  return (
    <div className="p-2 flex justify-center items-center rounded-lg shadow-sm mt-6">
      <div>
        {/* <span className=" border border-green-300 p-1 rounded-md bg-green-200 text-sm text-green-600">
          {badgeTitle}
        </span> */}
        <div className="flex flex-col">
          <label htmlFor="Country-select" className={`${labelStyle}` + "text-sm font-bold pb-2"}>{title}</label>
          <select name={title} id={id} className={`${selectStyle}` + "height-auto w-48 border border-blue-400 border-2 bg-white py-1 px-2 rounded-md shadow-sm"}>
            <option value="america">America</option>
            <option value="india">India</option>
            <option value="japan">Japan</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Select;
