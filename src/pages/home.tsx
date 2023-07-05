import React from "react";
// Import Data
import { IBaseData } from "../data";
import data from "../data.json";
// Import style
import "../styles/_main.scss";
// Import Section
import Sidebar from "../section/sideBar/sidebar";
import Navbar from "../section/navBar/navbar";
import Profil from "../section/profil/profil";
import Skills from "../section/skill/skill";
import SertifikatCard from "../section/sertifikat/sertifikatCard";
import IsiSertifikat from "../section/sertifikat/isiSertifikat";
import { FaHtml5, FaCss3Alt, FaJs, FaSass } from "react-icons/fa";
// import shadows from "@mui/material/styles/shadows";
function App() {
    const [responses] = React.useState<IBaseData>(data);

    const skillIcon = (icon: string) => {
        if (icon === "html5") {
            return (
                <FaHtml5
                    className="logonya"
                    style={{
                        color: "#F16529",
                        filter: "drop-shadow(0px 0px 10px white)",
                    }}
                />
            );
        }
        if (icon === "css") {
            return (
                <FaCss3Alt
                    className="logonya"
                    style={{
                        color: "#2965F1",
                        filter: "drop-shadow(0px 0px 10px white)",
                    }}
                />
            );
        }
        if (icon === "js") {
            return (
                <FaJs
                    className="logonya"
                    style={{
                        color: "#EAD41C",
                        filter: "drop-shadow(0px 0px 10px black)",
                    }}
                />
            );
        }
        if (icon === "sass") {
            return (
                <FaSass
                    className="logonya"
                    style={{
                        color: "#C36291",
                        filter: "drop-shadow(0px 0px 10px white)",
                    }}
                />
            );
        }
    };

    const mapSkills = responses.skills.map((value) => {
        // const icon = skillIcon((value?.icon as string) || "");
        const icon = value?.icon || "";

        const mantul = {
            ...value,
            icon: icon,
        };
        return mantul;
    });

    return (
        <>
            <div className="background">
                <header>
                    {/* Sidebar */}
                    <Sidebar />
                </header>

                <main>
                    {/* Navbar */}
                    <Navbar />
                    {/* profil */}
                    <Profil />
                    {/* Skills */}
                    <Skills skillData={mapSkills} />
                    {/* SertificateCard */}
                    <SertifikatCard
                        sertificateCardData={responses.sertificateCard}
                    />
                    {/* IsiSertificate */}
                    <IsiSertifikat />
                </main>
            </div>
        </>
    );
}

export default App;
