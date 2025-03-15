'use client';

import {useRef} from 'react';
import Swal from 'sweetalert2';

export default function Company() {
    const inputRef = useRef<HTMLAreaElement>(null);
    const handleClick = () => {
        // สั่งการด้วย React ให้ focus ไปที่ input ที่เรากำหนด
        inputRef.current?.focus();
        document.getElementById("input")?.focus();

        Swal.fire({
            icon: 'success',
            title: 'Alert Test',
            text: 'This is alert',
            timer: 2000,
        });
    }

    const  handleClick2 = async () => {
        const button = await Swal.fire({
            title : "ยืนยันส่งข้อมูล",
            text : "คุณต้องการส่งข้อมูลใช่หรือไม่",
            icon : "question",
            showCancelButton : true,
            showConfirmButton : true,
        
        });
    
    }
    return (
        <div className="flex gap-2 p-3">
           
            <h1 className="text-2xl">Company Name: </h1>
           <input type="text" ref={inputRef} id="input" className="input" />
           <button className="btn" onClick={handleClick}> ทดสอบ </button>
           <button className="btn" onClick={handleClick2}>Confirm</button>
        </div>
    );
}