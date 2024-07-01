"use strict";
let toastBox = document.getElementById('ToastBox');
let sucssesMsg = '<i class="fa-solid fa-circle-check"></i> Sucessfuly submitted';
let errorsMsg = '<i class="fa-solid fa-circle-xmark"></i> please fix the error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check agin';
function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    if (msg.includes('error')) {
        toast.classList.add("error");
    }
    if (msg.includes('Invalid')) {
        toast.classList.add("invalid");
    }
    setTimeout(() => {
        toast.remove();
    }, 6000);
}
//# sourceMappingURL=main.js.map