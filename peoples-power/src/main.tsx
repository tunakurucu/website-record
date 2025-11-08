import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App";
import Home from "./routes/Home";
import Results from "./routes/Results";
import Contact from "./routes/Contact";
import Topics from "./routes/Explore";
import Explore from "./routes/Explore";


const router = createBrowserRouter([
{
path: "/",
element: <App />,
children: [
{ index: true, element: <Home /> },
{ path: "r", element: <Results /> },
{ path: "contact", element: <Contact /> },
{ path: "topics", element: <Topics /> },
{ path: "explore", element: <Explore /> }, // Updated to use the new Explore component
],
},
]);


const qc = new QueryClient();


createRoot(document.getElementById("root")!).render(
<React.StrictMode>
<QueryClientProvider client={qc}>
<RouterProvider router={router} />
</QueryClientProvider>
</React.StrictMode>
);