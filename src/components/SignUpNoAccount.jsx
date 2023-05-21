import { Link } from "react-router-dom";

const SignUpNoAccount = () => {
  return (
    <p className="my-8 text-xs font-light text-center text-gray-700">
      Si vous n&apos;avez pas de compte, <Link to="" className="font-medium text-pink-600 hover:underline">inscrivez-vous</Link>
  </p>
  )
}

export default SignUpNoAccount;
