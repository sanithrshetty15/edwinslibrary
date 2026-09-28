import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import api from "../services/api"

function StudentDashboard() {
  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [books, setBooks] = useState([])
  const [issuedBooks, setIssuedBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    const token = localStorage.getItem("token")

    if (!token || !storedUser) {
      navigate("/auth")
      return
    }

    setUser(JSON.parse(storedUser))
    loadDashboard()
  }, [])

  const loadDashboard = async () => {
    try {
      setLoading(true)

      const [booksRes, issuedRes] = await Promise.all([
        api.get("/books"),
        api.get("/issued"),
      ])

      setBooks(booksRes.data)
      setIssuedBooks(issuedRes.data)
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Failed to load dashboard"
      )
    } finally {
      setLoading(false)
    }
  }
  const handleIssueBook = async (barcode) => {

  try {

    const token = localStorage.getItem("token")

    await api.post(
      "/book/issue",
      {
        barcode
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    toast.success("Book issued successfully")

    await loadDashboard()

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Failed to issue book"
    )

  }

}
  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")

    toast.success("Logged out successfully")
    navigate("/auth")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">

  <div className="flex flex-col items-center gap-6">

    <div className="w-14 h-14 border-4 border-white/10 border-t-primary rounded-full animate-spin"></div>

    <div className="text-center">

      <h2 className="text-xl font-semibold">
        Edwin's Library
      </h2>

      <p className="text-white/40 mt-2 animate-pulse">
        Preparing your library...
      </p>

    </div>

  </div>

</div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="border-b border-white/10 px-8 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Edwin's Library
          </h1>

          <p className="text-sm text-white/50 mt-1">
            Student Dashboard
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="border border-white/20 px-5 py-2 rounded-xl hover:bg-white/10 transition"
        >
          Logout
        </button>
      </header>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-8 py-10">

        {/* WELCOME */}
        <section className="mb-10">
          <p className="text-white/50">
            Welcome back,
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {user?.name}
          </h2>

          <p className="text-white/50 mt-2">
            USN: {user?.usn}
          </p>
        </section>

        {/* STATS */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-white/50">
              Available Books
            </p>

            <h3 className="text-4xl font-bold text-primary mt-3">
              {books.length}
            </h3>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-white/50">
              Issued Books
            </p>

            <h3 className="text-4xl font-bold text-primary mt-3">
              {issuedBooks.length}
            </h3>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-white/50">
              Account Status
            </p>

            <h3 className="text-2xl font-bold text-primary mt-3">
              Approved
            </h3>
          </div>

        </section>

        {/* AVAILABLE BOOKS */}

<section className="mb-12">

  <div className="flex items-center justify-between mb-6">

    <div>
      <h2 className="text-2xl font-bold">
        Available Books
      </h2>

      <p className="text-white/50 mt-1">
        Browse books available in the library.
      </p>
    </div>

    <button
      onClick={loadDashboard}
      className="bg-white/10 px-5 py-2 rounded-xl hover:bg-white/20 transition"
    >
      Refresh
    </button>

  </div>


  {books.length === 0 ? (

    <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">

      <p className="text-white/50">
        No books available.
      </p>

    </div>

  ) : (

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

      {books.map((book) => (

        <div
          key={book._id}
          className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
        >

          {/* BOOK COVER */}

          {book.coverImage && (
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-64 object-cover"
            />
          )}


          {/* BOOK DETAILS */}

          <div className="p-6">

            <h3 className="text-xl font-semibold">
              {book.title}
            </h3>

            <p className="text-white/50 mt-2">
              {book.author}
            </p>


            <div className="mt-5 flex justify-between text-sm">

              <span className="text-white/40">
                Barcode
              </span>

              <span>
                {book.barcode}
              </span>

            </div>


            <div className="mt-2 flex justify-between text-sm">

              <span className="text-white/40">
                Available
              </span>

              <span className="text-primary font-semibold">
                {book.quantity}
              </span>

            </div>

            <button
  onClick={() => handleIssueBook(book.barcode)}
  disabled={book.quantity <= 0}
  className="w-full mt-5 py-3 rounded-xl bg-primary text-black font-semibold hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
>
  {book.quantity <= 0 ? "Not Available" : "Issue Book"}
</button>

          </div>

        </div>

      ))}

    </div>

  )}

</section>
        {/* ISSUED BOOKS */}
        <section>

          <h2 className="text-2xl font-bold">
            My Issued Books
          </h2>

          <p className="text-white/50 mt-1 mb-6">
            Books currently issued to you.
          </p>

          {issuedBooks.length === 0 ? (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
              <p className="text-white/50">
                You have no issued books.
              </p>
            </div>
          ) : (
            <div className="space-y-4">

              {issuedBooks.map((issue) => (
                <div
                  key={issue._id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-semibold">
                    {issue.book?.title || "Book"}
                  </h3>

                  <p className="text-white/50 mt-2">
                    {issue.book?.author || ""}
                  </p>
                </div>
              ))}

            </div>
          )}

        </section>

      </main>

    </div>
  )
}

export default StudentDashboard
