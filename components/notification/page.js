"use client";

import React from "react";

const Notification = ({ message, type, onClose }) => {
    return (
        <div
            className={`fixed right-5 bottom-5 p-4 rounded-lg shadow-lg transition-opacity duration-300 ${type === "success"
                    ? "bg-green-500 text-white"
                    : type === "error"
                        ? "bg-red-500 text-white"
                        : "bg-blue-500 text-white"
                } max-w-xs md:max-w-md`}
        >
            <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base">{message}</span>
                <button onClick={onClose} className="ml-4 text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Notification;
