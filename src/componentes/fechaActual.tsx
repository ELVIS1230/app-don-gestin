import { useEffect, useState } from 'react';

const FechaActual = () => {
  const [fechaActual, setFechaActual] = useState('');

  useEffect(() => {
    const obtenerFechaActual = () => {
      const fecha = new Date();
      const mes = fecha.getMonth() + 1;
      const dia = fecha.getDate();
      const ano = fecha.getFullYear();

      const formatoDia = dia < 10 ? `0${dia}` : dia;
      const formatoMes = mes < 10 ? `0${mes}` : mes;

      setFechaActual(`${formatoDia}-${formatoMes}-${ano}`);
    };

    obtenerFechaActual();

    // Cleanup function to remove event listener if component unmounts
    return () => window.removeEventListener('load', obtenerFechaActual);
  }, []);

  return (
    <input
      type="text"
      id="fechaActual"
      value={fechaActual}
      readOnly
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
    />
  );
};

export default FechaActual;
