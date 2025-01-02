// Importing Images
import UsersInfo from './Images/Users Info.png'
import StudentDetails from './Images/Student Details.png';
import Dismefa from './Images/Dismefa.png'
import Adminify from '../../Home Page/images/First Page/Dashboard.png'
import FoodDelivery from './Images/Food Delivery App.png'
import webStreaming from './Images/webStreaming.png'

export let i = 1;

const object = [
  //Major Projects
  {
    Link: "https://e-commerce-mauve-phi.vercel.app/",
    Img: Dismefa,
    p1:"My Major MERN Project",
    p2:"Dismefa Medicos",
    id:`project${i++}`,
    flip: {
      p1: "This is my Major Project in MERN Stack which is a Medicine E-Commerce Application",
      Link: "https://dismefa.netlify.app/",
      p2: "My Static/FrontEnd Website Link -->"
    }
  },
  {
    Link: "https://github.com/ManavJain01/Adminify",
    Img: Adminify,
    p1:"My Major MERN Project",
    p2:"Adminify",
    id:`project${i++}`,
    flip: {
      p1: "This is my Major Project in MERN Stack which is a Company Management Application",
    }
  },
  {
    Link:"https://food-delivery-app-phi-ten.vercel.app/",
    Img: FoodDelivery,
    p1:"MERN Project with Tailwind, Jwt",
    p2:"BestFood",
    id:`project${i++}`,
    flip: {
      p1: "This is a Food Ordering Application"
    }
  },
  {
    Link:"https://webstreaming.netlify.app/",
    Img: webStreaming,
    p1:"My Major MERN Project",
    p2:"Web Streaming",
    id:`project${i++}`,
    flip: {
      p1: "This is The Clone of Netflix"
    }
  },
  //Minor Projects
  {
    Link:"UsersInfo",
    Img: UsersInfo,
    p1:"MERN Project with CRUD Operations",
    p2:"User Information",
    id:`project${i++}`,
    flip: {
      p1: "This is a minor project which is a user information application where we can perform crud operations."
    }
  },
  {
    Link:"StudentDetails",
    Img: StudentDetails,
    p1:"MERN Project with Search functionality",
    p2:"Student Details",
    id:`project${i++}`,
    flip: {
      p1: "This is a minor project which displaying a Search Functionality to find student information whom are stored in the database"
    }
  },
]

export default object;