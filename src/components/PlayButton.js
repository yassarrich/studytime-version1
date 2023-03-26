import {HiPlay} from 'react-icons/hi'

function PlayButton(props) {
    return (
      <button {...props} >
        <HiPlay className="text-5xl text-gray-800"></HiPlay>
      </button>
    );
  }
  
  export default PlayButton;