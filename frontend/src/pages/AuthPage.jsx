import { useState } from "react"
import { useNavigate} from "react-router-dom"
import toast from "react-hot-toast"

import api from "../services/api"
import PenguinLogo from "../assets/logo.png"

function AuthPage() {
  const [activeTab, setActiveTab] = useState("login")
  const navigate = useNavigate()
  const [usn, setUsn] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {

  if (!usn.trim()) {
    toast.error("USN is required")
    return
  }

  if (!password.trim()) {
    toast.error("Password is required")
    return
  }

  try {

    setLoading(true)

    const res = await api.post("/login", {
      usn,
      password,
    })

    localStorage.setItem(
      "token",
      res.data.token
    )

    localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
    )

    toast.success("Login Successful")

    navigate("/student/dashboard")

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Login Failed"
    )

  } finally {

    setLoading(false)

  }
}
  return (


    <div className="min-h-screen bg-white flex items-center justify-center px-6">

      <div className="w-full max-w-5xl grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-black/5">

        {/* LEFT */}

        <div className="bg-black text-white p-12 flex flex-col justify-center">

          <img
            src={PenguinLogo}
            alt="Edwin's Library"
            className="w-24 h-24 mb-6"
          />

          <h1 className="text-5xl font-bold">
            Edwin's Library
          </h1>

          <p className="mt-6 text-white/70 leading-8">
            Intelligent Library Management Platform powered by
            AI recommendations, QR borrowing, analytics and
            modern student experiences.
          </p>

        </div>

        {/* RIGHT */}

        <div className="bg-white p-10">

          <div className="flex bg-gray-100 rounded-full p-1 mb-8">

            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-3 rounded-full transition ${
                activeTab === "login"
                  ? "bg-primary text-black font-semibold"
                  : ""
              }`}
            >
              Student Login
            </button>

            <button
              onClick={() => setActiveTab("register")}
              className={`flex-1 py-3 rounded-full transition ${
                activeTab === "register"
                  ? "bg-primary text-black font-semibold"
                  : ""
              }`}
            >
              Register
            </button>

            <button
              onClick={() => setActiveTab("admin")}
              className={`flex-1 py-3 rounded-full transition ${
                activeTab === "admin"
                  ? "bg-primary text-black font-semibold"
                  : ""
              }`}
            >
              Admin
            </button>

          </div>

          {/* LOGIN */}

          {activeTab === "login" && (
            <div>

              <h2 className="text-3xl font-bold mb-8">
                Student Login
              </h2>

              <input
  value={usn}
  onChange={(e) => setUsn(e.target.value)}
  placeholder="USN"
  className="w-full border p-4 rounded-xl mb-4"
/>

<input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Password"
  className="w-full border p-4 rounded-xl mb-6"
/>

              <button
  onClick={handleLogin}
  disabled={loading}
  className="
    w-full
    bg-primary
    py-4
    rounded-xl
    font-semibold
  "
>

  {loading
    ? "Logging in..."
    : "Login"}

</button>
            </div>
          )}

          {/* REGISTER */}

          {activeTab === "register" && (
            <div>

              <h2 className="text-3xl font-bold mb-8">
                Student Registration
              </h2>

              <input
                placeholder="Full Name"
                className="w-full border p-4 rounded-xl mb-4"
              />

              <input
                placeholder="USN"
                className="w-full border p-4 rounded-xl mb-4"
              />

              <input
                placeholder="Email"
                className="w-full border p-4 rounded-xl mb-4"
              />

              <button
                className="w-full bg-primary py-4 rounded-xl font-semibold"
              >
                Register
              </button>

            </div>
          )}

          {/* ADMIN */}

          {activeTab === "admin" && (
            <div>

              <h2 className="text-3xl font-bold mb-8">
                Admin Login
              </h2>

              <input
                placeholder="Admin Email"
                className="w-full border p-4 rounded-xl mb-4"
              />

              <button
                className="w-full bg-primary py-4 rounded-xl font-semibold"
              >
                SEND OTP
              </button>

            </div>
          )}

        </div>

      </div>

    </div>
  )
}

export default AuthPage