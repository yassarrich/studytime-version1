import { HiArrowCircleLeft } from "react-icons/hi";
function BackButton(props) {
    return (
      <button {...props} className='text-lg text-gray-800 bg-white bg-opacity-50 rounded-2xl px-5 py-2 leading-6'>
        <HiArrowCircleLeft className="inline-block mr-2"/>
        Back
      </button>
    );
  }
  
  export default BackButton;