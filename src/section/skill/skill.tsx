import { useState } from "react";
import { ISkill, ISkillProps } from "../../data";
import { FaHtml5, FaCss3Alt, FaJs, FaSass } from "react-icons/fa";

// import { FaHtml5 } from "react-icons/fa";

function Skills({ skillData }: ISkillProps) {
    console.log({ skillData });
    const [activeId, setActiveId] = useState<string[]>([]);
    // console.log({ activeId });
    const handleActiveCard = (id: string) => {
        // console.log("id masuk:", id);
        const checkIndexId = activeId.indexOf(id);
        // console.log({ checkIndexId });
        if (checkIndexId === -1) {
            if (activeId && activeId?.length > 0) {
                setActiveId((test) => [...(test as []), id]);
            } else {
                setActiveId([id]);
            }
        } else {
            setActiveId(activeId?.filter((item) => item !== id));
        }
    };
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
    return (
        <div className="skills">
            <div className="temaSkills">
                <h1>MySkills</h1>
                <p>
                    Saya harap dengan saya membuat data skills ini bisa membantu
                    untuk kalian menilai saya dalam menentukan seberapa mahir
                    saya ataupun kurangnya saya dalam aspek tertentu.
                </p>
            </div>
            <div className="containerSkills">
                {skillData.length > 0 ? (
                    skillData.map((Skills: ISkill) => (
                        <>
                            {/* <button
                                onClick={() => {
                                    handleActiveCard(Skills.id);
                                }}
                            ></button> */}
                            <div
                                className={
                                    activeId.includes(Skills.id)
                                        ? "boxCard active"
                                        : "boxCard"
                                }
                                onClick={() => {
                                    handleActiveCard(Skills.id);
                                }}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                                <div className="logo">
                                    {/* <div className="logonya">
                                    {Skills.icon ? Skills.icon : null}
                                </div> */}
                                    <div className="logonya">
                                        {Skills.icon
                                            ? skillIcon(Skills.icon as string)
                                            : null}
                                    </div>
                                </div>
                                <div className="cardSkills">
                                    <div className="cardSkillsIsi">
                                        <h3>{Skills.name}</h3>
                                        <p>{Skills.description}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                ) : (
                    <span>"Skills is not exited yet"</span>
                )}
            </div>
        </div>
    );
}

export default Skills;
