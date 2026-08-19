import { useEffect, useState } from "react"

import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore"

import { db, auth } from "../firebase"
import { signOut } from "firebase/auth"

function Admin() {

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")

  const [notices, setNotices] = useState([])

  const [editingId, setEditingId] = useState(null)
  const [editTitle, setEditTitle] = useState("")
  const [editDescription, setEditDescription] = useState("")

  // -----------------------------
  // Logout
  // -----------------------------

  const handleLogout = async () => {

    try {

      await signOut(auth)

      alert("Logged Out")

    } catch (error) {

      console.log(error)

      alert("Error logging out")

    }

  }

  // -----------------------------
  // Get Notices
  // -----------------------------

  useEffect(() => {

    const unsubscribe = onSnapshot(
      collection(db, "notices"),
      (snapshot) => {

        const noticesArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        setNotices(noticesArray)

      }
    )

    return () => unsubscribe()

  }, [])

  // -----------------------------
  // Add Notice
  // -----------------------------

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      await addDoc(collection(db, "notices"), {

        title,
        category,
        description,
        createdAt: serverTimestamp(),

      })

      alert("Notice Added Successfully")

      setTitle("")
      setCategory("")
      setDescription("")

    } catch (error) {

      console.log(error)

      alert("Error adding notice")

    }

  }

  // -----------------------------
  // Delete Notice
  // -----------------------------

  const handleDelete = async (id) => {

    try {

      await deleteDoc(doc(db, "notices", id))

      alert("Notice Deleted")

    } catch (error) {

      console.log(error)

      alert("Error deleting notice")

    }

  }

  // -----------------------------
  // Start Editing Notice
  // -----------------------------

  const handleEdit = (notice) => {

    setEditingId(notice.id)
    setEditTitle(notice.title)
    setEditDescription(notice.description)

  }

  // -----------------------------
  // Update Notice
  // -----------------------------

  const handleUpdate = async (id) => {

    try {

      await updateDoc(doc(db, "notices", id), {

        title: editTitle,
        description: editDescription,

      })

      alert("Notice Updated")

      setEditingId(null)
      setEditTitle("")
      setEditDescription("")

    } catch (error) {

      console.log(error)

      alert("Error updating notice")

    }

  }

  // -----------------------------
  // Cancel Editing
  // -----------------------------

  const handleCancelEdit = () => {

    setEditingId(null)
    setEditTitle("")
    setEditDescription("")

  }

  return (

    <section className="pt-32 pb-24 min-h-screen bg-gray-50">

      <div className="max-w-3xl mx-auto px-6">

        <div className="bg-white shadow-xl rounded-3xl p-10">

          {/* -------------------------------- */}
          {/* Header */}
          {/* -------------------------------- */}

          <h1 className="text-4xl font-bold text-blue-900">
            Admin Notice Panel
          </h1>

          <p className="mt-3 text-gray-600">
            Add, edit, and manage school notices and announcements.
          </p>


          {/* -------------------------------- */}
          {/* Add Notice */}
          {/* -------------------------------- */}

          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-6"
          >

            <input
              type="text"
              placeholder="Notice Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-900"
              required
            />

            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-900"
              required
            />

            <textarea
              placeholder="Notice Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-900 h-40 resize-none"
              required
            />

            <button
              type="submit"
              className="bg-blue-900 text-white py-4 rounded-xl hover:bg-blue-800 transition"
            >
              Add Notice
            </button>

          </form>


          {/* -------------------------------- */}
          {/* Logout */}
          {/* -------------------------------- */}

          <button
            onClick={handleLogout}
            className="mt-6 w-full bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition"
          >
            Logout
          </button>


          {/* -------------------------------- */}
          {/* Existing Notices */}
          {/* -------------------------------- */}

          <div className="mt-16">

            <h2 className="text-2xl font-bold text-blue-900">
              Existing Notices
            </h2>

            <div className="mt-8 flex flex-col gap-6">

              {notices.length === 0 ? (

                <p className="text-gray-500">
                  No notices available.
                </p>

              ) : (

                notices.map((notice) => (

                  <div
                    key={notice.id}
                    className="bg-gray-100 p-6 rounded-2xl"
                  >

                    {editingId === notice.id ? (

                      /* -------------------------------- */
                      /* Edit Notice */
                      /* -------------------------------- */

                      <div className="flex flex-col gap-4">

                        <input
                          type="text"
                          value={editTitle}
                          onChange={(e) =>
                            setEditTitle(e.target.value)
                          }
                          className="border p-3 rounded-xl outline-none"
                        />

                        <textarea
                          value={editDescription}
                          onChange={(e) =>
                            setEditDescription(e.target.value)
                          }
                          className="border p-3 rounded-xl outline-none h-32 resize-none"
                        />

                        <div className="flex gap-3">

                          <button
                            onClick={() =>
                              handleUpdate(notice.id)
                            }
                            className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition"
                          >
                            Save
                          </button>

                          <button
                            onClick={handleCancelEdit}
                            className="bg-gray-500 text-white px-5 py-2 rounded-xl hover:bg-gray-600 transition"
                          >
                            Cancel
                          </button>

                        </div>

                      </div>

                    ) : (

                      /* -------------------------------- */
                      /* Display Notice */
                      /* -------------------------------- */

                      <>

                        <h3 className="text-xl font-semibold">
                          {notice.title}
                        </h3>

                        <p className="mt-2 text-sm text-blue-900 font-medium">
                          {notice.category}
                        </p>

                        <p className="mt-3 text-gray-600">
                          {notice.description}
                        </p>

                        <div className="mt-5 flex gap-3">

                          <button
                            onClick={() =>
                              handleEdit(notice)
                            }
                            className="bg-blue-900 text-white px-5 py-2 rounded-xl hover:bg-blue-800 transition"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() =>
                              handleDelete(notice.id)
                            }
                            className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition"
                          >
                            Delete
                          </button>

                        </div>

                      </>

                    )}

                  </div>

                ))

              )}

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Admin