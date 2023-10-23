export const mostrarProject = async () =>{
    const res = await fetch("https://my-json-server.typicode.com/BrayanAlexanderSalazarReyes12/DB-Portafolio/Project")
    const result = await res.json()
    return result
}