"use server"
import { Modal } from 'antd';
import axios from 'axios';
import { cookies } from 'next/headers'

export async function login(email: string, password: string) {
  try {
    const {data} = await axios.post(
      "http://localhost:3000/api/users/login",
      { email, password }
    ) as any
    cookies().set('authorization', data.token, { 
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7 // 1 semana
    })
    console.log(data)
    return data 
  } catch (error: any) {
    const message = error.response?.data?.message;
    console.log(error)
    // Modal.error({
    //   title: "Hubo un error",
    //   content: message ? message : "Ocurrió un error",
    // });
  }
}