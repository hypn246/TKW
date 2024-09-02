window.onload=()=>{
    //open shorcut menu
    document.getElementById('shortcut-burger').addEventListener('click', ()=>{
        document.getElementById('shortcut-menu').classList.toggle('none')
    })
    //back top
    document.getElementById('ontop').addEventListener('click',()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })
    //user
    let user=document.getElementById('user-icon')
    user.addEventListener('click',()=>{
        let drop=document.querySelector('.drop-box')
        drop.classList.toggle('none')
        window.onclick=()=>{
            if(event.target!=user){
                drop.classList.add('none')
            }
        }
    })
}
window.onscroll=()=>{
    //ontop
    let w=window.scrollY
    if(w>80){
        document.getElementById('ontop').style.display='block'
    }else{
        document.getElementById('ontop').style.display='none'
    }
}