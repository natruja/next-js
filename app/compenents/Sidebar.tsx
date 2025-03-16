import Link from 'next/link';

export default function Sidebar() {
    return (
        <div className="sidebar">
           
            <div className="flex flex-col gap-3">
                 <Link href="/"><i className="fa-solid fa-house"></i>  Home </Link>
                 <Link href="/hello"> <i className="fa-solid fa-user-plus"></i> Hello </Link>
                 <Link href="/http"><i className="fa-solid fa-server"></i> HTTP</Link>
                 <Link href="/setting/user"><i className="fa-solid fa-user"></i> User</Link>
                 <Link href="/employee"><i className="fa-solid fa-users"></i>  Employee </Link>
                
            </div>
        </div>
    )

}