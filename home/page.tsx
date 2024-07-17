"use client";
import { redirect } from 'next/navigation';
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

function Kare({ para, setPara}: {para: number, setPara: Dispatch<SetStateAction<number>>}) {
  const [evre, setEvre] = useState(0);

  function handleClick() {
    if (evre === 0) { setEvre(1); setPara(para - 10 ); toast("-10 para")}
    else if (evre === 6) setEvre(0)
    else if (evre === 5) {
      setEvre(0);
      setPara(para + 20);
      toast("+20 para")
    }


  }

  useEffect(() => {
    const yasam = setInterval(() => {
      if (evre === 0) return;
      else if (evre === 6) return;
      else { setEvre((sonEvre) => (sonEvre + 1) % 7) }
    }, 1000);
    return () => clearInterval(yasam);
  }, [evre]);

  return (
    <th>
      <Image
        src={`/evre${evre}.jpeg`}
        width={100}
        height={100}
        alt="asd"
        onClick={handleClick} />

    </th>)
}

export default function App() {
  const [para, setPara] = useState(100)
  if (para <= 0) redirect("/iflas");


  return (
    <main>
            <div>
        <ToastContainer />
      </div>
      <h1>{localStorage.getItem("tarla")} </h1>
      <h2>Paranız: {para} ₺</h2>
      <table>
        <tr>
          <Kare para={para} setPara={setPara}></Kare>
          <Kare para={para} setPara={setPara}></Kare>
          <Kare para={para} setPara={setPara}></Kare>
          <Kare para={para} setPara={setPara}></Kare>
          <Kare para={para} setPara={setPara}></Kare>
        </tr>
        <tr>
        <Kare para={para} setPara={setPara}></Kare>
        <Kare para={para} setPara={setPara}></Kare>
        <Kare para={para} setPara={setPara}></Kare>
        <Kare para={para} setPara={setPara}></Kare>
        <Kare para={para} setPara={setPara}></Kare>

        </tr>
        <tr>
        <Kare para={para} setPara={setPara}></Kare>
        <Kare para={para} setPara={setPara}></Kare>
        <Kare para={para} setPara={setPara}></Kare>
        <Kare para={para} setPara={setPara}></Kare>
        <Kare para={para} setPara={setPara}></Kare>

        </tr>
        <tr>
        <Kare para={para} setPara={setPara}></Kare>
        <Kare para={para} setPara={setPara}></Kare>
        <Kare para={para} setPara={setPara}></Kare>
        <Kare para={para} setPara={setPara}></Kare>
        <Kare para={para} setPara={setPara}></Kare>

        </tr>
        <tr>
        <Kare para={para} setPara={setPara}></Kare>
        <Kare para={para} setPara={setPara}></Kare>
        <Kare para={para} setPara={setPara}></Kare>
        <Kare para={para} setPara={setPara}></Kare>
        <Kare para={para} setPara={setPara}></Kare>

        </tr>
      </table>
    </main>
  )
}