import { localStorageName } from '../helpers/localStorage'

function checkData() {
    const data = { 'current': undefined, 'oneCall': undefined }

    if (localStorage.getItem(localStorageName.CURRENT) && localStorage.getItem(localStorageName.ONE_CALL)) {
        data.current = JSON.parse(localStorage.getItem(localStorageName.CURRENT))
        data.oneCall = JSON.parse(localStorage.getItem(localStorageName.ONE_CALL))
    }


    return data
}

export default checkData