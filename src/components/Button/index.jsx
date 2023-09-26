const Button = ({ label, disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="px-[16px] py-[8px] bg-gray-800 text-white rounded-lg active:bg-orange-500 disabled:bg-gray-500 "
    >
      {" "}
      {label}{" "}
    </button>
  );
};

export default Button;
