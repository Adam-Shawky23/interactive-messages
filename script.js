const notification1 = document.querySelector(".Notification")
const notification2 = document.getElementById("one")
const notification3 = document.getElementById("two")
const notification4 = document.getElementById("three")
const notification5 = document.getElementById("five")
const notification6 = document.getElementById("four")
const notification7 = document.getElementById("seven")
const btn = document.getElementById("btn")
const number = document.getElementById("number")

const read = true

notification1.addEventListener("click", ()=> {

    if (read){
        notification1.style.backgroundColor = "white"
        const read = false
        if (number.innerHTML > 0){
            number.innerHTML--
        }
    }

})
notification2.addEventListener("click", ()=> {

    if (read){
        notification2.style.backgroundColor = "white"
        const read = false
        if (number.innerHTML > 0){
            number.innerHTML--
        }
    }

})
notification3.addEventListener("click", ()=> {

    if (read){
        notification3.style.backgroundColor = "white"
        const read = false
        if (number.innerHTML > 0){
            number.innerHTML--
        }
    }

})
notification4.addEventListener("click", ()=> {

    if (read){
        notification4.style.backgroundColor = "white"
        const read = false
        if (number.innerHTML > 0){
            number.innerHTML--
        }
    }

})
notification5.addEventListener("click", ()=> {

    if (read){
        notification5.style.backgroundColor = "white"
        const read = false
        if (number.innerHTML > 0){
            number.innerHTML--
        }
    }

})
notification6.addEventListener("click", ()=> {

    if (read){
        notification6.style.backgroundColor = "white"
        const read = false
        if (number.innerHTML > 0){
            number.innerHTML--
        }
    }

})
notification7.addEventListener("click", ()=> {

    if (read){
        notification7.style.backgroundColor = "white"
        const read = false
        if (number.innerHTML > 0){
            number.innerHTML--
        }
    }

})
btn.addEventListener("click", ()=>{
    notification1.style.backgroundColor = "white"
    notification2.style.backgroundColor = "white"
    notification3.style.backgroundColor = "white"
    notification4.style.backgroundColor = "white"
    notification5.style.backgroundColor = "white"
    notification6.style.backgroundColor = "white"
    notification7.style.backgroundColor = "white"
    number.innerHTML="0"
})
if (number.innerHTML > 0){
    number.innerHTML--
}
