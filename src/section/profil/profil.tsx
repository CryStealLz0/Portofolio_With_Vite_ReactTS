import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";

export default function Profil() {
    return (
        <section className="profil" id="profil">
            <div className="containerProfil">
                <span className="bg-profil">
                    <p>
                        Saya adalah seorang mahasiswa di Universitas Pamulang
                        dengan Jurusan Teknik Informatika yang saat ini sedang
                        mendalami keahlian di bidang Front-End dan Back-End tapi
                        lebih condong ke Front-End.
                    </p>
                </span>
                <div className="isi-profil">
                    <div className="isi-kiri">
                        <ul>
                            <li>
                                <HtmlIcon fontSize="large" />
                                <p>Hypertext Markup Language</p>
                            </li>
                            <li>
                                <CssIcon fontSize="large" />
                                <p>Cascading Style Sheets</p>
                            </li>
                            <li>
                                <JavascriptIcon fontSize="large" />
                                <p>Java Script</p>
                            </li>
                        </ul>
                    </div>
                    <div className="isi">
                        <div className="isi-tengah"></div>
                        <div className="isi-kanan">
                            <h2>Dimas Indra Jaya</h2>
                            <p>Full Stack Developer</p>
                        </div>
                    </div>
                </div>
                <div className="autoText">
                    <div className="text-box">
                        <p className="text-auto text-type-1">
                            Hello Guys, You can call me
                            <span> JAYA</span>.
                        </p>
                        <p className="text-auto text-type-2">
                            I'm Web Developer from South Tangerang, Indonesia,
                            I'm currently
                        </p>
                        <p className="text-auto text-type-3">
                            focused on tech for building web-based app from
                            scratch, such as
                        </p>
                        <p className="text-auto text-type-4">
                            <a href="#">HTML</a>,<a href="#"> CSS</a>,
                            <a href="#"> JS</a>,<a href="#"> SASS</a>,
                            <a href="#"> Tailwind</a>,<a href="#"> GIT</a>,
                            <a href="#"> Vite</a> and
                            <a href="#"> ReactTS</a>.
                        </p>
                        <button type="submit" className="auto-text-button">
                            How can i help you?
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
