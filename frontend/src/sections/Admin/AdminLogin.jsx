import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const { data } = await axios.post(
        "https://royal-glow-salon.onrender.com/api/admin/login",
        {
          email,
          password,
        }
      );

      if (data.success) {

        // Save JWT Token
        localStorage.setItem("adminToken", data.token);

        // Save Admin Info
        localStorage.setItem(
          "adminInfo",
          JSON.stringify(data.admin)
        );

        alert("Login Successful ✅");

        navigate("/admin");

      }

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login Failed ❌"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="flex min-h-screen items-center justify-center bg-[#0B0B0B]">

      <form
        onSubmit={submitHandler}
        className="w-[430px] rounded-3xl border border-[#D4AF37]/20 bg-[#111111] p-10 shadow-2xl"
      >

        <h1 className="text-center text-4xl font-bold text-white">

          Royal Glow Admin

        </h1>

        <p className="mt-2 text-center text-gray-400">

          Login to Dashboard

        </p>

        {/* Email */}

        <input

          type="email"

          placeholder="Admin Email"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

          required

          className="mt-10 w-full rounded-xl border border-gray-700 bg-black p-4 text-white outline-none transition focus:border-[#D4AF37]"

        />

        {/* Password */}

        <input

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

          required

          className="mt-5 w-full rounded-xl border border-gray-700 bg-black p-4 text-white outline-none transition focus:border-[#D4AF37]"

        />

        <button

          type="submit"

          disabled={loading}

          className="mt-8 w-full rounded-xl bg-[#D4AF37] p-4 font-bold text-black transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-50"

        >

          {loading ? "Logging In..." : "Login"}

        </button>

      </form>

    </div>

  );

};

export default AdminLogin;