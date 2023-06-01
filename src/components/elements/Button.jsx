/* eslint-disable react/prop-types */

const Button = ({children, type = 'button', onClick, ...rest}) => {
  return (
    <button type={type} className="app-button font-medium text-black w-60 h-10 border-gray-400 border rounded-md" onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export default Button;
