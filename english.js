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
       <p><b>Masterpieces of classical music</b><br>
    - the most famous and beloved compositions of outstanding artists.</p>
    
    <p><b>Carnival concert</b><br>
    - from the sumptuous ballrooms of Vienna to the sensual atmosphere of Argentinian tango.</p>
    
    <p><b>Christmas concert</b><br>
    - Pyotr Tchaikovsky's “Nutcracker” in the string quartet version.</p>
    
    <p><b>Four Seasons</b><br>
    - “Four Seasons” by Antonio Vivaldi in the version for solo violin accompanied by a string quartet.</p>
    
    <p><b>Music from the screen</b><br>
    - a concert of film music.</p>

    <p><b>Moniuszko remastered</b><br>
    - chamber music and new, modernized versions of Stanisław Moniuszko's songs.</p>
    
    <p><b>Polish music concert</b><br>
    - Bacewicz, Szymanowski, Kilar.</p>
    
    <p><b>The Turmoil of History</b><br>
    - String Quartets by Dmitri Shostakovich.</p>`;
    bioButton.classList.remove("inactive");
    contactButton.classList.remove("inactive");
    }
);

contactButton.addEventListener('click', () => {
    contactButton.classList.add("inactive");
    content.style.display = "block";
    content.innerHTML = `
    <p class="darker">email: <a class="contact-link" href="mailto:pakamera.kwartet@wp.pl">pakamera.kwartet@wp.pl</a></p>
    <p class="darker">phone: <a class="contact-link" href="tel:+48601734123">+48 601 734 123</a></p>
    <p class="darker">Facebook / Messenger: <a class="contact-link" href="https://www.facebook.com/pakamera.kwartetsmyczkowy" rel="noopener noreferrer" target=_blank>Pakamera Kwartet Smyczkowy</a></p>`;
    bioButton.classList.remove("inactive");
    projectsButton.classList.remove("inactive");
    }
);