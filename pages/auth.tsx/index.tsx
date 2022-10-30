import Image from "next/image";
import { useState } from "react";
import registerImg from "../../assets/register.png";
import loginImg from "../../assets/login.png";
import Input from "../../components/input";

let baseURL =
  "https://cors-anywhere.herokuapp.com/https://assignment-api.piton.com.tr";
let registerEP = "/api/v1/user/register";
let loginEP = "/api/v1/user/login";
export default function Auth() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    password: "",
    passwordAgain: "",
  });
  const register = async () => {
    try {
      await fetch(baseURL + registerEP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: registerData.name,
          email: registerData.email,
          password: registerData.password,
        }),
      })
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
  };
  const login = async () => {
    try {
      let body = {
        email: loginData.email,
        password: loginData.password,
      };
      console.log("qwe", body);
      await fetch(baseURL + loginEP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (event: any, data: any) => {
    data[event.target.id] = event.target.value;
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex justify-center items-center shadow-xl w-auto h-auto p-5 bg-white rounded-3xl">
        <div className="login">
          <Image src={loginImg} alt="" className="w-96" />
          <form className="w-full max-w-sm">
            <Input
              id="email"
              label="Email"
              placeholder="Email"
              type="text"
              onChange={(e) => {
                changeHandler(e, loginData);
              }}
            />
            <Input
              id="password"
              label="Surname"
              placeholder="Name"
              type="text"
              onChange={(e) => {
                changeHandler(e, loginData);
              }}
            />

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3"></div>
              <label className="md:w-2/3 block text-gray-500 font-bold">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">Remember me.!</span>
              </label>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={login}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="register ml-4 pl-4 border-l-8 ">
          <Image src={registerImg} alt="" className="w-full" />
          <form className="registerForm w-full max-w-sm">
            <Input
              onChange={(e) => {
                changeHandler(e, registerData);
              }}
              id="name"
              label="Name"
              type="text"
            />
            <Input
              onChange={(e) => {
                changeHandler(e, registerData);
              }}
              id="surname"
              label="Surname"
              type="text"
            />
            <Input
              onChange={(e) => {
                changeHandler(e, registerData);
              }}
              id="phone"
              label="Phone"
              type="text"
            />
            <Input
              onChange={(e) => {
                changeHandler(e, registerData);
              }}
              id="email"
              label="Email"
              type="text"
            />
            <Input
              onChange={(e) => {
                changeHandler(e, registerData);
              }}
              id="password"
              label="Password"
              type="text"
            />
            <Input
              onChange={(e) => {
                changeHandler(e, registerData);
              }}
              id="passwordAgain"
              label="Password Again"
              type="text"
            />

            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={register}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
