'use client'
 
import axios from 'axios';
export default function Http() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const playload = {
        id: 100, 
        title: 'Test',
    }

    const handleGet = async () => await axios.get(url);
    const handlePost = async () => await axios.post(url, playload);
    const handlePut = async () => await axios.put(url, playload);
    const handleDelete = async () => await axios.delete(url);

    return (
        <div>
            <h1>HTTP:</h1>
            <button className="btn" onClick={handleGet}>GET</button>
            <button className="btn" onClick={handlePost}>POST</button>
            <button className="btn" onClick={handlePut}>PUT</button>
            <button className="btn" onClick={handleDelete}>DELETE</button>
        </div>
    );
}