import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Note from "./components/Note.jsx";
import CreateArea from "./components/createArea.jsx";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    if (newNote.title.trim() === "" || newNote.content.trim() === "") {
      alert("Please enter both a title and content!");
      return;
    }
    setNotes((prev) => [...prev, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note, index) => index !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <CreateArea onAdd={addNote} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {notes.map((note, index) => (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
