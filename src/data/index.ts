// import { IconType } from "react-icons";

export interface IBaseData {
    skills: ISkill[];
    sertificateCard: ISertificateCard[];
}

// Data
export interface ISkill {
    id: string;
    name: string;
    description: string;
    icon?: string | JSX.Element;
}

export interface ISertificateCard {
    id: string;
    judul: string;
    description: string;
}

// Props
export interface ISkillProps {
    skillData: ISkill[];
    // onReturnId: (data: string[]) => void;
}

export interface ISertificateCardProps {
    sertificateCardData: ISertificateCard[];
}
