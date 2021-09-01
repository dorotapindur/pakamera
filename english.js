let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const bioButton = document.querySelector(".bio--js");
const projectsButton = document.querySelector(".projects--js");
const contactButton = document.querySelector(".contact--js");
const content = document.querySelector(".content--js");

bioButton.addEventListener('click', () => {
    bioButton.classList.add("inactive");
    content.style.display = "block";
    content.innerHTML = `<p>Pakamera String Quartet consists of artists associated with the NFM Leopoldinum Chamber Orchestra from Wroclaw. During many years of cooperation with this renowned ensemble, they had the opportunity to improve their skills in the field of chamber music under the supervision of outstanding figures of the music scene - Ernst Kovacic, Jerzy Maksymiuk, Günter Pichler and many others.
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
    <div style="width: auto; height: 200px; background: none"></div>
    <p class="darker">email: <a class="contact-link" href="mailto:pakamera.kwartet@wp.pl">pakamera.kwartet@wp.pl</a></p>
    <p class="darker">phone: <a class="contact-link" href="tel:+48601734123">+48 601 734 123</a></p>
    <p class="darker">Facebook / Messenger: <a class="contact-link" href="https://www.facebook.com/pakamera.kwartetsmyczkowy" rel="noopener noreferrer" target=_blank>Pakamera Kwartet Smyczkowy</a></p>`;
    bioButton.classList.remove("inactive");
    projectsButton.classList.remove("inactive");
    }
);
