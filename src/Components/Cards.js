import { Route, Routes } from "react-router-dom";
import Fantasy from "./Pages/Fantasy";
import Classics from "./Pages/Classics";
import Romance from "./Pages/Romance";
import Science from "./Pages/Science";
import Thriller from "./Pages/Thriller";
import { useState, useEffect } from "react";

export default function Cards() {
  const [isActive, setIsActive] = useState("hidden");
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollY >= 1500 ? setIsActive("show") : setIsActive("hidden");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="contaner">
      <Routes>
        <Route path="/" element={<Fantasy />} />
        <Route path="Classics" element={<Classics />} />
        <Route path="Science" element={<Science />} />
        <Route path="Romance" element={<Romance />} />
        <Route path="Thriller" element={<Thriller />} />
      </Routes>
      <a href="#up" className={isActive}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-chevron-up toUp"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
          />
        </svg>
      </a>
    </div>
  );
}
