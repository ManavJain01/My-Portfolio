import { useEffect } from "react";

export default function CheckBox({ checked = false, effects, morphism, setChecked, setEffects, setMorphism }) {
  const initialMorphism = {
    outset: 'shadow-neuMorphism',
    inset: 'shadow-inset_neuMorphism',
    full_inset: 'shadow-fullInset_neuMorphism',
    clock: 'shadow-clock',
  };

  useEffect(() => {
    if (!checked) {
      setMorphism(initialMorphism);
      setEffects('');
    }
  }, [checked, setMorphism, setEffects]);



  const handleButtonClick = () => {
    setChecked(!checked);
    setMorphism(
      effects === '' || effects === 'grey' 
        ? { outset: 'shadow-neuMorphism', inset: 'shadow-inset_neuMorphism', full_inset: 'shadow-fullInset_neuMorphism', clock: 'shadow-clock' }
        : { outset: 'shadow-dark_neuMorphism', inset: 'shadow-dark_inset_neuMorphism', full_inset: 'shadow-dark_fullInset_neuMorphism', clock: 'shadow-dark_clock' }
    );

  };

  const handleEffectChange = (effect, morphismClasses) => {
    if (checked) {
      setMorphism(morphismClasses);
    }
    setEffects(effect);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className={`flex gap-5 items-center w-[300px] h-[100px] p-5 rounded-lg ${morphism.outset}`}>
        <button
          onClick={handleButtonClick}
          className={`relative w-28 h-12 rounded-full ${morphism.full_inset}`}
        >
          <div className={`relative top-[2px] w-10 h-10 rounded-full ${morphism.outset} duration-500 ${checked ? "left-[74px] bg-[#dde1e7]" : "left-[1px] bg-[#ecf0f3]"}`}></div>
        </button>

        <span className={`text-xl font-semibold tracking-widest ${checked ? "text-blue-400" : "text-black"} duration-500`}>
          {checked ? "Checked" : "Unchecked"}
        </span>
      </div>

      <div className={`flex gap-5 justify-around items-center w-[300px] h-[70px] p-5 rounded-lg ${morphism.outset}`}>
        <span className="font-semibold tracking-widest text-2xl">Effects:</span>

        <div className="flex gap-5">
          <button
            onClick={() => handleEffectChange("black", { outset: 'shadow-dark_neuMorphism', inset: 'shadow-dark_inset_neuMorphism', full_inset: 'shadow-dark_fullInset_neuMorphism', clock: 'shadow-dark_clock' })}
            className={`bg-[#131419] w-10 h-10 rounded-full ${effects === 'black' ? morphism.full_inset : morphism.outset}`} 
          />

          <button
            onClick={() => handleEffectChange("grey", { outset: 'shadow-neuMorphism', inset: 'shadow-inset_neuMorphism', full_inset: 'shadow-fullInset_neuMorphism', clock: 'shadow-clock' })}
            className={`bg-[#dde1e7] w-10 h-10 rounded-full ${effects === 'grey' ? morphism.full_inset : morphism.outset}`} 
          />
        </div>
      </div>
    </div>
  );
}