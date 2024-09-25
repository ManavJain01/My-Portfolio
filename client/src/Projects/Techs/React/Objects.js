import VisinaryBot from './Images/visinarybot.png'
import DiceGame from './Images/DiceGame.png'
import foodyZone from './Images/foody zone.png'
import firebase from './Images/firebase contact app.png'
import todoReduxLogo from './Images/todoRedux.png'
import otpAuth from './Images/otp-auth.png'
import crypto from './Images/crypto.png'
import login from './Images/login.png'

export let i = 1;

const object = [
  // {
  //   Link:"ai",
  //   Img: VisinaryBot,
  //   p1:"React Project with Ai Api calls",
  //   p2:"VisinaryBot",
  //   id:`project${i++}`
  // },
  {
    Link:"Dice/FrontPage",
    Img: DiceGame,
    p1:"Simple React Project",
    p2:"Dice Game",
    id:`project${i++}`
  },
  {
    Link:"FoodyZone",
    Img: foodyZone,
    p1:"React Project with Responsive SearchBar",
    p2:"Foody Zone",
    id:`project${i++}`
  },
  {
    Link:"ContactApp",
    Img: firebase,
    p1:"React Project with Firebase",
    p2:"Firebase Contact App",
    id:`project${i++}`
  },
  {
    Link:"Todo-with-redux",
    Img: todoReduxLogo,
    p1:"React Project Implementing Redux",
    p2:"Redux Implementation",
    id:`project${i++}`
  },
  {
    Link:"Otp-Authentication",
    Img: otpAuth,
    // p1:"React Project with Authentication",
    p1:"Otp Input Interaction",
    p2:"Otp Authentication",
    id:`project${i++}`
  },
  // {
  //   Link:"CryptoDashboard",
  //   Img: crypto,
  //   p1:"React Project",
  //   p2:"Crypto Dashboard",
  //   id:`project${i++}`
  // },
  // {
  //   Link:"LoginRegistration",
  //   Img: login,
  //   p1:"React Project",
  //   p2:"Login Registration",
  //   id:`project${i++}`
  // }
]

export default object;