export const UserApi = {
    valor: {}
}
export async function GetAllCards(){

    try{
    
        const credentialUser = UserApi.valor
        console.log(credentialUser)
        // const credentialUserString = sessionStorage.getItem('user');
        
        // if (credentialUserString !== null) {
        //     const credentialUser = JSON.parse(credentialUserString);
        //     // console.log(credentialUser)
        //     return credentialUser
        // }
        // const credentialUser = JSON.parse(sessionStorage.getItem('user'))
        // // console.log(credentialUser)
        return credentialUser
    }catch(error){
        console.log(error)
    }
}   