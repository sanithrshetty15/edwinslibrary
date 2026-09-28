import { useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import api from "../services/api"

function AdminPage() {
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [otpSent, setOtpSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSendOtp = async () => {
    if (!email.trim()) {
      toast.error("Admin email is required")
      return
    }

    try {
      setLoading(true)

      await api.post("/admin/send-otp", {
        email,
      })

      setOtpSent(true)
      toast.success("OTP sent to your email")
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Failed to send OTP"
      )
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOtp = async () => {
    if (!otp.trim()) {
      toast.error("OTP is required")
      return
    }

    try {
      setLoading(true)

      const res = await api.post("/admin/verify-otp", {
        email,
        otp,
      })

      localStorage.setItem("adminToken", res.data.token)

      toast.success("Admin login successful")

      navigate("/admin/dashboard")
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Invalid OTP"
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold">
            Edwin's Library
          </h1>

          <p className="mt-3 text-white/60">
            Administrator Access
          </p>

        </div>

        <div className="bg-white text-black rounded-3xl p-8 shadow-2xl">

          <h2 className="text-2xl font-bold mb-6">
            Admin Login
          </h2>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Admin Email"
            disabled={otpSent}
            className="w-full border border-gray-200 p-4 rounded-xl mb-4 outline-none"
          />

          {!otpSent ? (
            <button
              onClick={handleSendOtp}
              disabled={loading}
              className="w-full bg-primary py-4 rounded-xl font-semibold"
            >
              {loading ? "Sending OTP..." : "SEND OTP"}
            </button>
          ) : (
            <>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full border border-gray-200 p-4 rounded-xl mb-4 outline-none"
              />

              <button
                onClick={handleVerifyOtp}
                disabled={loading}
                className="w-full bg-primary py-4 rounded-xl font-semibold"
              >
                {loading ? "Verifying..." : "VERIFY OTP"}
              </button>
            </>
          )}

          <button
            onClick={() => navigate("/")}
            className="w-full mt-4 py-3 text-sm text-gray-500"
          >
            Back to Home
          </button>

        </div>

      </div>

    </div>
  )
}

export default AdminPage