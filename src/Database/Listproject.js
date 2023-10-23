export const mostrarProject = async () =>{
    const res = await fetch("src/database/bd.json")
    const result = await res.json()
    return result
}