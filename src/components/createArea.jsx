import React, { useState } from "react";

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const submitNote = (event) => {
    event.preventDefault();
    onAdd(note);
    setNote({ title: "", content: "" });
  };

  return (
    <form
      onSubmit={submitNote}
      className="bg-white p-4 rounded-xl shadow-md max-w-md mx-auto mt-6"
    >
      <input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
        className="w-full border border-gray-300 rounded p-2 mb-2"
      />
      <textarea
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
        rows="3"
        className="w-full border border-gray-300 rounded p-2 mb-2"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
      >
        Add
      </button>
    </form>
  );
};

export default CreateArea;
