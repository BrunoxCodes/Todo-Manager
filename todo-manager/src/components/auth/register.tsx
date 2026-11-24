import React, { useState } from "react";
import Buttons from "./buttons";
import Fields from "./fields";
import Form from "./form";
import Input from "./input";
import { Link } from "react-router-dom";

export default function Register() {
  const [form,setForm] = useState({username: "",email: "",password: ""});
  const handleSubmit = (e:React.SubmitEvent<HTMLFormElement>) =>{
    e.preventDefault();
  }
  
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setForm({...form,[e.target.name]: e.target.value})
  }
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <Form onSubmit={handleSubmit}>
        <h3 className="text-[1.5em] my-5 font-bold">Create your account</h3>
        <Fields label="username">
          <Input type="text" name="username" value={form.username} onChange={handleChange}/>
        </Fields>
        <Fields label="Email">
          <Input type="email" name="email" value={form.email} onChange={handleChange}/>
        </Fields>
        <Fields label="password">
          <Input type="password" name="password" value={form.password} onChange={handleChange}/>
        </Fields>
        <Buttons className="w-full rounded-lg p-1 bg-[#00d44e] cursor-pointer mb-10">Register</Buttons>
        <span className="text-center text-[1.1em]">Already have an account? <Link to="/loginForm" className="text-[#00d44e]">Login</Link></span>
        </Form>
    </div>
  );
};