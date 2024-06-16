import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import axios from 'axios';
import { MdOutlineSavings } from "react-icons/md";
import { TbNewSection } from "react-icons/tb";


const Modal = ({ show, handleClose, credentialUser }: any) => {
    const [formData, setFormData] = useState({
        saving_name: '',
        saving_description: '',
        saving_goal_quantity: '',
        saving_quantity_total: '',
        saving_duration: '',
    });

    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaCulminacion, setFechaCulminacion] = useState('');
    const [saving_duration, setDuracion] = useState('');
    const [error, setError] = useState('');
    const [meta, setMeta] = useState('');

    const handleDuracionChange = (e: { target: { value: any; }; }) => {
        const duracionValue = e.target.value;
        setDuracion(duracionValue);
        setFormData({
            ...formData,
            saving_duration: duracionValue,
        });
    };

    useEffect(() => {
        const fechaActual = DateTime.local().toFormat('yyyy-MM-dd');
        setFechaInicio(fechaActual);
    }, []);

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFechaCulminacionChange = (event: { target: { value: any; }; }) => {
        const nuevaFechaCulminacion = event.target.value;

        if (nuevaFechaCulminacion < fechaInicio) {
            setError('La "Fecha de Culminación" no puede ser anterior a la "Fecha de Inicio".');
        } else {
            setError('');
            setFechaCulminacion(nuevaFechaCulminacion);
            calcularDuracion(nuevaFechaCulminacion);
        }
    };

    const calcularDuracion = (nuevaFechaCulminacion: string) => {
        const fechaInicioParsed = DateTime.fromFormat(fechaInicio, 'yyyy-MM-dd');
        const fechaCulminacionParsed = DateTime.fromFormat(nuevaFechaCulminacion, 'yyyy-MM-dd');
        const diferencia = fechaCulminacionParsed.diff(fechaInicioParsed, ['years', 'months', 'days']);
        const anos = diferencia.years;
        const meses = diferencia.months;
        const dias = diferencia.days;

        let duracionMensaje = '';
        if (anos > 0) {
            duracionMensaje += `${anos} ${anos === 1 ? 'año' : 'años'}`;
        }

        if (meses > 0) {
            duracionMensaje += `${duracionMensaje.length > 0 ? ', ' : ''}${meses} ${meses === 1 ? 'mes' : 'meses'}`;
        }

        if (dias > 0) {
            duracionMensaje += `${duracionMensaje.length > 0 ? ', ' : ''}${dias} ${dias === 1 ? 'día' : 'días'}`;
        }

        setDuracion(duracionMensaje);
        setFormData({
            ...formData,
            saving_duration: duracionMensaje,
        });
    };

    const handleMetaChange = (e: { target: { value: any; }; }) => {
        const inputValue = e.target.value;
        const regex = /^\d{1,10}(\.\d{0,2})?$/;

        if (regex.test(inputValue) || inputValue === '') {
            setMeta(inputValue);
            setFormData({
                ...formData,
                saving_goal_quantity: inputValue,
            });
        }
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const data = {
            saving_name: formData.saving_name,
            saving_description: formData.saving_description,
            saving_goal_quantity: formData.saving_goal_quantity,
            saving_quantity_total: formData.saving_quantity_total,
            account_id_fk: { account_id: credentialUser.credentialUser.cuenta },
            ttrac_id_fk: { ttrac_id_fk: 3 },
            saving_duration: formData.saving_duration
        };

        try {
            const response = await axios.post('http://localhost:3000/api/savings', data);
            console.log(response.data);

        } catch (error) {
            console.error('Error en la solicitud:', error);
        }


        console.log(data);
        handleClose();

    };

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${show ? 'block' : 'hidden'}`}>
            <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-between md:p-5 border-b rounded-t">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Crear Nuevo Plan de Ahorro
                    </h3>
                    <button onClick={handleClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-toggle="crud-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
                <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900">Nombre del Plan</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Nombre"
                                type="text"
                                required
                                name="saving_name"
                                id='saving_name'
                                value={formData.saving_name}
                                onChange={handleInputChange} />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">
                                    Meta
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="meta"
                                    name="meta"
                                    value={formData.saving_goal_quantity}
                                    onChange={handleMetaChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="100000000.00"
                                />
                            </div>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">
                                    Monto a Ahorrar
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="saving_quantity_total"
                                    name="saving_quantity_total"
                                    value={formData.saving_quantity_total}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="100000000.00"
                                />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="flex gap-4">
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Fecha de Inicio</label>
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
                                        placeholder="Fecha de Inicio"
                                        type="date"
                                        value={fechaInicio}
                                        readOnly
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Fecha de Culminación</label>
                                    <input
                                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 ${error ? 'border-red-500' : ''
                                            }`}
                                        placeholder="Fecha de Culminación"
                                        type="date"
                                        value={fechaCulminacion}
                                        required
                                        onChange={handleFechaCulminacionChange}
                                    />
                                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                                </div>
                                <div className="flex-1">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Duración</label>
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
                                        type="text"
                                        id="saving_duration"
                                        value={saving_duration}
                                        onChange={handleDuracionChange}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-900">Descripcion</label>
                            <textarea
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                                placeholder="Ejemplo:Plan de ahorros para casa nueva, carro, viajes, etc."
                                required
                                name="saving_description"
                                value={formData.saving_description}
                                id="saving_description"
                                onChange={handleInputChange}
                                
                            ></textarea>
                        </div>
                    </div>
                    <button type="submit" className="text-white inline-flex items-center bg-black hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
                        </svg>
                        Agregar Plan
                    </button>
                </form>
            </div>
        </div>
    );
};

export default function ModalSavingPlan(credentialUser: any) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="flex justify-center">
            <button
                onClick={openModal}
                className="bg-black hover:bg-gray-800 text-white py-2 px-4 mr-1 rounded-lg ml-auto"
            >
                <TbNewSection size={30} />
            </button>
            <Modal show={showModal} credentialUser={credentialUser} handleClose={closeModal} />
        </div>
    );
};
