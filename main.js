const bioButton = document.querySelector(".bio--js");
const projectsButton = document.querySelector(".projects--js");
const contactButton = document.querySelector(".contact--js");
const content = document.querySelector(".content--js");

bioButton.addEventListener('click', () => {
    bioButton.classList.add("inactive");
    content.style.display = "block";
    content.innerHTML = `<p>Kwartet Smyczkowy Pakamera tworzą  artystki związane z&nbsp;Wrocławską Orkiestrą Kameralną NFM Leopoldinum.
    Podczas wieloletniej współpracy z&nbsp;tym renomowanym zespołem  miały okazję doskonalić umiejętności w zakresie kameralistyki pod okiem wybitnych postaci sceny muzycznej - Ernsta Kovacica, Jerzego  Maksymiuka, Güntera Pichlera i&nbsp;wielu innych. 
    </p>
    <p>Zespół Pakamera charakteryzuje otwartość na&nbsp;różne gatunki muzyczne - wykonuje muzykę klasyczną i&nbsp;współczesną, nie stroni też jednak od muzyki rozrywkowej. Artystki tworzące kwartet mają w&nbsp;swoim dorobku dużą liczbę nagrań dla potrzeb kina, teatru i&nbsp;telewizji oraz kooperacje z&nbsp;wykonawcami muzyki popularnej.</p>
    
    <p>Łączące muzyków zamiłowanie do sztuki filmowej zaowocowało powstaniem projektu "Muzyka z&nbsp;ekranu". Kwartet prezentował muzykę filmową między innymi podczas festiwalu <i>Sensacyjne Lato Filmów</i> w&nbsp;Kołobrzegu oraz <i>American Film Festival</i> we&nbsp;Wrocławiu.</p> 
    
    <p>Inspiracją dla działalności zespołu jest chęć propagowania muzyki poważnej. Kwartet ma w&nbsp;swoim repertuarze wiele arcydzieł kameralistyki polskiej i&nbsp;światowej, chętnie  prezentuje też lżejsze oblicza klasyki.</p>`;
    projectsButton.classList.remove("inactive");
    contactButton.classList.remove("inactive");
    }
);

projectsButton.addEventListener('click', () => {
    projectsButton.classList.add("inactive");
    content.style.display = "block";
    content.innerHTML = `
       <p><b>Arcydzieła muzyki poważnej</b><br>
    - najbardziej znane i&nbsp;uwielbiane przez publiczność kompozycje wybitnych twórców.</p>
    
    <p><b>Koncert karnawałowy</b><br>
    -  od wystawnych sal balowych Wiednia po zmysłową atmosferę  argentyńskiego tanga.</p>
    
    <p><b>Koncert świąteczny</b><br>
    - "Dziadek do&nbsp;orzechów" Piotra Czajkowskiego w&nbsp;wersji na&nbsp;kwartet smyczkowy.</p>
    
    <p><b>Pory roku</b><br>
    - "Cztery pory roku" Antonio Vivaldiego w&nbsp;wersji na&nbsp;skrzypce solo z&nbsp;towarzyszeniem kwartetu smyczkowego.</p>
    
    <p><b>Muzyka z&nbsp;ekranu</b><br>
    - koncert muzyki filmowej.</p>

    <p><b>Moniuszko remastered</b><br>
    - muzyka kameralna oraz autorskie, uwspółcześnione wersje pieśni Stanisława Moniuszki.</p>
    
    <p><b>Koncert muzyki polskiej</b><br>
    - Bacewicz, Szymanowski, Kilar </p>
    
    <p><b>Zgiełk historii</b><br>
    - kwartety smyczkowe Dymitra Szostakowicza</p>`;
    bioButton.classList.remove("inactive");
    contactButton.classList.remove("inactive");
    }
);

contactButton.addEventListener('click', () => {
    contactButton.classList.add("inactive");
    content.style.display = "block";
    content.innerHTML = `
    <p class="darker">email: <a class="contact-link" href="mailto:pakamera.kwartet@wp.pl">pakamera.kwartet@wp.pl</a></p>
    <p class="darker">tel: <a class="contact-link" href="tel:+48601734123">+48 601 734 123</a></p>
    <p class="darker">Facebook / Messenger: <a class="contact-link" href="https://www.facebook.com/pakamera.kwartetsmyczkowy" rel="noopener noreferrer" target=_blank>Pakamera Kwartet Smyczkowy</a></p>`;
    bioButton.classList.remove("inactive");
    projectsButton.classList.remove("inactive");
    }
);