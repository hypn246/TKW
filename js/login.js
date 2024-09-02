window.onload=()=>{
    document.getElementById('username').addEventListener('click',()=>{
        document.getElementById('warn').style.visibility='hidden'
    })
    document.getElementById('password').addEventListener('click',()=>{
        document.getElementById('warn').style.visibility='hidden'
    })
    document.getElementById('log').addEventListener('click',()=>{
        let un=document.getElementById('username').value
        let pass=document.getElementById('password').value
        if(un=='admin'&& pass=='123456'){
            // window.location.replace("/")//can't return
            window.location.href="/"
        }else{
            document.getElementById('warn').style.visibility='visible'
        }
    })
    document.getElementById('password').addEventListener('keypress',()=>{
        if(event.key==="Enter"){
            let un=document.getElementById('username').value
            let pass=document.getElementById('password').value
            if(un=='admin'&& pass=='123456'){
                // window.location.replace("/")//can't return
                window.location.href="/"
            }else{
                document.getElementById('warn').style.visibility='visible'
            }
        } 
    })
}