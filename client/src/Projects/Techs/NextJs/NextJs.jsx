// Importing local files
import data from '../../../Data/api.json';
import DetailCard from './DetailCard';
import Clock from './Clock';
import Calculator from './Calculator';
import CheckBox from './CheckBox';

// Importing React Packages
import { useState } from 'react';

const NextJs = () => {
  const [checked, setChecked] = useState(false);
  const [effects, setEffects] = useState('');
  const [morphism, setMorphism] = useState({
    outset: 'shadow-neuMorphism',
    inset: 'shadow-inset_neuMorphism',
    full_inset: 'shadow-fullInset_neuMorphism',
    clock: 'shadow-clock'
  })

  const handleBgColor = () => {
    if (checked) {
      if (effects === 'grey') return 'bg-[#dde1e7]';
      if (effects === 'black') return 'bg-[#131419] text-[#8c8c8c]';
    }
    return 'bg-[#ecf0f3]';
  };

  return (
    <div className={`${handleBgColor()} flex flex-col gap-10 w-lvw min-h-lvh px-10 py-5 duration-1000`}>
      <div className="flex justify-between gap-5 flex-wrap">
        {/* My Personal Information */}
        <DetailCard morphism={morphism} />

        {/* HeadLine */}
        <div className="flex flex-col gap-5">
          <span className={`font-bold text-4xl h-fit w-fit px-5 py-2 rounded-lg ${morphism.outset} ${'hover:' + morphism.full_inset}`}>Next Js Projects</span>
          
          <CheckBox
            checked={checked}
            setChecked={setChecked}
            effects={effects}
            setEffects={setEffects}
            morphism={morphism}
            setMorphism={setMorphism}
          />
        </div>

        {/* Clock */}
        <Clock morphism={morphism} />
      </div>

      {/* My Projects */}
      <div className="flex flex-wrap gap-10">
        {data.projects['Next Js Projects'].projects.map((project, index) => (
          <div key={index} className={`flex flex-col items-center gap-3 w-[350px] h-[400px] py-2 px-5 rounded-lg ${morphism.outset}`}>
            <span className="font-bold text-4xl">Project {index + 1}</span>
            
            <div className={`flex items-center justify-center w-[300px] py-2 rounded-lg ${morphism.outset} ${'hover:' + morphism.inset}`}>
              <img src={project.img} alt={`project-${index}`} className="w-[280px] rounded-lg" />
            </div>

            <div className={`flex flex-col gap-5 px-5 py-2 rounded-lg ${morphism.outset} ${'hover:' + morphism.full_inset}`}>
              <span className="font-bold text-2xl">{project.project}</span>
              <p className='text-blue-700 text-sm'>{project.p1}</p>
            </div>
          </div>
        ))}

        <Calculator morphism={morphism} />
      </div>
    </div>
  );
}

export default NextJs;