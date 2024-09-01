// import {object} from './Objects'

import styled from "styled-components";

function Main({data}){

  return(
    <>
      <div id="parentDiv" className="h-[80vh] text-white">
        <FoodContainer className="flex flex-wrap justify-center items-center space-x-8 space-y-8" >
          {
            data.map((value) => (
              <div key={value.name} id={value.name} className="flex w-[25rem] h-[12rem] min-w-[25rem] border-2 border-white rounded-3xl backdrop-blur-lg">
                <section className="py-2">
                  <img src={value.image} alt="food" className="w-[28rem] min-w-[11rem]"></img>
                </section>

                <section className="relative py-3 px-2">
                  <h1 className="font-bold text-xl">{value.name}</h1>
                  <p className="text-sm">{value.text}</p>

                  <p className="absolute bottom-3 right-8 px-3 py-1 rounded-lg bg-red-600">${value.price.toFixed(2)}</p>
                </section>
              </div>
            ))
          }
        </FoodContainer>
      </div>
    </>
  )
}

export default Main;

const FoodContainer = styled.div`
  div:first-child {
    margin-top: 30px;
    margin-left: 35px;
  }

  //  div[id="Boiled Egg"]{
  //   margin-top: 30px;
  //   margin-left: 35px;
  //  }
  `