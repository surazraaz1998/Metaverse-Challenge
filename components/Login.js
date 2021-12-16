import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
    const {authenticate} = useMoralis();
  return (
    <div className="bg-black relative ">
      <h1>I am the login Screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4 object-cover rounded-full">
        <Image src="/profile.jpg" height={200} width={200} />
        <button onClick={()=>authenticate()} className="bg-gray-500 rounded-lg p-5 font-bolder animate-pulse">Login to the Metaverse</button>
      </div>
      <div className="w-full h-screen">
        <Image
          className=""
          src="https://links.papareact.com/55n"
          layout="fill"
          objectfit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
