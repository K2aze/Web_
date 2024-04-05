import { useState } from 'react';

// import images
import logo from './assets/left_bar/logo.png'
import pre from './assets/left_bar/pre.png'
import file from './assets/left_bar/file_tree.png'
import statistic from './assets/left_bar/statistic.png'
import save from './assets/left_bar/save.png'
import overview from './assets/left_bar/overview.png'
import darkmode from './assets/left_bar/dm.png'
import lightmode from './assets/left_bar/lm.png'
import quickCreate from './assets/left_bar/quick.png'

function Left_bar() {
  // CSS
  const imageCss = 'w-10 h-10'
  const [isOn, setIsOn] = useState(false);
  const handdleToggle = () => {
    setIsOn(prevState => !prevState)
  }
  const toggle_sw = () => {
    return (
      <div onClick={handdleToggle} className={imageCss}>
  
          {isOn ? <img src={darkmode} alt="Switch to light mode" /> : <img src={lightmode} alt="Switch to dark mode" />}
          

      </div>
    )
  }
  return ( 
    <nav className=' bg-white w-20 h-dvh grid justify-center content-between'>
      
      {/* Logo position */}
    <div className=' mt-8'>
      <img src={logo} alt="Todo List" className={imageCss} />
    </div>
    <div className='grid gap-y-8'>
      <img src={pre} alt="Premium" className={imageCss}/>
      <img src={file} alt="File" className={imageCss}/>
      <img src={statistic} alt="Statistic" className={imageCss}/>
      <img src={save} alt="Save" className={imageCss}/>
      <img src={overview} alt="Overview" className={imageCss}/>
    </div>
    <div className=' mb-8 grid gap-6'>
      <div>
        {toggle_sw()}
      </div>
      <div>
        <img src={quickCreate} alt="#" className={imageCss}/>
      </div>
      
    </div>
    </nav>
   );
}

export default Left_bar
