import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/view.css";

const ViewNotes = () => {
  const userId = localStorage.getItem("user");
  const [notes, setNotes] = useState([]);

  //------------ getting data from backend ------------

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/notes?userId=${userId}`
        );
        if (response.status === 200) {
          const data = response.data.data;
          setNotes(data);
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    };
    fetchData();
  }, [userId]);

  //----------- edit section -------------

  const handleEdit = (id) => {
    setNotes(
      notes.map((note) => {
        if (note._id === id) {
          return { ...note, editing: true }; // Set editing flag to true for the note being edited
        }
        return note;
      })
    );
  };

  //---------------- save notes after edit is completed -------------

  const handleSave = async (id, title, description) => {
    try {
      const response = await axios.put(`http://localhost:3000/notes/${id}`, {
        title,
        description,
      });
      if (response.status === 200) {
        // If successfully updated, set editing flag to false
        setNotes(
          notes.map((note) => {
            if (note._id === id) {
              return { ...note, editing: false };
            }
            return note;
          })
        );
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  //---------------- delete notes ----------------------

  const handleDelete = async (id) => {
    try {
      const response = await axios.patch(`http://localhost:3000/notes/${id}`);

      if (response.status === 200) {
        // Update notes state directly to remove deleted task
        setNotes(notes.filter((note) => note._id !== id));
      } else {
        console.error("Deletion failed:", response);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="viewtask-container">
      {notes?.map((note) => (
        <div
          key={note._id}
          className="card"
          style={{ backgroundColor: note.colour }}
        >
          {note.editing ? (
            <div className="edit-wrapper">
              <input
                type="text"
                value={note.title}
                onChange={(e) =>
                  setNotes(
                    notes.map((n) =>
                      n._id === note._id ? { ...n, title: e.target.value } : n
                    )
                  )
                }
              />
              <input
              className="edit-textarea"
                value={note.description}
                onChange={(e) =>
                  setNotes(
                    notes.map((n) =>
                      n._id === note._id
                        ? { ...n, description: e.target.value }
                        : n
                    )
                  )
                }
              />
              <div>
              <button
                onClick={() =>
                  handleSave(note._id, note.title, note.description)
                }
              >
                Save
              </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="cookieHeading">{note.title}</p>
              <p className="cookieDescription">
                {note.description}
                <br />
              </p>
              <div className="buttonContainer">
                <button
                  className="acceptButton"
                  onClick={() => handleEdit(note._id)}
                >
                  Edit
                </button>
                <button
                  className="declineButton"
                  onClick={() => handleDelete(note._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ViewNotes;
