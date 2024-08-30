// Importing React Packages
import { useState } from "react"

export default function Calculator({morphism}) {
  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")
  const [operator, setOperator] = useState("")
  const [output, setOutput] = useState("")

  const getOutput = (e) => {
    let target = e.target.value;

    if(target === '+'){
      setOperator(target)
    } else if(target === '-'){
      setOperator(target)
    } else if(target === '*'){
      setOperator(target)
    } else if(target === '='){
      if(operator === '+')  setOutput(Number(input1) + Number(input2))
      if(operator === '-')  setOutput(Number(input1) - Number(input2))
      if(operator === '*')  setOutput(Number(input1) * Number(input2))
      if(operator === '/')  setOutput(Number(input1) / Number(input2))

        setInput1("");
        setInput2("");
        setOperator("")
    } else if(target === '/'){
      setOperator(target)
    } else if(operator !== ''){
      setInput2(prev => prev + target)
    } else {
      setOutput("")
      setInput1(prev => prev + target)
    }
  }

  return (
    <div className={`w-[350px] h-[450px] flex flex-col gap-5 items-center justify-center rounded-lg ${morphism.outset}`}>
      <div className={`flex items-end justify-end gap-2 w-[300px] h-[100px] py-2 px-3 rounded-lg ${morphism.inset}`}>
        <span>{
          !input2
            ?<span>{input1} {operator}</span>
            : <span>{input1} {operator} {input2}</span>
        }</span>

        {output && <span>{output}</span>}
      </div>

      <div className="flex gap-5 flex-wrap w-[300px] h-[250px]">
        {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '/', '='].map((e,i) => {
          return(
            <button
              key={i}
              value={e}
              onClick={(e) => getOutput(e)}
              className={`font-semibold text-lg w-12 h-12 flex justify-center items-center rounded-lg ${morphism.outset}
                active:text-blue-400 ${'active:' + morphism.inset}
                `}
            >
              {e}
            </button>
          )
        })}
      </div>
    </div>
  )
}