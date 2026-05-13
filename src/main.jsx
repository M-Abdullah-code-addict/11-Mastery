import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Contact, About, Materials, DynamicMaterial, DynamicPDF, SignIn, Register, Admin } from "./components";


createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/materials/:subject" element={<DynamicMaterial />} />
          <Route path="/materials/:subject/:pdfId" element={<DynamicPDF />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
);
