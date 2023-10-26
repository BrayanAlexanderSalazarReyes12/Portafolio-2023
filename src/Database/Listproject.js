export const mostrarProject = async () =>{
    const res = await fetch("https://db-portafolio.onrender.com/Project")
    const result = await res.json()
    return result
}
