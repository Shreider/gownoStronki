function start() {
    //pobieramy wartości z pól w html
    let numerKawy = document.getElementById('nrkawy').value;
    let wagaKawy = document.getElementById('wagak').value;

    //zmienne stałe aby nie pisać ciągle tego samego, jestem leniwy :)
    const wynikDW = 'Koszt zamówienia wynoci:';
    const inner = document.getElementById('wynik').innerHTML;

    //wywoływanie funkcji sprawdzającej czy kawa jest dostępna
    if(!kawaDostepna(numerKawy)) {
        //jeżeli funkcja zwróci fałsz to koszt zawsze wyniesie 0zł
        inner = `${wynikDW} 0zł`;
    }
    else {
        //w innym przypadku wywołujemy funkcję sprawdzająca jaka jest to kawa i wykonujemy prose mnozenie
        inner = `${wynikDW} ${jakaKawa(numerKawy)*wagaKawy}zł`;
    }
}

//funkcja od sprawdzania czy kawa jest dostepna
function kawaDostepna(numerKawy) {
    if(numerKawy==1||numerKawy==2||numerKawy==4) return true; //jeżeli numer kawy wynosi 1,2 lub 4, zwracamy prawdę (czyli że taka kawa jest dostępna)
    return false; //w ważdym innym przypadku zwracamy wartość fałsz (czyli że takiej kawy nie ma dostępnej)
}

//funkcja zwraca cenę w zł w zależności od kawy
function jakaKawa(numerKawy) {
    if(numerKawy==1) return 5;//dla kawy nr 1 cena to 5zł
    if(numerKawy==2) return 7;//dla kawy nr 2 cena to 7zł
    if(numerKawy==4) return 6;//dla kawy nr 4 cena to 6zł
    //nie ma potrzeby robienia zabezpiecznia w postaci: "else return 0". Linia 11 robi to za nas.
}