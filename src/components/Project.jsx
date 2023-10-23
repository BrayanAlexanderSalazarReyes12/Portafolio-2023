import CProject from "./CProject";

export default function Project() {
  return (
    <div className="bg-zinc-950 " id="project">
      <p className="text-red-700 uppercase font-bold text-center text-2xl">Projects</p>
      <div className="py-10 grid grid-cols-4">
        <CProject/>
      </div>
    </div>
  )
}
