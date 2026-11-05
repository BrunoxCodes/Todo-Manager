import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form className="border border-[#ccc] rounded-[10px] flex flex-col gap-1 w-[30%] p-10">
        <h3 className="text-[1.5em] my-5 font-bold">Welcome back</h3>
        <label className="text-[1.1em]">Email</label>
        <input type="email" className="w-full border border-[#ccc] rounded-lg p-1 mb-4 outline-none"/>
        <label className="text-[1.1em]">Password</label>
        <input type="password" className="w-full border border-[#ccc] rounded-lg p-1 mb-4 outline-none"/>
        <button className="w-full rounded-lg p-1 bg-[#00d44e] cursor-pointer mb-10">Log In</button>
        <span className="text-center text-[1.1em]">Don't have an account? <Link to="/register" className="text-[#00d44e]">Register</Link></span>
      </form>
    </div>
  );
};