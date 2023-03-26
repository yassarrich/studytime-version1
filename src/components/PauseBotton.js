import {HiPause} from 'react-icons/hi'
function PauseButton(props) {
    return (
      <button {...props}>
        <HiPause className="text-5xl text-gray-800"></HiPause>
      </button>
    );
  }
  
  export default PauseButton;