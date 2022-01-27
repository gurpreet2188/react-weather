import axios from "axios";

export function ipLocation(setCity, setIpErr) {

        axios.get('https://ipapi.co/json/')
            .then(res => {
                setCity(res.data.city)
            })
            .catch((err) => {
                setIpErr(err.message)
            })


}