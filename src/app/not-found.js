"use client";
import "@/css/not-found.css";
import { useDispatch } from "react-redux";
import { hideFooter, showFooter } from "../store/footerSlice";
import { useEffect } from "react";

const notFound = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideFooter());

    return () => {
      dispatch(showFooter());
    };
  }, []);
  return (
    <article className="sc-cf2e28af-0 kvYjMb">
      <div className="sc-cf2e28af-1 jhJaFM">
        <img
          src="/tetris.svg"
          alt="not found image"
          className="sc-cf2e28af-3 jsZmXQ"
        />
      </div>
      <div className="sc-cf2e28af-4 kRtKVw">
        <h1 className="sc-cf2e28af-2 ckEtXM">
          The page you`re
          <br />
          looking for <br />
          does not exist
        </h1>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/"
          className="sc-c8e937f7-1 irfgMJ"
        >
          Back Home
          <div className="sc-c8e937f7-14 eaEwWv">
            <svg
              viewBox="5 5 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="an arrow"
              style={{ pointerEvents: "none" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.4984 13.1572L22.6922 13.0305L22.6924 13.0432L22.7051 13.0431L22.8356 23.7076L21.3754 23.7255L21.2753 15.5384L13.6243 23.3821L12.579 22.3624L20.2273 14.5215L12.5166 14.6174L12.4984 13.1572Z"
                fill="black"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.4984 13.1572L22.6922 13.0305L22.6924 13.0432L22.7051 13.0431L22.8356 23.7076L21.3754 23.7255L21.2753 15.5384L13.6243 23.3821L12.579 22.3624L20.2273 14.5215L12.5166 14.6174L12.4984 13.1572Z"
                fill="black"
              ></path>
              <title>an arrow</title>
            </svg>
          </div>
        </a>
      </div>
    </article>
  );
};

export default notFound;
