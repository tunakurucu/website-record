import { Link, useLocation } from "react-router-dom";
import logo from "/img folder/p.png";


export default function Header() {
const { search } = useLocation();
return (
<header className="border-b bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_60%)]">
<div className="container flex h-14 items-center justify-between">
<Link to="/">
  <img src={logo} alt="People's Power Logo" className="h-10 w-auto" />
</Link>
<nav className="text-sm text-white flex gap-4">
  <Link to={`/${search}`} className="hover:underline">
    Home
  </Link>
  <Link to="/explore" className="hover:underline">
    Explore
  </Link>
  <Link to="/contact" className="hover:underline">
    Contact
  </Link>
</nav>
</div>
</header>
);
}