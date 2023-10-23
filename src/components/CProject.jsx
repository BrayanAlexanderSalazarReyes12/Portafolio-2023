import { useEffect } from "react"
import {mostrarProject as mostrar} from "../Database/Listproject.js"
import { useState } from "react"

export default function CProject() {
    const[project,SetProject] = useState([]);

    useEffect(()=>{
        leer()
    },[])

    const leer = async () =>{
        SetProject(await mostrar());
    }
  return (
    <>
    {
        project?.map(list => (
            <div className="bg-zinc-900 m-10 rounded-xl" key={list.Id}>
                <img src={list.Img} alt="Citas React" width="250px" height="250px" className="ml-7 mt-5 mb-5"/>
                <h1 className="uppercase font-bold text-center text-lg text-white mb-2">{list.Nombre}</h1>
                <h3 className="font-bold text-center text-sm text-white mb-2" >{list.Tecnologia}</h3>
                <h3 className="font-bold text-center text-sm text-white mb-2">{list.Fecha}</h3>
                <h3 className="font-bold text-center text-sm text-white mb-2"><a href={list.codigo}>Ver codigo del projecto</a></h3>
                {list.url ?  <h3 className="font-bold text-center text-sm text-white mb-2"><a href={list.url}>Ver projecto</a></h3>: ''}
            </div>
        ))
    }
    </>
  )
}
