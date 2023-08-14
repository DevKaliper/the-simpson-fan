import axios from "axios"

export const getCharacter = async ()=>{
    //Realizo la solicitud a la api
    try {
        const request = await axios.get("https://apisimpsons.fly.dev/api/personajes?limit=20")
        const data = request.data.docs
        //regreso los datos
        return data
    } catch (error) {
        console.log(error)
        
    }
}

