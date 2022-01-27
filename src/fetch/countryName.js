import axios from "axios";

export function countryName() {
    return axios.get('https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json')
        .then(res => { localStorage.setItem('countries', JSON.stringify(res)) })
        .catch(err => err.message)
}