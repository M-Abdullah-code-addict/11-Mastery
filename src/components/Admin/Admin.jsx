import axios from "axios"
import { useState } from "react"
import { materials, backend_url } from "../../constants"
import { toast } from "react-hot-toast"

function Admin() {

    const [file, setFile] = useState(null)
    const [subject, setSubject] = useState(materials[0].route)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append("file", file)
        formData.append("subject", subject)
        formData.append("name", name)
        formData.append("password", password)

        try {

            const response = await axios.post(
                `${backend_url}/upload_pdf`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            )

            toast.success(response.data.message)
            

        } catch (error) {
            toast.error(String(error))
        }
    }

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-10">

    <div className="w-full max-w-lg bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-orange-500/10">

        {/* Heading */}
        <div className="text-center mb-8">

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Welcome Naveed Khan 👋
            </h2>

            <p className="text-gray-400 mt-3 text-sm sm:text-base">
                Upload study materials and PDFs for students
            </p>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* File Upload */}
            <div className="flex flex-col gap-2">

                <label className="text-sm text-gray-300">
                    Select PDF File
                </label>

                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white file:bg-orange-500 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-lg file:cursor-pointer hover:border-orange-400 transition-all duration-300"
                />

            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">

                <label className="text-sm text-gray-300">
                    Select Subject
                </label>

                <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-400 transition-all duration-300"
                >

                    {materials.map((item) => (
                        <option
                            key={item.id}
                            value={item.route}
                            className="bg-slate-900"
                        >
                            {item.text}
                        </option>
                    ))}

                </select>

            </div>

            {/* Username */}
            <div className="flex flex-col gap-2">

                <label className="text-sm text-gray-300">
                    Admin Username
                </label>

                <input
                    type="text"
                    placeholder="Enter username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-orange-400 transition-all duration-300"
                />

            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">

                <label className="text-sm text-gray-300">
                    Admin Password
                </label>

                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-orange-400 transition-all duration-300"
                />

            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="mt-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-500/20"
            >
                Upload PDF 🚀
            </button>

        </form>

    </div>

</div>
    )
}

export default Admin