import { Link, useLocation } from "react-router-dom";


export default function Header() {
const { search } = useLocation();
return (
<header className="border-b bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_60%)]">
<div className="container flex h-14 items-center justify-between">
<Link to="/" className="font-semibold">People's Power</Link>
<nav className="text-sm text-gray-100">
<Link to={`/${search}`} className="hover:underline">Home</Link>
</nav>
</div>
</header>
);
}