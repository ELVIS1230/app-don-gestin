"use server"
import { signIn } from "@/app/auth"
export const authenticate = async (formData:any) => {
    const {email , password} = Object.fromEntries(formData)
    try {
        await signIn('credentials', {email, password})
    } catch (error) {
        console.log(error)
        throw error
    }
}