// Importing Carousel Packages
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Import Images
import Flappy from './images/Second Page/Flappy.png'
import WeatherApp from './images/Second Page/WeatherApp.png'
import TicTacToe from './images/Second Page/TicTacToe.png'
import ToDo from './images/Second Page/ToDo.png'
import ColorFlipper from './images/Second Page/ColorFlipper.png'
import ImageGallery from './images/Second Page/ImageGallery.png'

import DiceGame from './images/Second Page/DiceGame.png'
import FoodyZone from './images/Second Page/foody zone.png'
import Firebase from './images/Second Page/firebase contact app.png'

// Importing React Packages
import { Link } from 'react-router-dom'

// Importing local files
import data from "@/Data/api.json"

export default function Index() {
  // Carousel Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3
  }

  const vanillaProjects = [
    {
      project: "Flappy Bird",
      img: Flappy,
      link: "https://manavjain01.github.io/My-Mini-Projects/my-projects/JavaScript/Flappy%20Bird/index.html"
    },
    {
      project: "Weather App",
      img: WeatherApp,
      link: "https://manavjain01.github.io/My-Mini-Projects/my-projects/JavaScript/Weather%20App/weatherApp.html"
    },
    {
      project: "Tic-Tac-Toe",
      img: TicTacToe,
      link: "https://manavjain01.github.io/My-Mini-Projects/my-projects/JavaScript/Tic-Tac-Toe/Tic-Tac_Toe.html"
    },
    {
      project: "To-Do List",
      img: ToDo,
      link: "https://manavjain01.github.io/My-Mini-Projects/my-projects/JavaScript/To-Do%20List/index.html"
    },
    {
      project: "Color Flipper",
      img: ColorFlipper,
      link: "https://manavjain01.github.io/My-Mini-Projects/my-projects/JavaScript/Color-Flipper/colorFlipper.html"
    },
    {
      project: "Image Gallery",
      img: ImageGallery,
      link: "https://manavjain01.github.io/My-Mini-Projects/my-projects/CSS/Image%20Gallery/gallery.html"
    }
  ]

  const reactProjects = [
    {
      project: "Dice Game",
      img: DiceGame,
      link: "https://manavjain01.github.io/My-React-Projects/#/FrontPage"
    },
    {
      project: "Foody Zone",
      img: FoodyZone,
      link: "https://manavjain01.github.io/My-React-Projects/#/FoodyZone"
    },
    {
      project: "Firebase Contact App",
      img: Firebase,
      link: "https://manavjain01.github.io/My-React-Projects/#/ContactApp"
    },
  ]

  return (
    <div className="relative h-lvh overflow-x-hidden">
      <div className="absolute top-0 left-0 bg-gradient-to-b from-[#f1f4f9] to-[#dff1ff] blur-[150px] h-lvh w-lvw flex flex-col justify-between">
        <div className="bg-yellow-300 w-[80vw] h-[40vh] mx-auto">
          <div className="bg-red-800 w-1/2 h-full mx-auto" />
        </div> 

        <div className="bg-blue-400 w-[90vw] h-[50vh] mx-auto" />
      </div>

      <div className="relative flex flex-col gap-10 p-12">
        <div className="flex flex-col gap-10">
          <Link to={data.projects["Vanilla Projects"].link} className="font-bold text-5xl w-fit hover:text-blue-900">Vanilla Projects</Link>

          {/* Carousal */}
          <Slider {...settings}>
            {
              vanillaProjects.map((e, i) =>{
                return(
                  <a key={i} href={e.link} className="bg-[#ffffff1a] text-xl text-center h-[14rem] border-2 border-[#ffffff80] border-b-[#ffffff33] border-r-[#ffffff33] rounded-md">
                    <img src={e.img} alt={e.project} className="h-48 w-full" />
                    <span>{e.project}</span>                    
                  </a>
                )
              })
            }
          </Slider>
        </div>

        <div className="flex flex-col gap-10">
          <Link to={data.projects["Reactjs Projects"].link} className="font-bold text-5xl w-fit hover:text-blue-900">React Projects</Link>
        
          {/* Carousal */}
          <Slider {...settings}>
            {
              reactProjects.map((e, i) =>{
                return(
                  <a key={i} href={e.link} className="bg-[#ffffff1a] text-xl text-center h-[14rem] border-2 border-[#ffffff80] border-b-[#ffffff33] border-r-[#ffffff33] rounded-md">
                    <img src={e.img} alt={e.project} className="h-48 w-full" />
                    <span>{e.project}</span>                    
                  </a>
                )
              })
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}