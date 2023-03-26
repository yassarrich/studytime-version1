import {HiOutlineCog} from 'react-icons/hi';
function SettingsButton(props) {
    return (
      <button {...props} className='text-lg text-gray-800 bg-white bg-opacity-50 rounded-2xl px-5 py-2 leading-6'>
        <HiOutlineCog className="inline-block mr-2"></HiOutlineCog>
        Settings
      </button>
    );
  }
  
  export default SettingsButton;