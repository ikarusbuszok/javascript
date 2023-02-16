window.addEventListener("load", init);
function init() {
  console.log("Hahó!");
  var valt1 = "2";
  let valt2 = 2;
  const valt3 = 2;

  console.log("valt1", parseInt(valt1), typeof parseInt(valt1));
  console.log("valt2", parseInt(valt2), typeof parseInt(valt2));
  console.log("valt3", parseInt(valt3), typeof parseInt(valt3));
  let logikai = 2 < 4;
  console.log("logikai", logikai, typeof logikai);
  let eredmeny = valt1 + valt2;
  console.log("eredmeny", eredmeny, typeof eredmeny);
  elagazasok();
}
function elagazasok() {
  console.log("***********Elágazások**************");
  var szam = 19;
  if (szam % 2 == 0 && szam % 3 == 0) {
    console.log("kettővel és hárommal is osztható");
  } else if (szam % 2 == 0) {
    console.log("páros");
  } else if (szam % 3 == 0) {
    console.log("hárommal osztható");
  } else {
    console.log("egyikkel se osztható");
  }

  var nap = parseInt(Math.random() * 7) + 1;

  switch (nap) {
    case 1:
      console.log("Hétfő");
      break;
    case 2:
      console.log("Kedd");
      break;
    case 3:
      console.log("Szerda");
      break;
    case 4:
      console.log("Csütörtök");
    case 5:
      console.log("Péntek");
      break;
    case 6:
      console.log("Szombat");
      break;
    case 7:
      console.log("Vasárnap");
        break;
      default:
        console.log("Ez nem a hét egyik napja");

  }

  function ciklusok(){
    for (let index = 0; index < 10; index++) {
    var vszam = parseInt(Math.random()*401) + 100;
    console.log(vszam)
    }


  
}
  do {
    var vszam = parseInt(Math.random() * 31) - 20;
    console.log(vszam)
  } while (vszam <= 0);

  }


