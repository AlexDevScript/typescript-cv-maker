import { Color, InitialCv, ListsWork } from "../../../types";
import List from "../List";

interface Props {
  changeColor: Color;
  selectedImage: string | null;
  listsWork: ListsWork;
  informationCv: InitialCv;
  isShowExperience: boolean;
}

const SectionInformation = ({
  changeColor,
  selectedImage,
  listsWork,
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
    linkedin,
  } = informationCv.information;
  const { aboutMe } = informationCv.aboutMe;

  const {
    listExperienceWork,
    listResponsabilitysWork,
    listResponsabilitysWork2,
  } = listsWork;

  const { company, period, job, company2, period2, job2 } = listExperienceWork;

  const { color } = changeColor;

  return (
    <article className="w-[90%] relative text-white bg-white">
      <h3
        className="w-full uppercase mb-1 text-center text-xl font-bold tracking-wider"
        style={{ backgroundColor: color }}>
        Información Personal
      </h3>

      <div className="text-base flex flex-col mb-2 shadow-2xl text-black">
        <p className="capitalize text-center text-lg  font-semibold">{name}</p>
        <p className="capitalize text-center font-semibold border-b-2 mb-3">
          {profession}
        </p>
        <div className="flex items-center">
          <div className="w-1/2 h-28 flex flex-col justify-evenly items-center">
            <p className="font-semibold text-black">Contacto</p>
            <p className="text-black">📞{telephone}</p>
            <p className="text-black">📧{email}</p>
          </div>

          {selectedImage && (
            <div className="w-44 h-34 flex justify-center [clip-path:polygon(50%_0%,90%_20%,100%_60%,75%_100%,25%_100%,0%_60%,10%_20%)] -mt-2">
              <img
                className="w-full object-cover"
                src={selectedImage}
                alt="fotografia"
              />
            </div>
          )}

          <div className="w-1/2 h-20 flex flex-col justify-evenly items-center">
            <p className="font-semibold text-black">🏠Dirección</p>
            <p className=" text-center text-black">{address}</p>
          </div>
        </div>

        <div className="w-full h-16 flex flex-col justify-evenly">
          <div className="w-full flex justify-center ">
            <p className="w-32 text-center font-semibold text-black">
              Linkedin
            </p>
            <a href={linkedin} target="_blank">
              {linkedin}
            </a>
          </div>
          <div className="w-full flex justify-center">
            <p className="w-56 text-center font-semibold text-black">
              Sitio Web - Portafolio
            </p>
            <a href={web} target="_blank">
              {web}
            </a>
          </div>
        </div>
      </div>

      <div className=" mb-2 shadow-2xl">
        <h3
          className="w-full uppercase mb-2 text-center text-xl font-bold tracking-wider"
          style={{ backgroundColor: color }}>
          Sobre Mí
        </h3>
        <p className="py-1 px-5 text-base  text-black">{aboutMe}</p>
      </div>

      <div className="mb-2 shadow-2xl">
        <h3
          className="w-full mb-2 uppercase text-center text-xl font-bold tracking-wider"
          style={{ backgroundColor: color }}>
          Experiencia Laboral
        </h3>

        <div className="w-full flex flex-wrap justify-around gap-1 pl-2 text-black">
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
          <List lists={listResponsabilitysWork} />
        </div>
      </div>

      {isShowExperience && (
        <div className="shadow-2xl">
          <h3
            className="w-full uppercase mb-2 text-center text-xl font-bold tracking-wider"
            style={{ backgroundColor: color }}>
            Experiencia Laboral
          </h3>

          <div className="w-full flex flex-wrap justify-around gap-1 pl-2 text-black">
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

            <List lists={listResponsabilitysWork2} />
          </div>
        </div>
      )}
    </article>
  );
};

export default SectionInformation;
