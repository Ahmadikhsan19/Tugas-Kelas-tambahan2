//no10

var namakelas= [
    {nama: 'Ahmad', Kelas:'xi rpl 1'},
    {nama: 'Arul', Kelas:'xi rpl 1'},
    {nama: 'Arpi', Kelas:'xi rpl 1'},
    {nama: 'Deni', Kelas:'xi rpl 1'},
    {nama: 'Ilham', Kelas:'xi rpl 1'},
    {nama: 'Herdi', Kelas:'xi rpl 1'},
    {nama: 'Genta', Kelas:'xi rpl 1'},
    {nama: 'Cahya', Kelas:'xi rpl 1'},
  ]
  function seleksi() {
    var filter= namakelas.filter (nama =>{
      return nama.Kelas == "xi rpl 1"
    });
  console.log(filter);
  }
  seleksi();