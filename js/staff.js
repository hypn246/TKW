//for hidden info instead of hidden html
const data={
    0:['Nguyễn Thị Hà Giang', '02-08-2006', Date.now(),3000, 456, 'Cute vcl'],
    1:['Phan Lê Bảo Phương', '21-03-2005', Date.now(),4000, 789, 'Chó vcl'],
    2:['Nguyễn Thị Kiều Oanh', '10-09-2005', Date.now(),3000, 894, 'Sexy vcl'],
}
//detail of stafff
async function getDetail(){
    reset()
    let staffs=document.querySelectorAll('.staff-btn')
    for (let i=0; i<staffs.length;i++){
        staffs[i].addEventListener('click',()=>{
            let img=document.querySelectorAll('.staff-img')[i].src
            let name=document.querySelectorAll('.staff-name')[i].innerText
            let pos=document.querySelectorAll('.staff-position')[i].innerText
            let desc=document.querySelectorAll('.staff-desc')[i].innerText
            //////
            let detail=document.getElementById('over-staff')
            let h=`
            <div id='flag' class="over-staff-detail overflow-y p-1 relative">
                <h1>Employee detail </h1>
                <div class='flex p-1 employee-data'>
                    <div class='w-full p-1 employee'>
                        <img src="${img}" class='avt' alt="" />
                        <br />
                        <p>Full name: <span class="important">${data[i][0]}</span></p>
                        <p>Date of birth:  ${data[i][1]}</p>
                        <p>Start contact date: ${Date(data[i][2]).slice(4,15)}</p>
                        <!--- 
                        <label>Full name: </label>
                         <input type='text' value="${data[i][0]}"></input>
                         <label>Date of birth: </label>
                         <input type='text' value="${data[i][1]}"></input>
                         <label>Start contact date: </label>
                         <input type='text' value="${Date(data[i][2]).slice(4,15)}"></input>
                         --->
                    </div>
                    <div class='w-full business'>
                        <div>
                            <h2>Contact</h2>
                            <p>Phone: 096 xxx xxxx</p>
                            <p>Email: xxxxxx@gmail.com</p>
                        </div>
                        <div>
                            <h2 class='cursor' id='close'>X</h2>
                            <h2>Business data</h2>
                            <label>Code name: </label>
                            <input id='update-code' type='text' value="${name}"></input>
                            <label>Salary (/month):</label>
                            <input id='update-sal' type='text' value="${data[i][3]}"></input>
                            <label>Recived order:</label>
                            <input id='update-bill' type='text' value="${data[i][4]}"></input>
                            <label>Position</label>
                            <input id='update-pos' type='text' value="${pos}"></input>
                            <label>Description</label>
                            <textarea id='update-desc' type='text'>${desc}</textarea>
                            <button class='gd9 white cursor' id='save-staff'>Save!</button>
                        </div>
                    </div>
                </div>
            </div>`
            detail.insertAdjacentHTML('beforeend',h)
            //close pure
            let close=document.getElementById('close')
            if(close)
                close.addEventListener('click',()=>{      
                    let over=document.getElementById('over-staff') 
                    over.style.display='none'
                    reset()
                }
            )
            //save and exit
            let save=document.getElementById('save-staff')
            if(save)
                save.addEventListener('click',()=>{
                    //cdoe name
                    document.querySelectorAll('.staff-name')[i].innerText=document.getElementById('update-code').value
                    //bill
                    data[i][4]=document.getElementById('update-bill').value
                    //desc
                    document.querySelectorAll('.staff-desc')[i].innerText=document.getElementById('update-desc').value
                    //switching my position for you
                    document.querySelectorAll('.staff-position')[i].innerText=document.getElementById('update-pos').value
                    //sale this month
                    data[i][3]=document.getElementById('update-sal').value
                    //closing overlay
                    let over=document.getElementById('over-staff')
                    over.style.display='none'
                    reset()
                }
            )
        })
    }
}
//delete previous adjacent
async function reset() {
    let flag=document.getElementById('flag')
    flag.remove()
}
window.addEventListener('load',()=>{
    getDetail()
    let over=document.getElementById('over-staff')
    // open edit box by better way
    let edits=document.querySelectorAll('.staff-btn')
    for(e of edits){
        e.addEventListener('click',()=>{
            over.style.display='flex'
            over.style.width='100%'
        })
    }
})