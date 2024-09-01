import Button from './Button';
import ShowRules from './ShowRules';
import { useState } from 'react'

function PlayareaMain(props) {
  const [show2, setShow2] = useState(false)
  const [image, setImage] = useState(1);

  let randomNumber;
  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function showRules() {
    setShow2(true);
  }

  function checkNumSelected() {
    if (props.numSelec !== 0) props.setShow1(false)
    else if (props.numSelec === 0) props.setShow1(true)
  }

  function resetScore() {
    props.setNum(0)
    props.setShow1(false)
    setShow2(false)
    setImage(1);
  }

  function gameStart() {
    checkNumSelected()

    if (!props.show1) {
      props.setShow1(true);
      setShow2(true);
    }

    if (props.numSelec !== 0) {
      randomNumber = random(1, 7);
      setImage(randomNumber);
      setTimeout(winningStatus,1000);
      gameRestart();
    }
  }

  function winningStatus(){
    if (props.numSelec === randomNumber) {
      alert(`The Dice Chooses ${randomNumber}\n
      And You Choose ${props.numSelec}\n
      You Won 3 Points`);
      props.setNum((props.num + 3))
    }
    else {
      alert(`The Dice Chooses ${randomNumber}\n
      And You Choose ${props.numSelec}\n
      You lose 2 Points`);
      props.setNum(props.num - 2)
    }
  }

  function gameRestart() {
    props.setNumSelec(0);
    props.setShow1(false)
    setShow2(false)
  }

  return (
    <div className="flex justify-end">
      <div className="mt-1 sm:mt-10 flex flex-col items-center">
        <button onClick={()=>{gameStart()}}>
          <img src={`../Images/dice_${image}.png`} alt='dice_faces' className="object-contain w-10 sm:w-56 mt-16 sm:mt-0" />
        </button>
        <span className="my-2 font-semibold text-lg sm:text-2xl">Click on Dice to roll</span>
        <Button text={"Reset Score"} square={'reset'} functionS={resetScore} />
        <Button text={"Show Rules"} functionS={showRules} className={"px-11 sm:px-16"} />
        {show2 && <ShowRules />}
      </div>


    </div>

  )
}

export default PlayareaMain;