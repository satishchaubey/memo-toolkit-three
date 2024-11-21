"use client";

import { useSelector } from "react-redux";
import CardComponent from "../memoMessage/page"; // Adjust the path as needed

export default function ItemsList({ onEdit,onNotification }) {
  const items = useSelector((state) => state.form.items);

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <CardComponent key={item.id} item={item} onEdit={onEdit} onNotification={onNotification}/>
      ))}
    </div>
  );
}
