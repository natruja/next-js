import Link from 'next/link';

export default function Sidebar() {
    return (
        <div className="sidebar">
           
            <div className="flex flex-col gap-4">
                 <Link href="/"><i className="fa fa-home mr-3">Home</i></Link>
                 <Link href="/hello"><i className="fa fa-home mr-3">Hello</i></Link>
                 <Link href="/http">HTTP</Link>
                 <Link href="/setting/user">User</Link>
                
            </div>
        </div>
    )

}