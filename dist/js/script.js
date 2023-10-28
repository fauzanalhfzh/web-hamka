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

let url =
        "https://script.google.com/macros/s/AKfycbw16xDSxFlTI0pE351TlsGLWUPaCBlXOqUWnVwJc2k4ePnvV1qyh5ah9GC3ia0BWt0x/exec";
      let file = document.querySelector("#foto");
      let img = document.querySelector(".pasFoto");
      const submit = document.querySelector(".btnKirim");

      submit.addEventListener("click", () => {
        let fr = new FileReader();
        fr.addEventListener("loadend", () => {
          let res = fr.result;
          // img.src = res;
          let spt = res.split("base64,")[1];
          // console.log(spt);
          let obj = {
            base64: spt,
            type: file.files[0].type,
            name: file.files[0].name,
          };
          fetch(url, {
            method: "POST",
            body: JSON.stringify(obj),
          })
            .then((r) => r.text())
            .then((data) => console.log(data));
        });
        fr.readAsDataURL(file.files[0]);
      });