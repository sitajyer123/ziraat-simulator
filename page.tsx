"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';


function isPasswordValid(password: string): boolean {
  return (
    password.length >= 6 &&
    password
      .split("")
      .every((char) =>
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(char)
      )
  );
}


export default function App() {
    const router = useRouter()


  const [user, setUser] = useState({
    mail: "",
    password: "",
    farmName: ""
  })
  
  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUser({ 
      ...user,
      password: event.target.value
    })
  }

  function handleMailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUser({
        ...user,
        mail: event.target.value
    })
  }

  function handleFarmNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUser({
        ...user,
        farmName: event.target.value
    })
  }

    function handleSignUp(){
        localStorage.setItem(user.mail, JSON.stringify(user));
      }
    
    function handleSignIn(){
        const kayitli = localStorage.getItem(user.mail)
        if (kayitli === null) toast("ya postayı, ya şifreyi, ya herşeyi yanlış girdin");
        else {
            const kayitliJSON = JSON.parse(kayitli)
            if (user.mail === kayitliJSON.mail && user.password === kayitliJSON.password){
                localStorage.setItem("tarla",kayitliJSON.farmName)
                router.push("./home")
            }
            else {toast("ya postayı, ya şifreyi, ya herşeyi yanlış girdin")}
        }
    }

  return (
    <main>
                  <div>
        <ToastContainer />
      </div>
        <h1>ZİRAAT SİMÜLATÖR</h1>
        <h2>KAYDOL</h2>
      <form>
        <label>
          E-Posta Adresiniz:
          <input
            type="email"
            name="email"
            onChange={handleMailChange}
          />
        </label>
        <br />
        <label>
          Şifreniz:
          <input
            type="password"
            name="password"
        //    value={user.password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <label>
          Tarlanızın Nâmı:
          <input
            type="text"
            name="farmName"
            value={user.farmName}
            onChange={handleFarmNameChange}
          />
        </label>
        <br />
        <input
          type="submit"
          value="Submit"
          onClick={handleSignUp}
          disabled={!isPasswordValid(user.password)}
        />
      </form>
      <h2>GİR</h2>
      <form>
        <label>
          E-Posta Adresiniz:
          <input
            type="email"
            name="email"
            onChange={handleMailChange}
          />
        </label>
        <br />
        <label>
          Şifreniz:
          <input
            type="password"
            name="password"
           // value={user.password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <input
          type="submit"
          value="Submit"
          onClick={handleSignIn}
        />
      </form>
    </main>
  );
}
