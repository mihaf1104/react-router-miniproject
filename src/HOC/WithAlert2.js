import React from "react";
import swal from "sweetalert";

const WithAlert2=(props)=>{
    const Confirm = (message) => {
        return swal({
            title: "حذف رکورد!",
            text: message,
            icon: "warning",
            dangerMode: true,
            buttons: ["خیر", "بله"]

        })
    }

    const Alert = (message, icon) => {
        return swal(message, {
            icon: icon ,
            buttons: "متوجه شدم",

        })
    }
    return (
        <>
             {props.render(Confirm,Alert)}
        </>
    )
}

export default WithAlert2;