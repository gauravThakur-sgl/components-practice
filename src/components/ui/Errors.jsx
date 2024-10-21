/* eslint-disable react/prop-types */
function Errors(props) {
  const { name } = props;
  return (
    <div>
      {name && (
        <span className="text-xs font-medium text-red-500">
          {name}
        </span>
      )}
    </div>
  );
}

export default Errors;
