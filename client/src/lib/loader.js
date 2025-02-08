import { defer } from "react-router-dom"
import apiRequest from "./apiRequest"

export const getSeminars = async () => {
    const seminarPromise = await apiRequest("/seminars")
    console.log(seminarPromise)
    return defer({
        seminarResponse: seminarPromise
    })
}