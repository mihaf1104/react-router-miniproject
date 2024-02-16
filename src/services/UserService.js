import swal from "sweetalert";
import { jpAxios } from "../JpAxios";
import { useEffect } from "react";

export const setUserService = async (data) => {
    // jpAxios.post('/users', data)
    // .then(res => { console.log(res) })
    // .catch(err => console.log(`error${err}`))
    const res = await jpAxios.post('/users', data);
    if (res) {
        swal(`${res.data.name} با موفقیت ثبت شد`, {
            icon: "success",
            buttons: "متوجه شدم"
        })
    }
}
export const updateUserService = async (data, userId) => {
    // jpAxios.put(`/users/${userId}`, data)
    // .then(res => { console.log(res) })
    const res = await jpAxios.put(`/users/${userId}`, data);
    if (res) {
        swal(`${res.data.name} با موفقیت ویرایش شد`, {
            icon: "success",
            buttons: "متوجه شدم"
        })
    };
}

export const getUserByIDService = async (userId) => {
   
    
        console.log("userid Fill")
        return await jpAxios.get(`/users/${userId}`)
     
}

export const getUserService = async () => {
    
        console.log("userid empty")
        return await jpAxios.get(`/users`)
     
}