import { InitialCv, ExperienceWork, NewList } from "../../../types";
import List from "../List";

interface Props {
  color: string;
  selectedImage: string | null;
  inputExperienceWork: ExperienceWork;
  listResponsabilitysWork: NewList[];
  listResponsabilitysWork2: NewList[];
  informationCv: InitialCv;
  isShowExperience: boolean;
}

const SectionInformation = ({
  color,
  selectedImage,
  inputExperienceWork,
  listResponsabilitysWork,
  listResponsabilitysWork2,
  informationCv,
  isShowExperience,
}: Props) => {
  const {
    name,
    job: profession,
    telephone,
    email,
    address,
    web,
  } = informationCv.information;
  const { aboutMe } = informationCv.aboutMe;

  const { company, period, job, company2, period2, job2 } = inputExperienceWork;

  return (
    <article className="w-9/12  relative text-white bg-white">
      <h3
        className="w-full mb-2 text-center text-xl font-bold tracking-wider"
        style={{ backgroundColor: color }}>
        INFORMACIÓN PERSONAL
      </h3>

      <div className="text-base flex flex-col mb-3 shadow-2xl text-black">
        <p className="capitalize text-center font-semibold text-lg">{name}</p>
        <p className="capitalize text-center border-b-2">{profession}</p>
        <div className="flex justify-evenly items-center">
          <div className="w-1/2 h-20 flex flex-col justify-evenly items-center border-b-2">
            <p className="font-semibold text-black ">Contacto</p>
            <p className="text-black">{telephone}</p>
            <p className="text-black">{email}</p>
          </div>

          {selectedImage && (
            <div className="w-2/5 h-32 flex justify-center  ">
              <img
                className="object-cover w-32 h-32  rounded-full"
                src={selectedImage}
                alt="fotografia"
              />
            </div>
          )}

          <div className="w-1/2 h-20 flex flex-col justify-evenly items-center border-b-2">
            <p className="font-semibold text-black">Dirección</p>
            <p className=" text-center text-black p-2">{address}</p>
          </div>
        </div>

        <div className="w-full flex flex-col justify-evenly items-center my-1">
          <p className="font-semibold text-black">Sitio Web - Portafolio</p>
          <a href={web} target="_blank">
            {web}
          </a>
        </div>
      </div>

      <div className=" mb-2 shadow-2xl">
        <h3
          className="w-full mb-2 text-center text-xl font-bold tracking-wider"
          style={{ backgroundColor: color }}>
          SOBRE MÍ
        </h3>
        <p className="py-1 px-5 text-base  text-black">{aboutMe}</p>
      </div>

      <div className="shadow-2xl">
        <h3
          className="w-full mb-2 text-center text-xl font-bold tracking-wider"
          style={{ backgroundColor: color }}>
          EXPERIENCIA LABORAL
        </h3>

        <div className="w-full flex flex-wrap justify-around gap-2 px-2 text-black">
          <p>
            <span className="font-bold">Empresa </span>
            {company}
          </p>
          <p>
            <span className="font-bold">Periodo </span> {period}
          </p>
          <p>
            <span className="font-bold">Puesto </span> {job}
          </p>

          <List lists={listResponsabilitysWork} nameList="Responsabilidades" />
        </div>
      </div>

      {isShowExperience && (
        <div className="shadow-2xl">
          <h3
            className="w-full mb-2 text-center text-xl font-bold tracking-wider"
            style={{ backgroundColor: color }}>
            EXPERIENCIA LABORAL
          </h3>

          <div className="w-full flex flex-wrap justify-around gap-2 px-2 text-black">
            <p>
              <span className="font-bold">Empresa </span>
              {company2}
            </p>
            <p>
              <span className="font-bold">Periodo </span> {period2}
            </p>
            <p>
              <span className="font-bold">Puesto </span>
              {job2}
            </p>
            <List
              lists={listResponsabilitysWork2}
              nameList="Responsabilidades"
            />
          </div>
        </div>
      )}
    </article>
  );
};

export default SectionInformation;
