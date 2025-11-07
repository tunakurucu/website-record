import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App";
import Home from "./routes/Home";
import Results from "./routes/Results";


const router = createBrowserRouter([
{
path: "/",
element: <App />,
children: [
{ index: true, element: <Home /> },
{ path: "r", element: <Results /> },
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