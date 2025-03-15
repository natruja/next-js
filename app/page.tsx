'use client';

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("Natruja");
  const handdleChangeName = () => {
    setName("NatruBeauty");
}



  return (
    <>
      <div className="text-4xl">
        <h1>Hello World Next.js 15 </h1>
      </div>
      <div>
        Hi {name}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          onChange = { e=>setName(e.target.value)} 
          className="input" />
        <button onClick={handdleChangeName}
          className="btn"
        >
          Change Name
        </button>
      </div>
    </>
  );
}
