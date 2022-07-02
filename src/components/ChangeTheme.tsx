import { useEffect, useState } from 'react';
import { LightbulbFilament } from 'phosphor-react';
import classNames from 'classnames';

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
    <div className="absolute top-5 left-5 cursor-pointer flex" onClick={handleChangeTheme}>
      <LightbulbFilament className={classNames({
          'text-orange-500': lightOn,
          'text-white': !lightOn,
      })} size={42} />
    </div>
  );
}