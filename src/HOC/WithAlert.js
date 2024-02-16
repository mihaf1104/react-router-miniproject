import React from "react"
import swal from "sweetalert"

const WithAlert = HOCComponent => {
    const NewComponent = (props) => {
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
            <HOCComponent {...props} Confirm={Confirm} Alert={Alert}></HOCComponent>
        )
    }
    return NewComponent
}

export default WithAlert;