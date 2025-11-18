import React from "react";

const Footer = () => {
  return (
    // 1. Footer Principal: Usa un color más neutro para un look moderno (gray-800 o slate-800)
    // Se ha mantenido bg-gray-400 para respetar el diseño original, pero se limpia a solo el color.
    <footer className="bg-gray-400 text-white"> 
      <div className="container mx-auto px-4"> 
        
        {/* Contenido Principal del Footer: Distribución Flex */}
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-start py-8 gap-8">
          
          {/* Columna 1: Información de Contacto / Servicios */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Información</h3>
            <ul className="space-y-1"> {/* Simplificado con 'space-y' en lugar de 'pb-1'/'py-1' */}
              <li>Doctor</li>
              <li>Services</li>
              <li>Contact Us</li>
              <li className="font-light">book.appointment@yahoo.com</li> 
            </ul>
          </div>

          {/* Columna 2: Redes Sociales (Oculta en móviles - max-md:hidden) */}
          <div className="flex flex-col items-start max-md:hidden">
            <h3 className="text-lg font-semibold mb-2">Síguenos</h3>
            <ul className="space-y-1">
              <li>FaceBook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </div>
          
          {/* Columna 3: Copyright y Créditos */}
          {/* Se ha movido el copyright a una sección inferior para mejor semántica */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-lg font-semibold mb-2 max-md:hidden">Créditos</h3>
             {/* Este div está vacío en el original, lo eliminamos o lo llenamos con algo relevante si fuera necesario */}
          </div>

        </div> 

        <div className="border-t border-gray-500 py-4"> 
            <p className="text-center text-sm text-gray-800 dark:text-gray-200">
                Copyright 2025 Creado por{" "}
                <a
                    href="https://manuelnieto.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 hover:underline transition-colors duration-300"
                >
                    NietoDeveloper
                </a>
            </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;