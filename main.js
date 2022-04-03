let btn = document.querySelector('.dropdown')
let people = document.querySelector('.people-menu')
let peopleDisc = document.querySelectorAll('.people-disc')

btn.addEventListener('click', ()=> {
    if(people.classList.contains('hide')) {
        people.classList.remove('hide')
    } else {
        people.classList.add('hide')
    }
    
})

document.addEventListener('click', (e)=> {
    const elem = e.target
    console.log(elem.id);
    peopleDisc.forEach(item => {
        if(item.id === elem.id) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
})

