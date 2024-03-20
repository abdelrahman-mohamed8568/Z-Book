import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Lists() {
  const [active, setActive] = useState(1);
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActive(1);
        break;
      case "/Classics":
        setActive(2);
        break;
      case "/Science":
        setActive(3);
        break;
      case "/Romance":
        setActive(4);
        break;
      case "/Thriller":
        setActive(5);
        break;
      default:
        setActive(1);
    }
  }, [location]);

  return (
    <>
      <div className="box">
        <div className="buttons" id="up">
          <Link
            className={active === 1 ? "linkButton active" : "linkButton"}
            to={"/"}
          >
            Fantasy
          </Link>
          <Link
            className={active === 2 ? "linkButton active" : "linkButton"}
            to={"/Classics"}
          >
            Classics
          </Link>
          <Link
            className={active === 3 ? "linkButton active" : "linkButton"}
            to={"/Science"}
          >
            Science
          </Link>
          <Link
            className={active === 4 ? "linkButton active" : "linkButton"}
            to={"/Romance"}
          >
            Romance
          </Link>
          <Link
            className={active === 5 ? "linkButton active" : "linkButton"}
            to={"/Thriller"}
          >
            Thriller
          </Link>
        </div>
      </div>
    </>
  );
}
