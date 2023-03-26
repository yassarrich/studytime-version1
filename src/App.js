
import './css/App.css';
import './css/clock.css'
import { Clock } from './components/Clock';
import  Pom from './components/Pom.jsx'
import ToDo from './components/ToDo';
import Footer from './components/Footer'
import Header from './components/Header'

const slides =[
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png"
  ]

const style = {
    bg: `h-full w-screen pb-10 p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
    clock: `flex justify-center`,
    content: `flex flex-row space-x-20 justify-center`,
    box: `max-w-screen-md mx-auto`
}
function App() {
  return (
    <>
    <Header></Header>
    <main className={style.bg}>
      <div className={style.box}>
      <div className={style.clock}>
      <Clock/>
      </div>
      <div className='flex flex-row gap-20 justify-center'>
      <ToDo></ToDo>
      <Pom></Pom>
      </div>
      </div>
    </main>
    <Footer></Footer>
    </>
  );
}

export default App;
