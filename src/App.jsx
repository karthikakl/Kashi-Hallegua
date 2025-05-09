
import hallegua from './assets/hallegua.png'
import art from './assets/art.png'
import './App.css'

function App() {
  

  return (
    <>
    <div className='relative min-h-screen flex flex-col md:flex-row lg:flex-row bg-white text-black overflow-x-hidden'>
      {/* Left section */}
      <div className='md:w-1/2 w-full flex flex-col items-start ml-5 md:ml-32 lg:ml-40 gap-4 mt-10'>
        <img src={art} alt='Kashi Art Galleries' className='md:w-48 md:h-48 w-36 h-36 rounded-full shadow-lg'/>
        <img src={hallegua} alt='Kashi Hallegua House' className='md:w-48 md:h-48 w-36 h-36 object-contain rounded-full shadow-lg'/>
       
        <div className='mt-[20%] ml-8 md:ml-0 lg:ml-4 md:mt-[20%] lg:mt-96   lg:absolute lg:top-32 lg:left-[41%]'>
          <p className='text-center tracking-tight leading-tight text-xs md:text-xl lg:text-lg font-bold md:tracking-widest md:leading-loose  lg:tracking-widest lg:leading-loose md:whitespace-nowrap'>
            WE ARE BUILDING THIS WEBSITE BRICK BY BRICK
          </p>
          <p className='text-xs tracking-tight leading-tight mt-2 md:text-xl lg:text-lg font-bold lg:tracking-widest lg:leading-loose'>
            STAY TUNED FOR UPDATES.
          </p>
        </div>
      </div>

      {/* Vertical line */}
      <div className='absolute bg-black md:left-[70%] lg:left-[42%] left-[85%] w-px h-[50%] top-0 right-0 items-end lg:h-[69%] my-0'></div>

      {/* Right content */}
      <div className='md:w-1/2 w-full p-6'>
        <div>
          <p className='text-right text-xs md:text-sm lg:mt-5 xl:mt-8 lg:text-lg font-bold md:mr-8 lg:mr-10 mr-7 mt-28 mb-16'>
            For enquiries:<br />
            <span className='font-bold text-xs md:text-sm lg:text-lg mt-2'>
              +91 77363 95049
            </span>
          </p>
        </div>
        <div className='text-right  text-xs lg:mr-10 md:mr-8 md:text-sm lg:text-lg mr-7 font-bold mb-8'>
          <p className='mb-6'>Or visit us at :</p>
          <p>
            KASHI Art Cafe, 1/440<br/>
            Burger St, Fort Kochi,<br/>
            Ernakulam, Kerala
          </p>
        </div>
      </div>

      {/* Vertical line on the right side */}
      <div className='absolute bg-black left-[14%] h-[43%] bottom-0 w-px md:h-[40%] lg:h-[26.5%] my-0 lg:left-[74.5%] '></div>

    </div>
    </>
  )
}

export default App
