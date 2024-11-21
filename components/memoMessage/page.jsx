"use client";

import { useDispatch } from "react-redux";
import { deleteItem, markComplete } from '../../store/slices/formSlice'; // Adjust path as needed
import { PencilIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'; // Adjusted import for Heroicons v2

export default function CardComponent({ item, onEdit, onNotification }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteItem(item.id)); // Delete item
        onNotification("Memo Deleted Successfully..🤦‍♂️😒");
    };


    const handleMarkComplete = () => {
        dispatch(markComplete(item.id)); // Toggle complete status
        onNotification("This Task Has Been Completed.👍");

    };

    return (
        <div
            className={`flex justify-between items-center gap-4 px-3 py-3 my-10  bg-white shadow-md rounded-lg ${item.completed ? "bg-green-100" : "bg-gray-100"} bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl shadow-lg animate-fadeIn`}
        >
            <div className="flex-1">
                <p className={item.completed ? "line-through text-gray-500 sm:text-1xl md:text-2xl " : "text-white"}>{item.text}</p>
            </div>
            <div className="flex space-x-4">
                <button
                    onClick={() => onEdit(item)}  // Only invoke onEdit onClick
                    className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600"
                >
                    <PencilIcon className="h-4 w-4" />
                </button>
                <button
                    onClick={handleMarkComplete}
                    className="bg-yellow-500 text-white px-3 py-2 rounded-lg hover:bg-yellow-600"
                >
                    <CheckIcon className="h-4 w-4" />
                </button>
                <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-2 py-2 rounded-lg hover:bg-red-600"
                >
                    <XMarkIcon className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
