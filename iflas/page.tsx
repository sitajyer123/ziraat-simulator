"use client";

import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function App(){
    const notify = () => toast("Wow so easy!");
    
    useEffect(() => {
        notify();
    }, []);

    return(
        <main>
            <div>
                <ToastContainer />
            </div>
            <h1>İFLAS ETTİN</h1>
        </main>
    )
}