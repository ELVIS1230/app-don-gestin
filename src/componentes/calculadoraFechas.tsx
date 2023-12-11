import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

const TuComponentePrincipal = () => {
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaCulminacion, setFechaCulminacion] = useState('');
    const [duracion, setDuracion] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        // Obtener la fecha actual del sistema
        const fechaActual = DateTime.local().toFormat('yyyy-MM-dd');
        setFechaInicio(fechaActual);
    }, []); // El [] asegura que el efecto se ejecute solo una vez al montar el componente

    const handleFechaCulminacionChange = (event) => {
        const nuevaFechaCulminacion = event.target.value;

        if (nuevaFechaCulminacion < fechaInicio) {
            setError('La "Fecha de Culminación" no puede ser anterior a la "Fecha de Inicio".');
        } else {
            setError('');
            setFechaCulminacion(nuevaFechaCulminacion);

            // Calcular la duración automáticamente al cambiar la fecha de culminación
            calcularDuracion(nuevaFechaCulminacion);
        }
    };

    const calcularDuracion = (nuevaFechaCulminacion) => {
        const fechaInicioParsed = DateTime.fromFormat(fechaInicio, 'yyyy-MM-dd');
        const fechaCulminacionParsed = DateTime.fromFormat(nuevaFechaCulminacion, 'yyyy-MM-dd');
    
        const diferencia = fechaCulminacionParsed.diff(fechaInicioParsed, ['years', 'months', 'days']);
        
        const anos = diferencia.years;
        const meses = diferencia.months;
        const dias = diferencia.days;
    
        setDuracion(`${anos} años, ${meses} meses, ${dias} días`);
    };

    return (
        <div>
            <div className="col-span-2 sm:col-span-1">
                <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de Inicio</label>
                <input
                    className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Fecha de Inicio"
                    type="date"
                    value={fechaInicio}
                    onChange={() => {}} 
                    readOnly
                />
            </div>

            <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de Culminación</label>
                <input
                    className={`mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                        error ? 'border-red-500' : ''
                    }`}
                    placeholder="Fecha de Culminación"
                    type="date"
                    value={fechaCulminacion}
                    onChange={handleFechaCulminacionChange}
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Duración</label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Duración"
                    type="text"
                    value={duracion}
                    readOnly
                />
            </div>
        </div>
    );
};

export default TuComponentePrincipal;
