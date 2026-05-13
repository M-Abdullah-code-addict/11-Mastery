import axios from "axios"
import { backend_url } from "../constants"

const getAllPdfs = async (subject) => {
    try {
        const response = await axios.get(
            `${backend_url}/get_pdfs/${subject}`
        )

        return response.data

    } catch (err) {
        console.log(err)
        return []
    }
}

export { getAllPdfs };