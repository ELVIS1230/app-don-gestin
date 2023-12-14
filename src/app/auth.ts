
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

// const login = async (credentials:any)=> {
//     try{
//             const authResponse = await fetch("http://127.0.0.1:3000/api/users/login", {
//               method: "POST",
//               headers:{
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify(credentials),
//             })
//             // const authResponse = await axios.post('http://127.0.0.1:3000/api/users/login', credentials)
//             if (!authResponse.ok) {
//               return null
//             }
    
//             const user = authResponse.json()
//             console.log(user)
//             return user
//     }catch(error){
//         console.log(error)
//         throw new Error('Logeo erroneo')
//     }
// }
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  
  providers: [CredentialsProvider({
    async authorize(credentials){
      try {
        // const user = await login(credentials)
        // return user 
        console.log({credentials})
        const authResponse = await axios.post("http://127.0.0.1:3000/api/users/login", credentials, {headers: {'Content-Type': 'application/json'}})
        console.log(authResponse)
              if (!authResponse.data) {
                return undefined
              }
      
              // const user = {id: authResponse.data.u_cedula,
              //               name: authResponse.data.u_nombre,
              //               email: authResponse.data.u_correo            
              //   }
              const user = await authResponse.data
              console.log(user)
              return user
        } catch (error) {
            return console.log(error)
        }
    }
  })],
  
  // trustHost: true,

  
});



