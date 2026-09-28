import { useEffect, useState } from "react"
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

  const [name, setName] = useState("")
  const [department, setDepartment] = useState("")
  const [section, setSection] = useState("")
  const [year, setYear] = useState("")
  const [generatedUsn, setGeneratedUsn] = useState("")
  const [usnNumber, setUsnNumber] = useState("")
  const departmentCodes = {
  "Computer Science and Engineering": "CS",
  "Information Science and Engineering": "IS",
  "Computer Science and Design": "CD",
  "Artificial Intelligence and Machine Learning": "AI",
  "Electronics and Communication Engineering": "EC",
  "Electrical and Electronics Engineering": "EE",
  "Mechanical Engineering": "ME",
  "Civil Engineering": "CV",
}
useEffect(() => {
  if (!year || !department) {
    setGeneratedUsn("")
    return
  }

  if (year === "1") {
    setGeneratedUsn("USN not generated yet for 2026 batch")
    return
  }

  const branchCode = departmentCodes[department]

  if (!branchCode) {
    setGeneratedUsn("")
    return
  }

  const admissionYear = {
    "2": "25",
    "3": "24",
    "4": "23",
  }

  setGeneratedUsn(
    `4AL${admissionYear[year]}${branchCode}`
  )
}, [year, department])
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

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
const handleRegister = async () => {
  if (!name.trim()) {
    toast.error("Name is required")
    return
  }

  if (!department.trim()) {
    toast.error("Department is required")
    return
  }

  if (!section.trim()) {
    toast.error("Section is required")
    return
  }

  if (!usn.trim()) {
    toast.error("USN is required")
    return
  }

  if (!email.trim()) {
    toast.error("Email is required")
    return
  }

  if (!phone.trim()) {
    toast.error("Phone number is required")
    return
  }

  try {
    setLoading(true)

    const res = await api.post("/register", {
      name,
      department,
      section,
      usn,
      email,
      phone,
    })

    toast.success(
      res.data.message || "Registration successful"
    )

    setActiveTab("login")

  } catch (error) {
    toast.error(
      error.response?.data?.message ||
      "Registration failed"
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
              onClick={() => navigate("/admin")}
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

  {loading ? (
  <span className="flex items-center justify-center gap-3">
    <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
    Logging in...
  </span>
) : (
  "Login"
)}

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
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full border p-4 rounded-xl mb-4"
              />

              

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full border p-4 rounded-xl mb-4"
              />

              <select
  value={department}
  onChange={(e) => setDepartment(e.target.value)}
  className="w-full border border-gray-200 p-4 rounded-xl mb-4 bg-white text-gray-700"
>
  <option value="">Select Department</option>
  <option value="Computer Science and Engineering">
    Computer Science and Engineering (CS)
  </option>
  <option value="Information Science and Engineering">
    Information Science and Engineering (IS)
  </option>
  <option value="Computer Science and Design">
    Computer Science and Design (CD)
  </option>
  <option value="Artificial Intelligence and Machine Learning">
    Artificial Intelligence and Machine Learning (AI)
  </option>
  <option value="Electronics and Communication Engineering">
    Electronics and Communication Engineering (EC)
  </option>
  <option value="Electrical and Electronics Engineering">
    Electrical and Electronics Engineering (EE)
  </option>
  <option value="Mechanical Engineering">
    Mechanical Engineering (ME)
  </option>
  <option value="Civil Engineering">
    Civil Engineering (CV)
  </option>
</select>
              <select
  value={section}
  onChange={(e) => setSection(e.target.value)}
  className="w-full border border-gray-200 p-4 rounded-xl mb-4 bg-white text-gray-700"
>
  <option value="">Select Section</option>
  <option value="A">Section A</option>
  <option value="B">Section B</option>
  <option value="C">Section C</option>
  <option value="D">Section D</option>
  <option value="E">Section E</option>
</select>
              <select
  value={year}
  onChange={(e) => setYear(e.target.value)}
  className="w-full border border-gray-200 p-4 rounded-xl mb-4 bg-white text-gray-700"
>
  <option value="">Select Year of Studying</option>
  <option value="1">1st Year</option>
  <option value="2">2nd Year</option>
  <option value="3">3rd Year</option>
  <option value="4">4th Year</option>
</select>

        <div className="w-full border border-gray-200 rounded-xl mb-4 bg-gray-50 flex items-center overflow-hidden">

  <div className="px-4 py-4 font-semibold text-gray-700 bg-gray-100">
    {generatedUsn || "Select year and department"}
  </div>

  <input
    value={usnNumber}
    onChange={(e) => {
      const value = e.target.value.replace(/\D/g, "")
      setUsnNumber(value)
      setUsn(`${generatedUsn}${value}`)
    }}
    placeholder="Number"
    inputMode="numeric"
    maxLength={3}
    className="flex-1 p-4 bg-transparent outline-none"
  />

</div>


              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="w-full border p-4 rounded-xl mb-4"
              />

              <div className="flex items-start gap-3 mb-6">

  <input
    type="checkbox"
    id="terms"
    className="mt-1 w-4 h-4 accent-primary"
  />

  <label
    htmlFor="terms"
    className="text-sm text-gray-600"
  >
    I have read and agree to the{" "}
    <button
      type="button"
      onClick={() => navigate("/terms")}
      className="text-black font-semibold underline hover:text-primary"
    >
      Terms & Conditions
    </button>
  </label>

</div>

              <button
              onClick={handleRegister}
              disabled={loading}
              className="w-full bg-primary py-4 rounded-xl font-semibold"
                >
              {loading ? (
  <span className="flex items-center justify-center gap-3">
    <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
    Registering...
  </span>
) : (
  "Register"
)}
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