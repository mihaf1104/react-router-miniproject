import swal from "sweetalert"

export const Confirm = (message) => {
    return swal({
        title: "حذف رکورد!",
        text: message,
        icon: "warning",
        dangerMode: true,
        buttons: ["خیر", "بله"]

    })
}

export const Alert = (message, icon) => {
    return swal(message, {
        icon: icon ,
        buttons: "متوجه شدم",

    })
}