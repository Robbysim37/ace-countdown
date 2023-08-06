import { Typography } from "@mui/material"
import { useEffect} from "react"

const DigitContainer = (props) => {

    useEffect(() => {
        setInterval(() => {
            const date = new Date().getSeconds();
            props.setTime(props.future - date)
        },1000)
    },[props.time])

  return (
    <>
        <Typography fontSize={"3rem"}>{props.time}</Typography>
        {props.colon && <Typography fontSize={"3rem"}>:</Typography>}
    </>
  )
}

export default DigitContainer