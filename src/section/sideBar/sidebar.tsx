import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import PersonIcon from "@mui/icons-material/Person";

export default function Sidebar() {
    return (
        <nav className="sideBar">
            <div className="logo">
                <h1>Navbar</h1>
            </div>
            <ul>
                <li>
                    <a href="#home">
                        <HomeIcon fontSize="large" />
                    </a>
                </li>
                <li>
                    <a href="profil">
                        <PersonIcon fontSize="large" />
                    </a>
                </li>
                <li>
                    <a href="skils">
                        <AssessmentRoundedIcon fontSize="large" />
                    </a>
                </li>
                <li>
                    <a href="#sertificate">
                        <AssignmentIcon fontSize="large" />
                    </a>
                </li>
                <li>
                    <a href="contact">
                        <AssignmentIndRoundedIcon fontSize="large" />
                    </a>
                </li>
                {/* <li>
                                <a href="">
                                    <LightModeIcon fontSize="large" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <NightsStayIcon fontSize="large" />
                                </a>
                            </li> */}
            </ul>
            <a href="#">
                <SettingsRoundedIcon fontSize="large" />
            </a>
        </nav>
    );
}
