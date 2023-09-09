import React, {useState} from "react";
import { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import ChartComponent from "./components/ChartComponent";
import Calendar from "./components/Calender";

function App() {

  // const [connection, setConnection] = useState<string>('');

  // const connectionTest =() => {
  //   axios.get('/').then((response) => {
  //     setConnection(response.data);
  //   }).catch((error)=>{
  //     setConnection(error.message)
  //   })
  // }

  // //특정한 상태가 변하면 useEffect내의 블럭이 실행됨
  // useEffect(()=>{
  //     connectionTest();

  // }, []);//[]를 비워놓으면 한번만 실행됨.
  
  //<img src={logo} className="App-logo" alt="logo" />

  return (
    <><div style={{ width: '80%', padding: '20%' }}>
      <ChartComponent />
    </div>
    <div>
        <Calendar />
    </div>
    </>
  );
}

export default App;

