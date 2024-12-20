import { Camera, Upload } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RecipeUpload: React.FC = () => {
  const [nombre, setNombre] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre || !image) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }

    // Crear la nueva receta
    const newRecipe = {
      title: nombre,
      description: file ? file.name : "Nueva receta subida",
      image: URL.createObjectURL(image),
      date: new Date().toLocaleDateString("es-ES"),
    };

    // Redirigir a la página de recetas con el estado de la nueva receta
    navigate("/Recipe", { state: { newRecipe } });
  };

  return (
    <form onSubmit={handleSubmit} className="min-h-screen bg-[#c5d1d1] p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-1xl shadow-xl overflow-hidden">
        <div className="bg-[#e8a69f] py-6 px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            <span className="text-[#c5d1d1]">CREA</span> TU NUEVA RECETA
          </h1>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          <input
            type="text"
            placeholder="Nombre de la receta"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full py-3 px-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e8a69f]"
          />

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-4">
              <label className="aspect-square bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-[#e8a69f] transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                  className="hidden"
                />
                {image ? (
                  <img src={URL.createObjectURL(image)} alt="Vista previa" className="w-3/4 h-3/4 object-cover" />
                ) : (
                  <>
                    <Camera className="w-10 h-10 text-gray-500" />
                    <span className="mt-4 text-sm text-gray-600">Añadir imagen</span>
                  </>
                )}
              </label>
            </div>

            <div className="flex-1 space-y-6">
              <label className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg text-gray-700 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
                <input
                  type="file"
                  accept=".pdf,.doc,.ppt"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="hidden"
                />
                <Upload className="w-5 h-5 mr-2" />
                {file ? file.name : "Subir Archivo"}
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#e8a69f] text-white rounded-lg font-semibold text-lg hover:bg-[#d89589] transition-colors"
          >
            Subir Receta
          </button>
        </div>
      </div>
    </form>
  );
};

export default RecipeUpload;
