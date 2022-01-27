export function gpsLoction(setlatlon, setGPSErr) {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((pos) => {
            localStorage.setItem('location', JSON.stringify({ lat: pos.coords.latitude, lon: pos.coords.longitude }))
            setlatlon(true)
        }, err => {
            if (err.code == err.PERMISSION_DENIED) {
                setGPSErr("Permission Denied.")
            }
        })
    }

}