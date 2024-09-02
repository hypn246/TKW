// delete product by map all trash icon
const del=()=>{
    let prods=document.querySelectorAll('.prod')
    let dels=document.querySelectorAll('.del')
    for (let i=0; i<dels.length;i++){
        dels[i].addEventListener('click',()=>{
            console.log(prods[i].querySelector('.product-name'))
            prods[i].remove()
           edit()
        })
    }
    
    console.log('applied del')
}
//edit form
const reget=(i)=> {
    event.preventDefault()
    //close and del 
    let flag=document.getElementById('flag')
    if(flag){
        flag.remove()
    }
    let img=document.querySelectorAll('.product-img')[i].src
    let name=document.querySelectorAll('.product-name')[i].innerText
    let cate=document.querySelectorAll('.product-cate')[i].innerText
    let price=document.querySelectorAll('.product-price')[i].innerText
    let sold=document.querySelectorAll('.product-sold')[i].innerText
    //////
    let detail=document.getElementById('over-edit-prod')
    detail.style.display='flex'
    console.log(detail)
    console.log(i)

     let h=`
     <div id='flag' class="flex w-full p-2">
        <div class='w-full flex flex-col'>
            <a href="#" id="close-edit">X</a>
             <h1>Edit a product</h1>
             <label for="edit-name">Name</label>
             <input type="text" value="${name}" id="edit-name">
             <label for="edit-cate">Category</label>
             <input type="text" value="${cate}" id="edit-cate">
             <label for="edit-img">Image</label>
             <input type="text" value="${img}" id="edit-img">
             <label for="edit-sold">Sold</label>
             <input type="number" value="${sold}" id="edit-sold">
             <label for="edit-price">Price</label>
             <input type="number" id="edit-price" value="${price}">
            <div class="w-full flex justify-between">
                 <button type="button" id="submit-edit" class='submit-btn'>Submit</button>
                 <button type="button" id="cancel-edit" class='cancel-btn'>Cancel</button>
             </div>
         </div>
     </div>`
     detail.insertAdjacentHTML('beforeend',h)

     let ce=document.getElementById('cancel-edit')
     ce.addEventListener('click',()=>{
         document.getElementById('flag').remove()
             detail.style.display='none'
    })

    let cle=document.getElementById('close-edit')
    cle.addEventListener('click',()=>{
         document.getElementById('flag').remove()
             detail.style.display='none'
        })
    let submitEdit=document.getElementById('submit-edit')
    submitEdit.addEventListener('click',()=>{
        document.querySelectorAll('.product-img')[i].src=document.getElementById('edit-img').value
        document.querySelectorAll('.product-name')[i].innerText=document.getElementById('edit-name').value
        document.querySelectorAll('.product-sold')[i].innerText=document.getElementById('edit-sold').value
        document.querySelectorAll('.product-price')[i].innerText=document.getElementById('edit-price').value
        document.querySelectorAll('.product-cate')[i].innerText=document.getElementById('edit-cate').value
        //after all
        document.getElementById('flag').remove()
            detail.style.display='none'
        console.log('ok')

        edit()
        del()
    })
}
// edit form by map all edit icon
const edit=()=>{
    let edits=document.querySelectorAll('.edit')
    for (let i=0; i<edits.length;i++){
        edits[i].addEventListener('click',()=>{
           reget(i)
        })
    }
    console.log('applied edit')
}
//add
const Add=()=> {
    let flag=document.getElementById('flag')
     if(flag){
         flag.remove()
     }
    document.getElementById('add').addEventListener('click',()=>{
        let name=document.getElementById('name').value
        let price=document.getElementById('price').value
        let category=document.getElementById('category').value
        let img=document.getElementById('img').value
        let h=`
        <tr class="prod">
            <td class="center">
                <img src=${img}  class="product-img" alt="">
                <p class="product-name">${name}</p>
            </td>
            <td class="product-cate">${category}</td>
            <td class="product-price">${price}</td>
            <td class="product-sold">0</td>
            <td>
                <div class="h-full center">
                    <img class="edit" src="/media/icons8-edit-48.png" alt="">
                    <img  class="del" onclick="" src="/media/icons8-delete-24.png" alt="">
                </div>
            </td>
        </tr>`
        let p=document.getElementById('prods')
        p.insertAdjacentHTML('afterbegin',h)//p.innerHTML=h+p.innerHTML
        over.style.display='none'
        console.log('stage1 checked..')
        edit()
        console.log('stage2 checked..')
        del()
        console.log('stage3 checked..')
    })
    console.log('added')
}
///ONLOAD
window.addEventListener('load',()=>{
    //init setup
    let over=document.getElementById('over')   
    //another way to close
    document.getElementById('close').addEventListener('click',()=>{
        over.style.display='none'
    })
    //cancel form
    document.getElementById('cancel').addEventListener('click',()=>{
        over.style.display='none'
    })
    //open form
    document.getElementById('add-product').addEventListener('click',()=>{
        over.style.display=('flex')
    })
    //add product
    Add()
    edit()
    del()
    //find
    document.getElementById('find').addEventListener('click',()=>{
        let e = document.getElementById("select");
        let value = e.value;
        let text = e.options[e.selectedIndex].text;

        let prods=document.querySelectorAll('.prod')
        for(let i=0;i<prods.length;i++){
            if(prods[i].querySelector('.product-cate').innerText==text)
                prods[i].classList.remove('none')
            else
                prods[i].classList.add('none')
        }
    })
})

