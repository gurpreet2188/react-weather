import axios from "axios";

export function ipLocation(setCity, setIpErr, setLocIndex) {

        axios.get('https://ipapi.co/json/')
            .then(res => {
                setCity(res.data.city)
                setLocIndex(0)
            })
            .catch((err) => {
                setIpErr(err.message)
            })


}