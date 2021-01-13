const navbar = document.querySelectorAll("nav ul li");
const title = document.querySelector('.judul h1');
const tekan = document.querySelectorAll('.listTekan button')

const main = document.getElementsByTagName('main')[0];
const utama = document.querySelector('.utama');
const gambar = document.querySelector('.gambar');

const tombol = document.querySelector('.tombol');
const layerMain = document.querySelector('.layerMain');
const layermainBox = document.querySelector('.layerMainBox');
const layerAside = document.querySelector('.layerAside');

const skill = document.querySelectorAll('.skill');
const judul = document.querySelector('.judul');
const butSkill = document.querySelectorAll('.judul button');

navbar.forEach((e, i) => {
    e.addEventListener('click',()=>{
        if(i == 0){
            layerMain.classList.remove('appear');
            layerAside.classList.remove('appear');
            utama.classList.remove('hilang');
            gambar.classList.remove('hilang');
            gambar.classList.remove('side');
            tombol.classList.remove('pindah');
            judul.style.opacity = 0;
            e.style.opacity = 1;
            navbar[1].style.opacity = .5;
        } else {
            layerMain.classList.add('appear');
            layerAside.classList.add('appear');
            utama.classList.add('hilang');
            gambar.classList.add('side');
            tombol.classList.add('pindah');
            judul.style.opacity = 1;
            e.style.opacity = 1;
            navbar[0].style.opacity = .5;
        }
    })
})

butSkill.forEach((e, i)=>{
    e.addEventListener('click',() =>{
        skill.forEach((e)=>{
            if (i == 1){
                e.classList.add('up1')
                e.classList.remove('up2')
                title.innerHTML = 'KETURUNAN';
                title.classList.add('slide');
            } else if (i == 2){
                e.classList.add('up2')
                e.classList.remove('up1')
                title.innerHTML = 'PENDIDIKAN';
                title.classList.add('slide');
            } else {
                e.classList.remove('up1','up2')
                title.innerHTML = 'SKILL';
                title.classList.add('slide');
            }
            setTimeout(()=>{
                title.classList.remove('slide');
            },300)
        })
    })
})

tekan.forEach((e,i) => {
    e.addEventListener('click', () => {
        if(i == 0){
            e.style.background = 'black'
            tekan[1].style.background = 'rgb(180, 180, 180)';
            tekan[2].style.background = 'rgb(180, 180, 180)';
        } else if (i == 1){
            e.style.background = 'black'
            tekan[0].style.background = 'rgb(180, 180, 180)';
            tekan[2].style.background = 'rgb(180, 180, 180)';
        } else {
            e.style.background = 'black'
            tekan[0].style.background = 'rgb(180, 180, 180)';
            tekan[1].style.background = 'rgb(180, 180, 180)';
        }
        
    })
})

function ubah(color){
    layerMain.classList.add('fade');
    layerMain.style.background = color;
}

function normal(color){
    layerMain.classList.remove('fade');
    layerMain.style.background = color;
}


