import { Link, useNavigate } from "react-router-dom";
import Fields from "./fields";
import Input from "./input";
import Form from "./form";
import { useState } from "react";
import Buttons from "./buttons";
import useAuthApi from "../hooks/useAuthApi";

export default function LoginForm() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [auth,setAuth] = useState<boolean | null>(null);
  const navigator = useNavigate();
  const { user, loading } = useAuthApi();
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) {
      alert("Please wait...");
      return;
    }

    const authenticate = user.find((i) => i.name === form.username && i.password === form.password);
    if(authenticate){
      setAuth(true);
      navigator("/dashboard")
    }else{
      setAuth(false);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Form onSubmit={handleSubmit}>
        <h3 className="text-[1.5em] my-5 font-bold">Welcome back</h3>
        <Fields label="username">
          <Input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </Fields>
        <Fields label="password">
          <Input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </Fields>
        <Buttons disable={!loading ? false : true} className="w-full rounded-lg p-1 bg-[#00d44e] cursor-pointer mb-10">Log in</Buttons>
        <span className="text-center text-[1.1em]">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#00d44e]">
            Register
          </Link>
        </span>
        {/* <p className={`text-center ${auth ? 'text-green-400' : 'text-red-400'}`}>{auth ? "Success" : "Failed"}</p> */}
      </Form>
    </div>
  );
}
