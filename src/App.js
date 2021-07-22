import React,{useState} from 'react';
import styles from './App.module.scss'
import Main from './Components/MainContainer/Main/Main';
import NavBar from './Components/NavBar/NavBar';
import RightPannel from './Components/MainContainer/RightPannel/RightPannel'
import icon from './Constants/Constants.json'
function App() {
  const [tab,setTab]=useState(0)
  return (
    < >
     <NavBar tab={tab} setTab={setTab}/>
     <div hidden={tab===0?false:true} className={tab===0?styles['App']:""}>
     <Main/>
     <RightPannel/>
     </div>
     <div className={tab!==0?styles['App-hidden']:""} hidden={tab===0?true:false} >
       <p  >NO view was provided</p>
       <div >
       <img src={icon.Icons.cavMan} />
       </div>
     </div>

    </>
  );
}

export default App;
