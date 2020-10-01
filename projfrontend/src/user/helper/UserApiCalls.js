import {API} from '../../Backend'



export const UserApiCalls = () =>{
    return fetch(`${API}user/`, {method:"GET"})
    .then(response => {
        console.log('API CALLING FROM USERAPICALLS ', response.json());
        return response.json();
    })
    .catch(err => console.log(err))
}
