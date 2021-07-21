import React,{useState} from 'react';
import styles from './App.module.scss'
import Main from './Components/MainContainer/Main/Main';
import NavBar from './Components/NavBar/NavBar';
import RightPannel from './Components/MainContainer/RightPannel/RightPannel'
function App() {
  const [tab,setTab]=useState(0)
  return (
    < >
     <NavBar tab={tab} setTab={setTab}/>
     <div hidden={tab===0?false:true} className={styles['App']}>
     <Main/>
     <RightPannel/>
     </div>
     <div hidden={tab===0?true:false} >
       <img />
     </div>

    </>
  );
}

export default App;
