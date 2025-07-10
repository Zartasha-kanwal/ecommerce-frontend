import React, { useState } from "react";

export default function LoginSignup() {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login function Executed", formData);
    let responseData;
   await fetch('https://ecommerce-backend-production-a939.up.railway.app/login', {
      method :'POST',
      headers:{
        Accept:'application/form-data',
        "Content-Type":'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    } else{
      alert(responseData.errors)
    }


  };


  const signup = async () => {
    console.log("Sign Up function Executed", formData);

    let responseData;
    await fetch('https://ecommerce-backend-production-a939.up.railway.app/signup', {
      method :'POST',
      headers:{
        Accept:'application/form-data',
        "Content-Type":'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    } else{
      alert(responseData.errors)
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#fce3fe] py-[5rem]  px-4 flex items-center justify-center mb-[4rem]">
      <div className="w-full max-w-[580px] bg-white mx-auto py-10 px-6 sm:px-10">
        <h1 className="text-2xl font-semibold my-5">{state}</h1>
        <div className="flex flex-col gap-6 mt-6">
          {state === "Sign Up" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your name"
              className="h-[60px] w-full outline-none pl-5 border border-[#c9c9c9] text-base sm:text-[18px]"
            />
          ) : (
            <></>
          )}

          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email address"
            className="h-[60px] w-full outline-none pl-5 border border-[#c9c9c9] text-base sm:text-[18px]"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
            className="h-[60px] w-full outline-none pl-5 border border-[#c9c9c9] text-base sm:text-[18px]"
          />
        </div>
        <button
          className="w-full h-[60px] bg-[#ff4141] text-white mt-6 text-xl font-normal cursor-pointer"
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="mt-5 text-[#5c5c5c] text-base sm:text-[18px] font-medium">
            Already have an account?{" "}
            <span
              className="text-[#ff4141] font-semibold cursor-pointer"
              onClick={() => {
                setState("Login");
              }}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="mt-5 text-[#5c5c5c] text-base sm:text-[18px] font-medium">
            Create an account?{" "}
            <span
              className="text-[#ff4141] font-semibold cursor-pointer"
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Click here
            </span>
          </p>
        )}

        <div className="flex items-start justify-center gap-4 mt-6 text-base sm:text-[18px] text-[#5c5c5c] font-medium">
          <input type="checkbox" className="mt-2 " />
          <p>By continuing, I agree to the Terms of Use and Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
}
