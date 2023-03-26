import ReactSlider from 'react-slider';
import SettingsContext from "./SettingsContext";
import {useContext} from "react";
import BackButton from "./BackButton";

function Settings() {
  const settingsInfo = useContext(SettingsContext);
  return(
    <div className='m-5'>
    <div style={{textAlign:'left'}}>
      <label>work: {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className='h-11 border-2 border-purple-500 rounded-3xl'
        thumbClassName='bg-purple-500 cursor-pointer w-10 h-10 rounded-full'
        trackClassName={'track'}
        value={settingsInfo.workMinutes}
        onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>break: {settingsInfo.breakMinutes}:00</label>
      <ReactSlider
        className='h-11 border-2 border-green-400 rounded-3xl'
        thumbClassName='bg-green-400 cursor-pointer w-10 h-10 rounded-full'
        trackClassName={'track'}
        value={settingsInfo.breakMinutes}
        onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div style={{textAlign:'center', marginTop:'20px'}}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
      </div>
    </div>

  );
}

export default Settings;