window.onscroll= function () {
  const header = document.querySelector('header')
  const fixnav = header.offsetTop
  const topButton = document.querySelector('#toTop')

  if(window.pageYOffset > fixnav){
    header.classList.add('navbar-fixed')
    topButton.classList.remove('hidden')
    topButton.classList.add('flex')
  }else{
    header.classList.remove('navbar-fixed')
    topButton.classList.remove('flex')
    topButton.classList.add('hidden')
  }
}

// darkmode local storage
const darkToggle = document.querySelector('#dark-toggle')
const html  = document.querySelector('html')

darkToggle.addEventListener('click', function () {
  if(darkToggle.checked){
    html.classList.add('dark')
    localStorage.theme = 'dark'
  }else{
    html.classList.remove('dark')
    localStorage.theme = 'light'
  }
})

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true
} else {
  darkToggle.checked = false
}

const joinButton = document.querySelector('#joinButton')
const navJoinButton = document.querySelector('#navJoinButton')

navJoinButton.addEventListener('click', function () {
  var formSection = document.querySelector('#daftar')
  formSection.classList.remove('hidden')
  // console.log('tes tombol');
})

joinButton.addEventListener('click', function () {
  var formSection = document.querySelector('#daftar')
  formSection.classList.remove('hidden')
  // console.log('tes tombol');
})

// upload img to spreadsheet & google drive

let url = "https://script.google.com/macros/s/AKfycbw16xDSxFlTI0pE351TlsGLWUPaCBlXOqUWnVwJc2k4ePnvV1qyh5ah9GC3ia0BWt0x/exec";
let pasFoto = document.querySelector("#pasFoto");
let sertMoriest = document.querySelector("#sertMoriest");
let sertAMT = document.querySelector("#sertAMT");
let sertLKM = document.querySelector("#sertLKM");
const submit = document.querySelector(".btnKirim");
const previewImages = document.querySelector(".preview-images");

submit.addEventListener("click", () => {
  uploadImages(sertAMT.files)
  uploadImages(pasFoto.files);
  uploadImages(sertMoriest.files);
  uploadImages(sertLKM.files);
});

function uploadImages(files) {
  for (let i = 0; i < files.length; i++) {
    let fr = new FileReader();
    fr.addEventListener("loadend", () => {
      let res = fr.result;
      let spt = res.split("base64,")[1];
      let obj = {
        base64: spt,
        type: files[i].type,
        name: files[i].name,
      };
      fetch(url, {
        method: "POST",
        body: JSON.stringify(obj),
      })
      .then((r) => r.text())
      .then((data) => {
        console.log(data);
        // Tampilkan gambar yang diunggah sebagai preview
        // let img = document.createElement("img");
        // img.src = res;
        // previewImages.appendChild(img);
      });
    });
    fr.readAsDataURL(files[i]);
  }
}
