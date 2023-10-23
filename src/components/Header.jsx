export default function Header() {
  return (
    <header className='fixed top-0 p-5 flex md:flex-row flex-col justify-between items-center bg-black header text-2xl'>
      <h1 className='text-white logo_inic'>Logo</h1>
      <nav className='flex flex-row justify-end items-center contendor'>
        <div>
          <a href="#" className='text-white m-4 '>Home</a>
          <a href="#about" className='text-white m-4 '>About</a>
          <a href="#skills" className='text-white m-4 '>Skills</a>
          <a href="#project" className='text-white m-4 '>Projects</a>
        </div>
      </nav>
    </header>
  )
}
