let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const plButton = document.querySelector(".pl--js");
const enButton = document.querySelector(".en--js");
let english = false;
let bio = false;
let projects = false;
let contact = false;
const bioButton = document.querySelector(".bio--js");
const projectsButton = document.querySelector(".projects--js");
const contactButton = document.querySelector(".contact--js");
const content = document.querySelector(".content--js");
const subtitle = document.querySelector(".subtitle--js");

const bioPl = `<p>Kwartet Smyczkowy Pakamera tworzą  artystki związane z&nbsp;Wrocławską Orkiestrą Kameralną NFM Leopoldinum.
Podczas wieloletniej współpracy z&nbsp;tym renomowanym zespołem  miały okazję doskonalić umiejętności w zakresie kameralistyki pod okiem wybitnych postaci sceny muzycznej - Ernsta Kovacica, Jerzego  Maksymiuka, Güntera Pichlera i&nbsp;wielu innych. 
</p>
<p>Zespół Pakamera charakteryzuje otwartość na&nbsp;różne gatunki muzyczne - wykonuje muzykę klasyczną i&nbsp;współczesną, nie stroni też jednak od muzyki rozrywkowej. Artystki tworzące kwartet mają w&nbsp;swoim dorobku dużą liczbę nagrań dla potrzeb kina, teatru i&nbsp;telewizji oraz kooperacje z&nbsp;wykonawcami muzyki popularnej.</p>

<p>Łączące muzyków zamiłowanie do sztuki filmowej zaowocowało powstaniem projektu "Muzyka z&nbsp;ekranu". Kwartet prezentował muzykę filmową między innymi podczas festiwalu <i>Sensacyjne Lato Filmów</i> w&nbsp;Kołobrzegu oraz <i>American Film Festival</i> we&nbsp;Wrocławiu.</p> 

<p>Inspiracją dla działalności zespołu jest chęć propagowania muzyki poważnej. Kwartet ma w&nbsp;swoim repertuarze wiele arcydzieł kameralistyki polskiej i&nbsp;światowej, chętnie  prezentuje też lżejsze oblicza klasyki.</p>
<img src="./foto-poziome.jpg" alt="zdjęcie zespołu">
<ul>
<li>Aleksandra Pawłowska <span>- skrzypce</span></li>
<li>Dorota Pindur <span>- skrzypce</span></li>
<li>Monika Młynarczyk <span>- altówka</span></li>
<li>Monika Łapka <span>- wiolonczela</span></li>
</ul>`;
const bioEn = `<p>Pakamera String Quartet is formed by artists associated with the NFM Leopoldinum Chamber Orchestra from Wroclaw. During many years of cooperation with this renowned ensemble, they had the opportunity to improve their skills in the field of chamber music under the supervision of outstanding figures of the music scene - Ernst Kovacic, Jerzy Maksymiuk, Günter Pichler and many others.
</p>
<p>Pakamera quartet is characterized by openness to various musical genres - it performs classical and contemporary music, but also does not shy away from popular music. The artists forming the quartet have a large number of recordings for the needs of cinema, theatre and television, as well as cooperation with performers of popular music.</p>

<p>The musicians' passion for the art of film resulted in the creation of the "Music from the Screen" project. The quartet presented film music, among others, during the <i>Sensational Summer of Films</i> festival in Kolobrzeg and the <i>American Film Festival</i> in Wroclaw.</p> 

<p>The inspiration for the group's activity is the desire to promote classical music. The quartet has many masterpieces of Polish and world chamber music in its repertoire, and is also eager to present the lighter side of classics.</p>
<img src="./foto-poziome.jpg" alt="zdjęcie zespołu">
<ul>
<li>Aleksandra Pawłowska <span>- violin</span></li>
<li>Dorota Pindur <span>- violin</span></li>
<li>Monika Młynarczyk <span>- viola</span></li>
<li>Monika Łapka <span>- cello</span></li>
</ul>`;

const projectsPl = `
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

const projectsEn = `
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

const contactPlEn = `
<div style="width: auto; height: 200px; background: none"></div>
<p class="darker">email: <a class="contact-link" href="mailto:pakamera.kwartet@wp.pl">pakamera.kwartet@wp.pl</a></p>
<p class="darker">tel: <a class="contact-link" href="tel:+48601734123">+48 601 734 123</a></p>
<p class="darker">Facebook / Messenger: <a class="contact-link" href="https://www.facebook.com/pakamera.kwartetsmyczkowy" rel="noopener noreferrer" target=_blank>Pakamera Kwartet Smyczkowy</a></p>`;

enButton.addEventListener('click', () => {
    english = true;
    if (bio) {
        content.innerHTML = bioEn;
    } else if (projects) {
        content.innerHTML = projectsEn;
    } else {
        content.innerHTML = contactPlEn;
    };
    subtitle.textContent = "string quartet";
    plButton.classList.remove("inactive");
    enButton.classList.add("inactive");
    projectsButton.innerHTML = "projects";
    contactButton.innerHTML = "contact";
});
plButton.addEventListener('click', () => {
    english = false;
    if (bio) {
        content.innerHTML = bioPl;
    } else if (projects) {
        content.innerHTML = projectsPl;
    } else {
        content.innerHTML = contactPlEn;
    };
    subtitle.textContent = "kwartet smyczkowy";
    plButton.classList.add("inactive");
    enButton.classList.remove("inactive");
    projectsButton.innerHTML = "projekty";
    contactButton.innerHTML = "kontakt";
});

bioButton.addEventListener('click', () => {
    bio = true;
    projects = false;
    contact = false;
    bioButton.classList.add("inactive");
    content.style.display = "block";
    if (english) {
        content.innerHTML = bioEn
    } else {
        content.innerHTML = bioPl
    };
    projectsButton.classList.remove("inactive");
    contactButton.classList.remove("inactive");
    }
);

projectsButton.addEventListener('click', () => {
    projects = true;
    bio = false;
    contact = false;
    projectsButton.classList.add("inactive");
    content.style.display = "block";
    if (english) {
        content.innerHTML = projectsEn
    } else {
        content.innerHTML = projectsPl
    };
    bioButton.classList.remove("inactive");
    contactButton.classList.remove("inactive");
    }
);

contactButton.addEventListener('click', () => {
    contact = true;
    bio = false;
    projects = false;
    contactButton.classList.add("inactive");
    content.style.display = "block";
    content.innerHTML = contactPlEn;
    bioButton.classList.remove("inactive");
    projectsButton.classList.remove("inactive");
    }
);