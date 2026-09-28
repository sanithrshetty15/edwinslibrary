import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"

import toast from "react-hot-toast"

import api from "../services/api"

function AdminDashboard() {

  const navigate = useNavigate()

  const [students, setStudents] = useState([])

  const [loading, setLoading] = useState(true)

  const [actionLoading, setActionLoading] = useState(null)

  const [bookTitle, setBookTitle] = useState("")
  const [bookAuthor, setBookAuthor] = useState("")
  const [bookQuantity, setBookQuantity] = useState("")
  const [bookBarcode, setBookBarcode] = useState("")
  const [bookCover, setBookCover] = useState(null)
  const [bookLoading, setBookLoading] = useState(false)

  const fetchPendingStudents = async () => {

    try {

      setLoading(true)

      const token = localStorage.getItem("adminToken")

      if (!token) {
        navigate("/admin")
        return
      }

      const res = await api.get(
        "/admin/pending-students",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      setStudents(res.data)

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to load pending students"
      )

      if (error.response?.status === 401) {
        localStorage.removeItem("adminToken")
        navigate("/admin")
      }

    } finally {

      setLoading(false)

    }

  }

  useEffect(() => {
    fetchPendingStudents()
  }, [])

  const handleApprove = async (userId) => {

    try {

      setActionLoading(userId)

      const token = localStorage.getItem("adminToken")

      const res = await api.post(
        "/admin/approve-student",
        { userId },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      toast.success(
        res.data.message ||
        "Student approved successfully"
      )

      setStudents(prevStudents =>
  prevStudents.filter(
    student => student._id !== userId
  )
)

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to approve student"
      )

    } finally {

      setActionLoading(null)

    }

  }

  const handleReject = async (userId) => {

    try {

      setActionLoading(userId)

      const token = localStorage.getItem("adminToken")

      const res = await api.delete(
        "/admin/reject-student",
        {
          headers: {
            Authorization: `Bearer ${token}`
          },

          data: {
            userId
          }
        }
      )

      toast.success(
        res.data.message ||
        "Student rejected"
      )

      setStudents(
        students.filter(
          student => student._id !== userId
        )
      )

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to reject student"
      )

    } finally {

      setActionLoading(null)

    }

  }

  const handleAddBook = async () => {

  if (!bookTitle.trim()) {
    toast.error("Book title is required")
    return
  }

  if (!bookAuthor.trim()) {
    toast.error("Author is required")
    return
  }

  if (!bookQuantity || Number(bookQuantity) <= 0) {
    toast.error("Enter a valid quantity")
    return
  }

  if (!bookBarcode.trim()) {
    toast.error("Barcode is required")
    return
  }

  try {

    setBookLoading(true)

    const token = localStorage.getItem("adminToken")

    const formData = new FormData()

formData.append("title", bookTitle)
formData.append("author", bookAuthor)
formData.append("quantity", Number(bookQuantity))
formData.append("barcode", bookBarcode)

if (bookCover) {
  formData.append("coverImage", bookCover)
}

const res = await api.post(
  "/book/add",
  formData,
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
)

    toast.success(
      res.data.message ||
      "Book added successfully"
    )

    setBookTitle("")
    setBookAuthor("")
    setBookQuantity("")
    setBookBarcode("")
    setBookTitle("")
    setBookAuthor("")
    setBookQuantity("")
    setBookBarcode("")
    setBookCover(null)

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Failed to add book"
    )

  } finally {

    setBookLoading(false)

  }
}
  const handleLogout = () => {

    localStorage.removeItem("adminToken")

    toast.success("Admin logged out")

    navigate("/admin")

  }

  return (

    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}

      <header className="
        border-b
        border-white/10
        px-8
        py-5
        flex
        items-center
        justify-between
      ">

        <div>

          <h1 className="text-2xl font-bold">
            Edwin's Library
          </h1>

          <p className="text-white/50 text-sm mt-1">
            Administrator Dashboard
          </p>

        </div>

        <button
          onClick={handleLogout}
          className="
            px-5
            py-2
            rounded-xl
            border
            border-white/20
            hover:bg-white
            hover:text-black
            transition
          "
        >
          Logout
        </button>

      </header>


      {/* CONTENT */}

      <main className="max-w-7xl mx-auto px-8 py-10">

        {/* STATS */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
          mb-10
        ">

          <div className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-6
          ">

            <p className="text-white/50">
              Pending Students
            </p>

            <h2 className="text-4xl font-bold mt-3 text-primary">
              {students.length}
            </h2>

          </div>

          <div className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-6
          ">

            <p className="text-white/50">
              System
            </p>

            <h2 className="text-2xl font-bold mt-3">
              Online
            </h2>

          </div>

          <div className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-6
          ">

            <p className="text-white/50">
              Admin Access
            </p>

            <h2 className="text-2xl font-bold mt-3">
              Active
            </h2>

          </div>

        </div>


        {/* PENDING STUDENTS */}

        <section>

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-3xl font-bold">
                Pending Students
              </h2>

              <p className="text-white/50 mt-2">
                Review and approve new student registrations.
              </p>

            </div>

            <button
              onClick={fetchPendingStudents}
              className="
                px-5
                py-3
                rounded-xl
                bg-white/10
                hover:bg-white/20
                transition
              "
            >
              Refresh
            </button>

          </div>


          {loading ? (

            <div className="
              text-center
              py-20
              text-white/50
            ">
              Loading students...
            </div>

          ) : students.length === 0 ? (

            <div className="
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-12
              text-center
            ">

              <h3 className="text-xl font-semibold">
                No Pending Students
              </h3>

              <p className="text-white/50 mt-2">
                All student registrations have been processed.
              </p>

            </div>

          ) : (

            <div className="
              overflow-x-auto
              bg-white/5
              border
              border-white/10
              rounded-2xl
            ">

              <table className="w-full">

                <thead className="border-b border-white/10">

                  <tr className="text-left text-white/50 text-sm">

                    <th className="p-5">
                      Name
                    </th>

                    <th className="p-5">
                      USN
                    </th>

                    <th className="p-5">
                      Department
                    </th>

                    <th className="p-5">
                      Section
                    </th>

                    <th className="p-5">
                      Year
                    </th>

                    <th className="p-5">
                      Email
                    </th>

                    <th className="p-5">
                      Phone
                    </th>

                    <th className="p-5">
                      Actions
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {students.map(student => (

                    <tr
                      key={student._id}
                      className="
                        border-b
                        border-white/5
                        hover:bg-white/5
                      "
                    >

                      <td className="p-5 font-medium">
                        {student.name}
                      </td>

                      <td className="p-5">
                        {student.usn}
                      </td>

                      <td className="p-5">
                        {student.department}
                      </td>

                      <td className="p-5">
                        {student.section}
                      </td>

                      <td className="p-5">
                        {student.year}
                      </td>

                      <td className="p-5 text-sm">
                        {student.email}
                      </td>

                      <td className="p-5">
                        {student.phone}
                      </td>

                      <td className="p-5">

                        <div className="flex gap-2">

                          <button
                            onClick={() =>
                              handleApprove(student._id)
                            }
                            disabled={
                              actionLoading === student._id
                            }
                            className="
                              px-4
                              py-2
                              rounded-lg
                              bg-primary
                              text-black
                              font-semibold
                              hover:opacity-90
                              disabled:opacity-50
                            "
                          >
                            {actionLoading === student._id
                              ? "..."
                              : "Approve"}
                          </button>

                          <button
                            onClick={() =>
                              handleReject(student._id)
                            }
                            disabled={
                              actionLoading === student._id
                            }
                            className="
                              px-4
                              py-2
                              rounded-lg
                              bg-red-500/10
                              text-red-400
                              border
                              border-red-500/20
                              hover:bg-red-500
                              hover:text-white
                              transition
                              disabled:opacity-50
                            "
                          >
                            Reject
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </section>
          {/* ADD BOOK */}

<section className="mt-12">

  <div className="mb-6">

    <h2 className="text-3xl font-bold">
      Add Book
    </h2>

    <p className="text-white/50 mt-2">
      Add a new book to the library inventory.
    </p>

  </div>

  <div className="
    bg-white/5
    border
    border-white/10
    rounded-2xl
    p-8
  ">

    <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-5
    ">

      <input
        type="text"
        value={bookTitle}
        onChange={(e) =>
          setBookTitle(e.target.value)
        }
        placeholder="Book Title"
        className="
          w-full
          bg-white/5
          border
          border-white/10
          text-white
          p-4
          rounded-xl
          outline-none
          focus:border-primary
        "
      />

      <input
        type="text"
        value={bookAuthor}
        onChange={(e) =>
          setBookAuthor(e.target.value)
        }
        placeholder="Author"
        className="
          w-full
          bg-white/5
          border
          border-white/10
          text-white
          p-4
          rounded-xl
          outline-none
          focus:border-primary
        "
      />

      <input
        type="number"
        min="1"
        value={bookQuantity}
        onChange={(e) =>
          setBookQuantity(e.target.value)
        }
        placeholder="Quantity"
        className="
          w-full
          bg-white/5
          border
          border-white/10
          text-white
          p-4
          rounded-xl
          outline-none
          focus:border-primary
        "
      />

      <input
        type="text"
        value={bookBarcode}
        onChange={(e) =>
          setBookBarcode(e.target.value)
        }
        placeholder="Book Barcode"
        className="
          w-full
          bg-white/5
          border
          border-white/10
          text-white
          p-4
          rounded-xl
          outline-none
          focus:border-primary
        "
      />

    </div>
              {/* BOOK COVER */}
    <div className="md:col-span-2">

      <label className="block text-white/70 mb-2">
        Book Cover Image
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setBookCover(e.target.files[0])
        }
        className="
          w-full
          bg-white/5
          border
          border-white/10
          text-white
          p-4
          rounded-xl
          outline-none
          focus:border-primary
        "
      />

      {bookCover && (
        <p className="text-white/50 text-sm mt-2">
          Selected: {bookCover.name}
        </p>
      )}

    </div>


    <button
      onClick={handleAddBook}
      disabled={bookLoading}
      className="
        mt-6
        px-6
        py-3
        rounded-xl
        bg-primary
        text-black
        font-semibold
        hover:opacity-90
        disabled:opacity-50
      "
    >
      {bookLoading
        ? "Adding Book..."
        : "Add Book"}
    </button>

  </div>

</section>
      </main>

    </div>

  )

}

export default AdminDashboard
