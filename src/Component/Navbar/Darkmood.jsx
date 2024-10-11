import React from 'react';
import LightButton from '../../assets/Mood/light-mode.png'
import DarkButton from '../../assets/Mood/dark-mode.png'
const Darkmood = () => {

  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme')
    :'light'
  );

  const element = document.documentElement; // access to html element
  

// set them to localstorage and html element
React.useEffect(() =>{
 localStorage.setItem('theme', theme);
 if (theme == 'dark') {
  element.classList.add('dark');
  element.classList.add('dark');
 } else {
  element.classList.remove('light');
  element.classList.remove('dark');
 }
});

  return (
    <div className='relative'>
      <img 
      onClick={() => setTheme(theme == 'dark' ? 'light' : 
        'dark' )}
      src={LightButton}
       alt=""
        className={`w-12 cursor-pointer absolute right-0 z-10 ${
      theme == 'dark' ? 'opacity-0' : 'opacity-100'} transition-all duration-30`}
       />
         <img 
         onClick={() => setTheme(theme == 'dark' ? 'ligth' : 
          'dark' )}
      src={DarkButton}
       alt=""
        className={`w-12 cursor-pointer `}
       />
    </div>
  );
};

export default Darkmood