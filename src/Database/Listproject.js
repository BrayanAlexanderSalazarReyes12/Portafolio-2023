export const mostrarProject = async () =>{
    const res = await fetch("../database/bd.json")
    const result = await res.json()
    return result
}