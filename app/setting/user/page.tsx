'use client';

import {useEffect, useState} from "react"
import MyButton from "@/app/compenents/MyButton";

export default function User() {
    const [users, setUsers] = useState<{
        id: number;
        name: string;
        email: string;

    }[]>([]); 

   useEffect(() => {
        setUsers([
            {id: 1, name: "John", email: "email@gmail.com"},
            {id: 2, name: "Doe", email: "email@gmail.com"},
            {id: 3, name: "Doe", email: "email@gmail.com"},
        ]);
   }, []); // function for fetch data from API


    const handlAddUser = () => { // function for add new user
        const newUser = {
                id: users.length + 1,
                name: "John", 
                email: "testadd@gmail.com"
        };
        setUsers([...users, newUser]);
    }

    const handlDeleteuser = (id: number) => { // function for delete user

        const newData = users.filter(user => user.id !== id);
        setUsers(newData); //ข้อมูลที่เหลือจากจากลบ
    }

    return (
        <>
        <div>
            <h1>User {users.length}</h1>
            <MyButton text="Click Me" />
            <MyButton text="Save data" color="green-500"/>
            <MyButton text="My Button" onClick={handlAddUser}/>
            <button onClick={handlAddUser} className="btn">Add User</button>
            <ul>
                {
                    users.map(
                        user => 
                            <li key={user.id}> 
                            {user.name}
                            {user.email}
                            <button onClick={() => handlDeleteuser(user.id)} 
                            className= "btn text-white btn-sm bg-red ml-3 rounded-md">ลบข้อมูล</button>
                        </li>
                        
                    )
                }
                
            </ul>
        </div>
        </>
    );
}