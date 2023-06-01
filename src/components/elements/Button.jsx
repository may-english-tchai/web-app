import { useLocation } from 'react-router-dom';

const Button = ({ children, type = 'button', onClick, ...rest }) => {
  const location = useLocation();

  const buttonStyle = {
    backgroundColor: location.pathname === '/information' ? 'pink' : '',
  };

  return (
    <button
      type={type}
      className="app-button font-medium text-black w-60 h-10 border-gray-400 border rounded-md"
      style={buttonStyle}
      onClick={onClick}
      {...rest}
    >
      {"Valider"}
    </button>
  );
};

export default Button;



