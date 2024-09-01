import PlayareaMain from './PlayareaMain';
import PlayareaNavBar from './PlayareaNavBar'
import {useState} from 'react';

function Playarea(){
  const [num, setNum] = useState(0);
  const [numSelec, setNumSelec] = useState(0);
  const [show1, setShow1] = useState(false);

  return(
    <>
      <div className="">
        <PlayareaNavBar num={num} setNum={setNum} numSelec={numSelec} setNumSelec={setNumSelec} show1={show1} />
        <div className="w-screen flex justify-center">
          <PlayareaMain num={num} setNum={setNum} show1={show1} setShow1={setShow1} numSelec={numSelec} setNumSelec={setNumSelec} />
        </div>
      </div>
    </>
  )
}

export default Playarea;