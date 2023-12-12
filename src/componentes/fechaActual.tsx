import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

const FuncionfechaActual = () => {
    const [fechaInicio, setFechaInicio] = useState('');

    useEffect(() => {
        // Obtener la fecha actual del sistema
        const fechaActual = DateTime.local().toFormat('yyyy-MM-dd');
        setFechaInicio(fechaActual);
    }, []); // El [] asegura que el efecto se ejecute solo una vez al montar el componente

    return (
        <div className="grid gap-4 grid-cols-2">
            <div className="col-span-2 sm:col-span-1">
                <label className=" block mb-2 text-sm font-medium text-gray-900 ">Fecha de Inicio</label>
                <input
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Fecha de Inicio"
                    type="date"
                    value={fechaInicio}
                    onChange={() => {}} 
                    readOnly
                />
            </div>

        </div>
    );
};

export default FuncionfechaActual;
