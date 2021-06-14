var tanya = true;
while( tanya ){
    var p = prompt('Pilih kertas, gunting atau batu?');
    
    var bot = Math.random();
    
    if( bot < 0.34 ) {
        bot = "kertas";
    }else if ( bot >= 0.34 && bot < 0.67 ) {
        bot = "gunting";    
    } else {
        bot = "batu";
    }
    
    if ( p == bot ) {
        hasil = "SERI AHAHAHAHA"
    }else if ( p == "kertas" ) {
        hasil = ( bot == "gunting" ) ? "AOWKOAWKOAKW KALAH" : "DIH HOKI DOANG MENANG >:(";
    }else if (p == "gunting" ) {
        hasil = ( bot == "Batu" ) ? "AOWKOAWKOAKW KALAH" : "DIH HOKI DOANG MENANG >:(";
    }else if ( p == "batu" ) {
        hasil = ( bot == "kertas" ) ? "AOWKOAWKOAKW KALAH" : "DIH HOKI DOANG MENANG >:(";
    }else{
        hasil = "masukin yg bener >:("
    }
    
    alert('Km pilih ' + p + ' Gwe milih ' + bot + "\n" + hasil);
    tanya = confirm('Lg kh?');
}

alert('Yaudah beberes dlu jgn lupa makan yah, love you <3');