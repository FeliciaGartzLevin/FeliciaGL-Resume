import ProfilePic from '../assets/img/profilbild.jpg'

const Homepage = () => {
    return (
        <div className="grid-system">
            <header>
                <nav className="navbar">
                    <a href="#" className="nav-logo">FGL</a>

                    <ul className="nav-menu">
                        <li className="nav-item"><a className="nav-link" href="#">Hem</a></li>
                        <li className="nav-item om-mig"><a className="nav-link" href="#Om-mig">Om mig</a></li>
                        <li className="nav-item"><a className="nav-link" href="#Kontakt">Kontakt</a></li>
                    </ul>
                    <div className="hamburger">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>
                <div className="top-container">
                    <section className="social-icons">
                        <ul>
                            <li><a className="social-links" href="mailto:felicia.gartz.levin@gmail.com" title="Skicka e-mail" alt="Länk till e-mailadress"><i className="fa-solid fa-envelope"></i></a></li>
                            <li><a className="social-links" href="https://github.com/FeliciaGartzLevin"><i className="fa-brands fa-github" title="GitHub" alt="Länk till GitHub"></i></a></li>
                            <li><a className="social-links" href="https://www.linkedin.com/in/felicia-gartz-levin-922334240/" title="Linkedin" alt="Länk till Linkedin"><i className="fa-brands fa-linkedin"></i></a></li>
                            <li><a className="social-links" href="assets/Felicia-Gartz-Levin-Resume.pdf" download="Felicia Gartz Levin CV" title="Ladda ner fullständigt CV i pdf" alt="Länk till att ladda ner fullständigt CV i pdf"><i className="fa-solid fa-file-arrow-down"></i></a></li>
                        </ul>
                    </section>
                    <section className="header-section">
                        <div className="profile-pic">
                            <img className="profile-pic" src={ProfilePic} alt="profilbild av Felicia Gartz Levin" />
                        </div>
                        <div className="header-text">
                            <h1>Felicia Gartz Levin</h1>
                            <h2>Front End Developer Student</h2>
                        </div>
                    </section>
                    <section className="scroll">
                        <p>Scrolla ner ➡</p>
                    </section>
                </div>
            </header>
            <main id="Om-mig">
                <div className="container">
                    <div className="text-container">
                        <div className="text-box presentation fade-bottom1">
                            <h2>Front End Developer</h2>
                            <p>Jag valde utbildningen Front End Developer-student på Medieinstitutet i Malmö eftersom jag tror att yrket är stimulerande och roligt,
                                med mycket problemlösning och skapande. Jag tror även att jobbet är fritt och flexibelt.
                                Med över sju års arbete inom vård och omsorg samt två årsprogram i kontaktskapande kommunikation (NVC), har jag vana vid att arbeta och
                                samarbeta med andra människor och tycker om att bolla idéer och jobba tillsammans på uppgifter.
                                Jag är dock mångsidig och kan även uppskatta att jobba självständigt.
                            </p>
                        </div>

                        <div className="text-box utbildning">
                            <h2>Utbildning</h2>
                            <div className="heading">
                                <h3>Front End Developer</h3>
                                <span>sept 2022 - maj 2024</span>
                            </div>
                            <p className="text-box-p">Medieinstitutet i Malmö</p>
                            <div className="heading">
                                <h3>Pedagogik A + B</h3>
                                <span>vt 2015 - ht 2015</span>
                            </div>
                            <p className="text-box-p">Umeå universitet</p>
                        </div>

                        <div className="text-box erfarenhet">
                            <h2>Erfarenhet</h2>
                            <div className="heading">
                                <h3>Personlig assistent</h3>
                                <span>okt 2015 - nuvarande extrarbete</span>
                            </div>
                            <p className="text-box-p">
                                Tillsvidareanställd med en och samma kund som under den tiden haft företagen Assistans För Dig, Humana och Passab. Under det sista ca 1,5 året var jag arbetsledare i assistansgruppen.
                                Utöver det har jag i perioder varit extra timanställd hos två andra kunder på Tindra respektive kunds egna assistansbolag.
                            </p>
                        </div>

                        <div className="text-box extra">
                            <h2>Övrigt</h2>
                            <p>
                                <ul>
                                    <li>B-körkort och god körvana.</li>
                                    <li>Livslång erfarenhet av djur, speciellt hästar och hundar.</li>
                                    <li>Två genomförda årsprogram i kontaktskapande kommunikation (NVC).</li>
                                </ul>
                            </p>
                            <h2>Referenser</h2>
                            <p>
                                Referenser ges på förfrågan.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <section className="sidebar">
                <div className="sidebar-container skills sidebar-img">
                    <h2>Färdigheter</h2>
                    <p className="skills-header">Vad jag lärt mig om än så länge på Medieinstitutet:</p>
                    <p className="skills-grid">
                        <span className="skill a">Vanilla Javascript</span>
                        <span className="skill b">Typescript</span>
                        <span className="skill c">Vite</span>
                        <span className="skill i">Bootstrap</span>
                        <span className="skill d">CSS</span>
                        <span className="skill e">SCSS</span>
                        <span className="skill f">HTML</span>
                        <span className="skill g">Accessibility</span>
                        <span className="skill h">Agila metoder</span>
                        <span className="skill h">Prisma</span>
                        <span className="skill h">Node.js</span>
                        <span className="skill h">Express.js</span>
                        <span className="skill h">Websockets</span>
                        <span className="skill h">RESTful API</span>
                    </p>
                    <p className="skills-undertext">Under utbildning. Mer kunskap på ingång.</p>
                </div>
                <div className="sidebar-container lang sidebar-img">
                    <h2>Språk</h2>
                    <p>
                        <ul className="lang">
                            <li className="lang"><img className="lang" src="./assets/swedishflag.jpg" alt="Sveriges flagga" /> Svenska (modersmål)</li>
                            <li className="lang"><img className="lang" src="./assets/UKflag.jpg" alt="Englands flagga" /> Engelska (talar obehindrat)</li>
                            <li className="lang"><img className="lang" src="./assets/germanflag.jpg" alt="Tysklands flagga" /> Tyska (nybörjare)</li>
                        </ul>
                    </p>
                </div>
                <div className="sidebar-container hobbies sidebar-img">
                    <h2>Hobbies</h2>
                    <p>
                        <ul>
                            <li className="hobbies"><i className="fa-solid fa-person-hiking"></i>Friluftsliv</li>
                            <li className="hobbies"><i className="fa-solid fa-leaf"></i>Djur och natur</li>
                            <li className="hobbies"><i className="fa-regular fa-heart"></i>Hälsa</li>
                        </ul>
                    </p>
                </div>
            </section>
            <footer>
                <div id="Kontakt" className="footer">
                    <h2>Kontakt</h2>
                    <p className="footer">
                        <ul className="footer">
                            <li className="li-footer"><i className="fa-solid fa-user"></i>Felicia Gartz Levin</li>
                            <li className="li-footer"><i className="fa-solid fa-location-dot"></i>Malmö</li>
                            <li className="li-footer"><a className="footer-links" href="mailto:felicia.gartz.levin@gmail.com" title="Skicka e-mailadress"><i className="fa-solid fa-envelope"></i>felicia.gartz.levin@gmail.com</a></li>
                            <li className="li-footer"><a className="footer-links" href="assets/Felicia-Gartz-Levin-Resume.pdf" download="Felicia Gartz Levin CV" title="Fullständigt CV i pdf"><i className="fa-solid fa-file-arrow-down"></i>Ladda ner fullständigt CV (pdf)</a></li>
                            <li className="li-footer"><a className="footer-links" href="https://github.com/FeliciaGartzLevin"><i className="fa-brands fa-github" title="GitHub" alt="Länk till GitHub"></i>GitHub</a></li>
                            <li className="li-footer"><a className="footer-links" href="https://www.linkedin.com/in/felicia-gartz-levin/" title="Linkedin" alt="Länk till Linkedin"><i className="fa-brands fa-linkedin"></i>Linkedin</a></li>
                        </ul>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Homepage