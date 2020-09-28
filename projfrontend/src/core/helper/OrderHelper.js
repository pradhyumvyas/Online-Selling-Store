import {API} from "../../Backend"

export const createOrder = (userId, token, orderData) => {
    const formData = new FormData();

    for (const name in orderData){
        formData.append(name, orderData[name])
    }

    return fetch(`${API}order/add/${userId}/${token}/`,{
        method: "POST",
        body: formData,
    })
    .then((response) => {
        console.log("In the Then of Order Helper", response);
        return response.json();
    })
    .catch((err) => console.log(err))

} 