import React from "react";

const Note = ({ id, title, content, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-700">{content}</p>
      <button
        onClick={() => onDelete(id)}
        className="mt-3 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
