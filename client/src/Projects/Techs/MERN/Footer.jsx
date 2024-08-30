import github from './Images/github-mark.png'
import instagram from './Images/instagram.png'
import linkedin from './Images/linkedin.png'

function Footer(){
  return(
    <div className="min-h-[20vh]">
      <nav className="relative flex justify-around flex-wrap gap-7 py-5">
        <ul className="p-5 rounded-2xl shadow-reverse_clayMorphism">
          <h1 className="text-3xl">Manav Jain</h1>
          <li>A FullStack Developer</li>
          <li className="text-2xl pt-3"><a href='https://manavjain-portfolio.vercel.app/'>My Portfolio</a></li>
        </ul>

        <ul className="flex flex-col space-y-2 p-5 rounded-2xl shadow-reverse_clayMorphism">
          <li className="text-2xl border-b-2">Projects</li>
          <li><a href="https://manavjain01.github.io/My-Mini-Projects/MainFile/">HTML/CSS/JS Projects</a></li>
          <li><a href="https://manavjain01.github.io/MachineLearning/MainFile/#">ML Projects</a></li>
          <li><a href="https://more-projects-page.vercel.app/">More Projects</a></li>
        </ul>

        <ul className="flex flex-col items-center p-5 rounded-2xl shadow-reverse_clayMorphism">
          <li className="text-2xl border-b-2">Let's be social</li>
          <li className="flex space-x-2 pt-3">
            <a href="https://github.com/ManavJain01"><img src={github} className="w-7" /></a>
            <a href="https://www.instagram.com/manv_jain/"><img src={instagram} className="w-7" /></a>
            <a href="https://www.linkedin.com/in/manav-jain-02a54824a/"><img src={linkedin} className="w-7" /></a>
          </li>
        </ul>

        <img src="https://www.pngall.com/wp-content/uploads/15/Baymax-PNG-Pic.png" alt="gif" className="hidden md:block w-32 absolute bottom-0 right-0" />
      </nav>
    </div>
  )
}

export default Footer;