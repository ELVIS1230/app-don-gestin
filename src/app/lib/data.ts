export const UserApi = {
    valor: {}
}
export async function GetAllCards(){

    try{
    
        const credentialUser = UserApi.valor
        console.log(credentialUser)
        // const credentialUserString = sessionStorage.getItem('usuario');
        
        // if (credentialUserString !== null) {
        //     const credentialUser = JSON.parse(credentialUserString);
        //     // console.log(credentialUser)
        //     return credentialUser
        // }
        // const credentialUser = JSON.parse(sessionStorage.getItem('usuario'))
        // // console.log(credentialUser)
        return credentialUser
    }catch(error){
        console.log(error)
    }
}   