//  Info

const behance = document.querySelector('#behance')
const mail = document.querySelector('#mail')
const github = document.querySelector('#github')
const Vk = document.querySelector('#vk')


behance.addEventListener('click',()=>{
    window.open('https://www.behance.net/1i_am_ds');
})

mail.addEventListener('click',()=>{
    console.log('In Work...')
})

github.addEventListener('click',()=>{
    window.open('https://github.com/DoctorSpace');
})

Vk.addEventListener('click',()=>{
    window.open('https://vk.com/1i_am_ds');
})




//  Card

const card1 = document.querySelector('#id-1')
const card2 = document.querySelector('#id-2')

card1.addEventListener('click',()=>{
    window.location = 'https://doctorspace.github.io/File-Reader-Data/';
})

card2.addEventListener('click',()=>{
    window.location = 'https://doctorspace.github.io/Neural-network/';
})
