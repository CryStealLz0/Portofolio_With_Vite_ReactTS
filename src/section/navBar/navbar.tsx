import NightsStayIcon from "@mui/icons-material/NightsStay";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Navbar() {
    return (
        <section className="iconTop" id="home">
            <div className="containerTop">
                <div className="icon">
                    <NightsStayIcon fontSize="large" />
                </div>
                <div className="text">
                    <h1>MyPortofolio</h1>
                </div>
                <div className="socialMedia">
                    <div className="media">
                        <LinkedInIcon fontSize="large" />
                    </div>
                    <div className="media">
                        <InstagramIcon fontSize="large" />
                    </div>
                    <div className="media">
                        <FacebookIcon fontSize="large" />
                    </div>
                </div>
            </div>
        </section>
    );
}
