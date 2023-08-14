export interface PersonalInfo {
  name: string;
  job: string;
  image: string | null;
  telephone: string;
  email: string;
  address: string;
  web: string;
  linkedin: string;
}

export interface NewList {
  id: string;
  date: string;
}

export interface Skills {
  languages: string;
  librarys: string;
  tools: string;
}

export interface AboutMe {
  aboutMe: string;
}

export interface InitialCv {
  information: PersonalInfo;
  skills: Skills;
  aboutMe: AboutMe;
}

export interface ExperienceWork {
  company: string;
  period: string;
  job: string;
  company2: string;
  period2: string;
  job2: string;
}

export interface Academy {
  level: string;
  academy: string;
  period: string;
  certificate: string;
  profession: string;
}

export interface ListsInfo {
  listSkill: NewList[];
  listLanguages: NewList[];
  informationCv: InitialCv;
  selectedImage: string | null;
}

export interface ListsWork {
  listExperienceWork: ExperienceWork;
  listResponsabilitysWork: NewList[];
  listResponsabilitysWork2: NewList[];
}

export interface Color {
  color: string;
  handleChangeColor: (e: FormEvents["change"]) => void;
  handleResetColor: () => void;
  rgbaColor: string;
  initialColorRgba: string;
}

export type FormEvents = {
  change: React.ChangeEvent<HTMLInputElement | HTMLTextArea>;
};
