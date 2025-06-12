// Write JS to toggle sidebar functionality he
const togglebtn = document.getElementById('toggle-button')
const sidebar = document.getElementById('sidebar')

let collapse = false;

togglebtn.addEventListener('click', () => {
    if(!collapse){
        sidebar.style.width = '80px'
    }else {
        sidebar.style.width = '250px'
    }
    collapse = !collapse;
})