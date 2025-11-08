import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function App() {
return (
<div className="min-h-screen flex flex-col bg-[#1F2A3A] text-white">
<Header />
<main className="container flex-1 py-6">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_60%)]"></div>
<Outlet />
</main>
<Footer />
</div>
);
}