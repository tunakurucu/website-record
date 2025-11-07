import { Link, useLocation } from "react-router-dom";


export default function Header() {
const { search } = useLocation();
return (
<header className="border-b bg-white">
<div className="container flex h-14 items-center justify-between">
<Link to="/" className="font-semibold">People's Power</Link>
<nav className="text-sm text-gray-600">
<Link to={`/${search}`} className="hover:underline">Home</Link>
</nav>
</div>
</header>
);
}