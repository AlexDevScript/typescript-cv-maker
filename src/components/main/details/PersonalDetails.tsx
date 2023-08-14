import { FormEvents } from "../../../types";
import Input from "../../cv/Input";
import { useState } from "react";
import TemplateDetails from "./TemplateDetails";

interface FunctionSkills {
  getImage: (image: string) => void;
  getInfoCv: (e: FormEvents["change"]) => void;
}

interface Props {
  getFunctionSkills: FunctionSkills;
}

const PersonalDetails = ({ getFunctionSkills }: Props) => {
  const { getImage, getInfoCv } = getFunctionSkills;

  const [errorImage, setErrorImage] = useState(false);

  const handleChangeInformation = (e: FormEvents["change"]): void => {
    getInfoCv(e);
  };

  const handleImage = (e: FormEvents["change"]) => {
    const file = e.target.files?.[0];

    if (file) {
      if (!file.type.match("image/jpeg") && !file.type.match("image/png")) {
        return setErrorImage(true);
      }

      const maxSize = 600 * 1024;
      if (file.size > maxSize) {
        return setErrorImage(true);
      }
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      getImage(reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
      return setErrorImage(false);
    }
  };

  const removeImage = () => {
    getImage("");
  };
  return (
    <div>
      <TemplateDetails title="Información Personal">
        <Input
          width="w-11/12"
          type="text"
          inputName="name"
          placeholder="Nombre completo"
          onChange={handleChangeInformation}
        />

        <Input
          width="w-11/12"
          type="text"
          inputName="job"
          placeholder="Profesión"
          onChange={handleChangeInformation}
        />

        <label className="w-3/4  font-bold" htmlFor="photo">
          Selecciona tu fotografía
          <input
            title="Solo se permiten archivos JPG y PNG."
            id="photo"
            type="file"
            accept="image/png, image/jpeg"
            className="block w-[9.6rem] py-3 text-sm text-slate-500 file:mr-1 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold
                file:bg-violet-200 file:text-violet-700 hover:file:bg-violet-100"
            onChange={handleImage}
          />
        </label>
        <button
          className="w-14 h-14 rounded-full bg-slate-300  hover:bg-gray-400 "
          title="Eliminar Foto"
          onClick={removeImage}>
          🗑️
        </button>

        {errorImage && (
          <div
            role="alert"
            className="rounded border-s-4 border-red-500 bg-red-50 p-4">
            <button
              className="w-full flex justify-end"
              onClick={() => setErrorImage(false)}>
              ❌
            </button>
            <strong className="block font-medium text-red-800">
              Algo salio mal
            </strong>

            <p className="mt-2 text-sm text-red-700">
              El tamaño de la imagen no debe exceder los 600 KB y solo se
              permiten imagenes JPG y PNG.
            </p>
          </div>
        )}

        <Input
          type="text"
          inputName="telephone"
          placeholder="Teléfono"
          onChange={handleChangeInformation}
        />

        <Input
          type="email"
          inputName="email"
          placeholder="Email"
          onChange={handleChangeInformation}
        />

        <Input
          type="text"
          inputName="web"
          placeholder="Sitio web"
          onChange={handleChangeInformation}
        />
        <Input
          type="text"
          inputName="linkedin"
          placeholder="Linkedin"
          onChange={handleChangeInformation}
        />

        <Input
          type="text"
          inputName="address"
          placeholder="Dirección"
          onChange={handleChangeInformation}
        />
      </TemplateDetails>
    </div>
  );
};

export default PersonalDetails;
