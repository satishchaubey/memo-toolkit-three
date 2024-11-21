import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem } from "@/store/slices/formSlice"; // Import the updateItem action
import Notification from "../notification/page";
import ItemsList from "../cardComponent/page";

export default function MemoForm() {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState("");
    const [notificationType, setNotificationType] = useState("success");
    const [editingItem, setEditingItem] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") {
            setNotificationMessage("Please enter some text.");
            setNotificationType("error");
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 6000);
            return;
        }
        if (editingItem) {
            dispatch(updateItem({ ...editingItem, text: inputValue }));
            setNotificationMessage("Item updated successfully!");
        } else {
            const newItem = {
                id: Date.now(),
                text: inputValue,
                completed: false,
            };
            dispatch(addItem(newItem));
            setNotificationMessage("Item added successfully!");
        }

        setInputValue("");
        setEditingItem(null);
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 2000);
    };

    const handleEdit = (item) => {
        setEditingItem(item);
        setInputValue(item.text);
    };

    // Notification handler to show different messages
    const handleNotification = (message, type) => {
        setNotificationMessage(message);
        setNotificationType(type);
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 4000);
    };
    return (
        <div className="p-1 from-blue-100 via-purple-100 to-pink-100">
            <div className="p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl shadow-lg animate-fadeIn">
                <div className="bg-white rounded-xl p-10 w-full max-w-md">
                    <h1 className=" sm:text-1xl md:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-6">
                        🚀 {editingItem ? "Update Task" : "Add Daily Tasks"} 😊
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 animate-slideInUp delay-300"
                    >
                        <div>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type something here..."
                                className="w-full px-4 py-3 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-transform duration-300 transform hover:scale-105"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-3 text-white bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-neutral-950 hover:via-yellow-400 hover:to-orange-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition-all transform hover:scale-105"
                        >
                            {editingItem ? "Update" : "Save"}
                        </button>
                    </form>
                </div>
            </div>
            {showNotification && (
                <Notification
                    message={notificationMessage}
                    type={notificationType}
                    onClose={() => setShowNotification(false)}
                />
            )}
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <ItemsList onEdit={handleEdit} onNotification={handleNotification} /> {/* Pass the handleEdit function to ItemsList */}
            </footer>
        </div>
    );
}
