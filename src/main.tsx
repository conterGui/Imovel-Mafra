// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // se estiver usando Tailwind ou CSS

const root = createRoot(document.getElementById("root")).render(<App />);
