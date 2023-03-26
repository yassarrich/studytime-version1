import '../css/App.css';
import Timer from "./Timer";
import Settings from "./Settings";
import {useState} from "react";
import SettingsContext from "./SettingsContext";

const style = {
  bg: `bg-slate-200 max-w-[500px] m-auto rounded-md shadow-xl pb-4`,
  heading: `text-3xl font-bold text-center text-gray-800 pt-2 pb-3 mx-10`
}

export default function Pom() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  return (
    <div className={style.bg}>
    <div className='py-4 max-w-2xl mx-auto text-center'>
    <h3 className={style.heading}>Pomodoro Timer</h3>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider> 
    </div>
  </div>
  );
}
