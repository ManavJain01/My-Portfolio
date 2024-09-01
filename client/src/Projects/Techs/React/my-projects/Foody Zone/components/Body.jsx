// import { createGlobalStyle } from "styled-components"
import {useState} from 'react'

import {object} from './Objects'

import Header from './Header'
import Main from './Main'
import './Main.css';

// const GlobalStyle = createGlobalStyle`
//  *{
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//  }

// `

function Body(){
  const [data, setData] = useState(object);
  const [filteredData , setFilteredData] = useState(object);
  const [selectedBtn, setSelectedBtn] = useState("all");

  return(
    <>
      <div id="mainDiv" className="overflow-x-scroll">
        <Header data={data} setData={setData} filteredData={filteredData} setFilteredData={setFilteredData} setSelectedBtn={setSelectedBtn} />
        <Main data={filteredData} />
      </div>
    </>
  )
}

export default Body;