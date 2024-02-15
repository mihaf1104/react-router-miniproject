import swal from "sweetalert";
import { jpAxios } from "../JpAxios";

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
    const res = await jpAxios.post(`/users/${userId}`, data);
    if (res) {
        swal(`${res.data.name} با موفقیت ویرایش شد`, {
            icon: "success",
            buttons: "متوجه شدم"
        })
    };
}

export const getUserService=async ()=>{
    const res=await jpAxios.get('/users')
    if (res)
    {
        
    }
}