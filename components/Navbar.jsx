import Link from "next/link";

export default function Navabar() {
    return (
        <nav className="grid grid-cols-2 p-3 border ">
            <div className="ms-4">Logo</div>
            <div className="flex gap-5 justify-center">
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/services'}>Services</Link>
                <Link href={'/contact'}>Contact</Link>
            </div>
        </nav>
    );
}