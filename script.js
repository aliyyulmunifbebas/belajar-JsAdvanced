// //object literal
// let siswa = {
//     nama: "aliyyul",
//     energi: 10,

//     makan: function(porsi){
//          this.energi = this.energi + porsi
//          console.log(`hallo ${this.nama}, selamat makan`)
//     }
// }

//function declaration
// function Siswa(nama,energi){
//     let siswa={}

//     siswa.nama= nama
//     siswa.energi= energi

//     siswa.makan= function (porsi){
//         this.energi= this.energi+porsi
//         console.log(`hallo ${this.nama} selamat makan`)
//     }


//     siswa.main= function(jam){
//         this.energi=this.energi-jam;
//         console.log(`selamat bermain wahay ${this.nama}`)
//     }
// return siswa
// }

// let aliyyul= Siswa(`aliyyul`,10)


//constructur function
//object.create()
// const MethodSiswa= {
// makan: function(porsi){
//     this.energi=this.energi + porsi
// },
// main: function(jam){
//     this.energi=this.energi-jam
// },
// tidur: function(jam){
//     this.energi=this.energi+jam
// }
// }
// function Siswa(nama,energi){

//     let siswa= Object.create(MethodSiswa)

//     siswa.nama= nama
//     siswa.energi= energi

//     return siswa
// }

// let aliyyul = Siswa(`aliyyul`,10)

///////////////////////////////////////////////////////////
//_______________________________________________________//
///////////////////////////////////////////////////////////


// function Siswa(nama,energi){

//     // let siswa= Object.create(MethodSiswa)

//     this.nama= nama
//     this.energi= energi

//     // return siswa
// }

// Siswa.prototype.makan = function(porsi){
//     this.energi += porsi
//     return `halo ${this.nama} selamat makan`

// }

// Siswa.prototype.main = function(jam){
//     this.energi -= jam
//     return `selamat bermain ${this.nama}`
// }

// Siswa.prototype.tidur = function(jam){
//     this.energi += jam
//     return `tidur yang nyenyak ${this.nama}`
// }


// let aliyyul = new Siswa(`aliyyul`,10)

class Siswa {
    constructor(nama,energi){
        this.nama = nama
        this.energi = energi
    }
    makan(porsi){
        this.energi += porsi
    }
    main(jam){
        this.energi -= jam
    }
}

let aliyyul = new Siswa(`aliyyul`,10)