import likedin from "../image/Proyectos/linkedin.png"
import github from "../image/Proyectos/github.png"
import correo from "../image/Proyectos/correo.png"

export default function Footer() {
  return (
    <footer className='bg-zinc-950'>
      <div className="grid grid-cols-2">
        <div className="ml-10 grid grid-cols-mod"> 
          <a href="https://www.linkedin.com/in/brayan-alexander-salazar-reyes"><img src={likedin} alt="linkedin" width="30px" height="30px"/></a>
          <a href="https://github.com/BrayanAlexanderSalazarReyes12" className="ml-0"><img src={github} alt="linkedin" width="30px" height="30px"/></a>
          <a href="mailto:bsalazarreyes88@gmail.com" className="ml-0"><img src={correo} alt="linkedin" width="30px" height="30px"/></a>
        </div>
        <div> <p className="text-white uppercase text-right mr-10">©️ 2023 BASR</p> </div>
      </div>
    </footer>
  )
}
