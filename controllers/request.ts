import axios from "axios"

export const getCharacter = async (page:number=1)=>{//Page es el numero de pagina que se quiere consultar. Por defecto es 1 (la primera pagina)


    //Realizo la solicitud a la api
    try {
        const request = await axios.get("https://apisimpsons.fly.dev/api/personajes?limit=20&page="+page)
        const data = request.data.docs
        //regreso los datos
        return data
    } catch (error) {
        console.log(error)
        
    }
}

export const getQuote = async() => {
    try {
        const request = await axios.get("https://thesimpsonsquoteapi.glitch.me/quotes")
        const data =  request.data
        return data[0]
    } catch (error) {
        console.log(error)
    }
}

