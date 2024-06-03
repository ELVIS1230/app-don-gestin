import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import axios from 'axios';
import { MdOutlineSavings } from "react-icons/md";
import { TbNewSection } from "react-icons/tb";


const Modal = ({ show, handleClose, credentialUser }: any) => {
    const [formData, setFormData] = useState({
        aho_name: '',
        aho_description: '',
        aho_meta_quantity: '',
        aho_total_amount: '',
        duration: '',
    });

    const [startDate, setStartDate] = useState('');
    const [dateCompletion, setDateCompletion] = useState('');
    const [duration, setDuration] = useState('');
    const [error, setError] = useState('');
    const [meta, setMeta] = useState('');

    const handleDurationChange = (e: { target: { value: any; }; }) => {
        const durationValue = e.target.value;
        setDuration(durationValue);
        setFormData({
            ...formData,
            duration: durationValue,
        });
    };

    useEffect(() => {
        const currentDate = DateTime.local().toFormat('yyyy-MM-dd');
        setStartDate(currentDate);
    }, []);

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleDateCompletionChange = (event: { target: { value: any; }; }) => {
        const nuevaDateCompletion = event.target.value;

        if (nuevaDateCompletion < startDate) {
            setError('The "Completion Date" cannot be earlier than the "Start Date."".');
        } else {
            setError('');
            setDateCompletion(nuevaDateCompletion);
            calcularDuration(nuevaDateCompletion);
        }
    };

    const calcularDuration = (nuevaDateCompletion: string) => {
        const startDateParsed = DateTime.fromFormat(startDate, 'yyyy-MM-dd');
        const dateCompletionParsed = DateTime.fromFormat(nuevaDateCompletion, 'yyyy-MM-dd');
        const diferencia = dateCompletionParsed.diff(startDateParsed, ['years', 'months', 'days']);
        const anos = diferencia.years;
        const months = diferencia.months;
        const dias = diferencia.days;

        let durationMensaje = '';
        if (anos > 0) {
            durationMensaje += `${anos} ${anos === 1 ? 'year' : 'years'}`;
        }

        if (months > 0) {
            durationMensaje += `${durationMensaje.length > 0 ? ', ' : ''}${months} ${months === 1 ? 'month' : 'months'}`;
        }

        if (dias > 0) {
            durationMensaje += `${durationMensaje.length > 0 ? ', ' : ''}${dias} ${dias === 1 ? 'day' : 'dayss'}`;
        }

        setDuration(durationMensaje);
        setFormData({
            ...formData,
            duration: durationMensaje,
        });
    };

    const handleMetaChange = (e: { target: { value: any; }; }) => {
        const inputValue = e.target.value;
        const regex = /^\d{1,10}(\.\d{0,2})?$/;

        if (regex.test(inputValue) || inputValue === '') {
            setMeta(inputValue);
            setFormData({
                ...formData,
                aho_meta_quantity: inputValue,
            });
        }
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const data = {
            aho_name: formData.aho_name,
            aho_description: formData.aho_description,
            aho_meta_quantity: formData.aho_meta_quantity,
            aho_total_amount: formData.aho_total_amount,
            cuenta_id_fk: { cuenta_id: credentialUser.credentialUser.cuenta },
            ttrac_id_fk: { ttrac_id_fk: 3 },
            aho_duration: formData.duration
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
                    Create New Savings Plan
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
                                name="aho_name"
                                id='aho_name'
                                value={formData.aho_name}
                                onChange={handleInputChange} />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">
                                    Goal
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="meta"
                                    name="meta"
                                    value={formData.aho_meta_quantity}
                                    onChange={handleMetaChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="100000000.00"
                                />
                            </div>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">
                                Amount to Save
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="aho_total_amount"
                                    name="aho_total_amount"
                                    value={formData.aho_total_amount}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="100000000.00"
                                />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="flex gap-4">
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Start date</label>
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
                                        placeholder="Fecha de Inicio"
                                        type="date"
                                        value={startDate}
                                        readOnly
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Due date</label>
                                    <input
                                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 ${error ? 'border-red-500' : ''
                                            }`}
                                        placeholder="Fecha de Culminación"
                                        type="date"
                                        value={dateCompletion}
                                        required
                                        onChange={handleDateCompletionChange}
                                    />
                                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                                </div>
                                <div className="flex-1">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Duration</label>
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
                                        type="text"
                                        id="duration"
                                        value={duration}
                                        onChange={handleDurationChange}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-900">Description</label>
                            <textarea
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                                placeholder="Ejemplo:Plan de ahorros para casa nueva, carro, viajes, etc."
                                required
                                name="aho_description"
                                value={formData.aho_description}
                                id="aho_description"
                                onChange={handleInputChange}

                            ></textarea>
                        </div>
                    </div>
                    <button type="submit" className="text-white inline-flex items-center bg-black hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
                        </svg>
                        Add Planvvvv
                    </button>
                </form>
            </div>
        </div>
    );
};

export default function ModalPlanAhorro(credentialUser: any) {
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
