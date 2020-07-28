var tanya = true;
while (tanya == true) {
//tangkap pilihan pemain
var p = prompt('pilih : gajah, semut, orang');

//tangkap pilihan komputer
//generate pilihan komputer
var comp = Math.random(); //Math.random itu generate rentang 0 smpe 1

if (comp < 0.34) {
    comp = 'manusia';
} else if ( comp > 0.34 && comp < 0.68 ) {
    comp = 'gajah';
} else {
    comp = 'semut';
}

//tentukan aturan
var hasil = '';
if (p == comp) {
    hasil = 'SERI';
} else if (p == 'manusia') {
    if (comp == 'gajah') {
        hasil = 'KALAH';
    } else {
        hasil = 'MENANG';
    }
} else if (p == 'gajah') {
    if (comp == 'manusia') {
        hasil = 'MENANG';
    } else {
        hasil = 'KALAH';
    }
} else if (p == 'semut') {
    if (comp == 'gajah') {
        hasil = 'MENANG';
    } else {
        hasil = 'KALAH';
    }
} else {
    hasil = 'Masukan mu salah';
}

//pengumuman
alert ('kamu memilih : '+ p +' dan komputer memilih '+comp+'\nMaka hasilnya adalah kamu : '+hasil+'');
tanya = confirm('lagi?');
} 
alert('terima kasih');


