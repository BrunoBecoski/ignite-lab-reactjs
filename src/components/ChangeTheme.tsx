import { useEffect, useState } from 'react';
import { LightbulbFilament, SpinnerGap } from 'phosphor-react';

export function ChangeTheme() {
  const [lightOn, setLightOn] = useState(false);

  function handleChangeTheme() {
    setLightOn(!lightOn);
  }
  
  useEffect(() => {
    if(lightOn) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [lightOn]);

  return (
    <div className="cursor-pointer flex" onClick={handleChangeTheme}>

      {
        lightOn 
        ?
          <div className="flex relative text-lightGray-100 hover:text-lightGray-300">
            <SpinnerGap weight="thin" size={60} className="rotate-[135deg] absolute top-[-16px] left-[-14px]"/>
            <LightbulbFilament size={32} />
          </div>
        :
          <LightbulbFilament size={32}  className="text-darkGray-100 hover:text-darkGray-300"/>
      }
    </div>
  );
}