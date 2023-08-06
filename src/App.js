import { Box } from '@mui/system';
import './App.css';
import {useState} from "react"
import DigitContainer from './components/DigitContainer';

function App() {

  const futureTime = new Date().getSeconds + 10
  const [seconds,setSeconds] = useState()
  const [minutes,setMinutes] = useState()
  const [hours,setHours] = useState()

  return (
    <Box width={"100vw"} height={"100vh"} display={"flex"} 
      justifyContent={"center"} alignItems={"center"}>
      <Box display={"flex"} width={"50%"} height={"50%"} justifyContent={"center"} alignItems={"center"}>
        <DigitContainer colon time={hours} position={"H"}></DigitContainer>
        <DigitContainer colon time={minutes} position={"M"}></DigitContainer>
        <DigitContainer future={futureTime}
         setTime={setSeconds} time={seconds} position={"S"}></DigitContainer>
      </Box>
    </Box>
  );
}

export default App;
