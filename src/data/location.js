async function location() {
    return readLocation().then( pos => pos).catch( err => err )
    
}

function readLocation () {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}

export default location