import Image from "next/image";
import { useState } from "react";
import registerImg from "../../assets/register.png";
import loginImg from "../../assets/login.png";
import Input from "../../components/input";
import Router from "next/router";

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
    phone: "+90",
    email: "",
    password: "",
    passwordAgain: "",
    buttonDisabled: true,
  });
  const register = async (e: any) => {
    try {
      e.preventDefault();
      if (registerData.password != registerData.passwordAgain) {
        alert("Passwords doesnt match. Try Again");
        return false;
      }

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
        .then((result) => {
          Router.push({
            pathname: "/auth",
            query: {
              token: result.token,
            },
          });
        })
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
      await fetch(baseURL + loginEP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (event: any, data: any, isTypePhone?: boolean) => {
    data[event.target.id] = event.target.value;
    if (isTypePhone) {
      if (event.target.value) {
        const x = event.target.value
          .replace(/\D/g, "")
          .match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

        event.target.value =
          (x[1] ? `(${x[1]})` : "") +
          (x[2] ? `-${x[2]}` : "") +
          (x[3] ? `-${x[3]}` : "") +
          (x[4] ? `-${x[4]}` : "");
      }
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex justify-center items-center shadow-xl w-auto h-auto p-5 bg-white rounded-3xl">
        <div className="login">
          <Image src={loginImg} alt="" className="w-96" />
          <form className="w-full max-w-sm" onSubmit={login}>
            <Input
              id="email"
              label="Email"
              placeholder="Email"
              type="email"
              required
              onChange={(e) => {
                changeHandler(e, loginData);
              }}
            />
            <Input
              onChange={(e) => {
                changeHandler(e, loginData);
              }}
              id="password"
              label="Password"
              type="password"
              required
              pattern="[a-z0-9]{1,15}"
              minLength={6}
              maxLength={20}
              title="Password should be digits (0 to 9) or alphabets (a to z)."
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
                  onClick={login}
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="register ml-4 pl-4 border-l-8 ">
          <Image src={registerImg} alt="" className="w-full" />
          <form className="registerForm w-full max-w-sm" onSubmit={register}>
            <Input
              onChange={(e) => {
                changeHandler(e, registerData);
              }}
              id="name"
              label="Name"
              type="text"
              required
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
                changeHandler(e, registerData, true);
              }}
              id="phone"
              label="Phone"
              type="tel"
              placeholder="+90(505) XXX-XX-XX"
              required
              minLength={10}
            />
            <Input
              onChange={(e) => {
                changeHandler(e, registerData);
              }}
              id="email"
              label="Email"
              type="email"
              required
            />
            <Input
              onChange={(e) => {
                changeHandler(e, registerData);
              }}
              id="password"
              label="Password"
              type="password"
              required
              pattern="[a-z0-9]{1,15}"
              minLength={6}
              maxLength={20}
              title="Password should be digits (0 to 9) or alphabets (a to z)."
            />
            <Input
              onChange={(e) => {
                changeHandler(e, registerData);
              }}
              id="passwordAgain"
              label="Password Again"
              type="password"
              required
              pattern="[a-z0-9]{1,15}"
              minLength={6}
              maxLength={20}
              title="Password should be digits (0 to 9) or alphabets (a to z)."
            />

            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
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
