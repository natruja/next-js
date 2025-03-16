'use client'

import { useState, useEffect, use } from 'react' 
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Employee(){
    const apiUrl = 'http://localhost:3001'


    const [employees, setEmployees] = useState([]);
    const [id, setId] =  useState(0);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remask, setRemask] = useState('');

    useEffect(() => {
        fetchData()

    }, [])


    const fetchData = async () => {
       const url = `${apiUrl}/api/employees/list`
       const res = await axios.get(url)
       setEmployees(res.data)
    
    }

    const saveData = async () => {
        const payload = {
                name: name, 
                username: username, 
                password: password, 
                remask: remask
            }

            if (id === 0 ) {
                const url = `${apiUrl}/api/employees/create`;
                await axios.post(url, payload)
            }else {
                const url = `${apiUrl}/api/employees/update${id}`;
                await axios.put(url, payload)
                setId(0)
            }
        
            fetchData()
            setName('')
            setUsername('')
            setPassword('')
            setRemask('')
    }

    const deleteData = async (id: number) => {
        const url = `${apiUrl}/api/employees/delete/${id}`
        await axios.delete(url)
        fetchData()
    }

    const editData = (employee: any) => {
        setId(employee.id)
        setName(employee.name)
        setUsername(employee.username)
        setPassword(employee.password)
        setRemask(employee.remask)
    }

    
    
    return (
        <>
            <div> Employee Data</div>
            <div className="flex flex-col gap-2 mb-3">
                <div>Name: </div>
                <input className="input" value={name} onChange={(e) => setName(e.target.value)} />

                <div>Username</div>
                <input className="input" value={username} onChange={(e) => setUsername(e.target.value)} />
                
                <div>Password</div>
                <input className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
                
                <div>Remark</div>
                <input className="input" value={remask} onChange={(e) => setRemask(e.target.value)} />

                <button className="btn" onClick={saveData}>
                    <i className="fa facheck mr-2"></i>
                    Save!
                </button>
            
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>password</th>
                        <th>remask</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee: any) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.username}</td>
                            <td>{employee.password}</td>
                            <td>{employee.remask}</td>
                            <td>

                            <button className='btn-edit' 
                                onClick={(() => editData(employee) )}> 
                                <i className="fa-solid fa-pen-to-square"> </i>
                            </button> 
                             &nbsp;&nbsp;
                            <button 
                                className="btn-delete" 
                                onClick={(() => deleteData(employee.id) )}>
                                <i className="fa-solid fa-trash"></i>
                            </button>
                                
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
   ) 

}