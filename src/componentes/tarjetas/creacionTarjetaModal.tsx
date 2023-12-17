import axios from 'axios';
import { useState } from 'react';
import { MdOutlineAddCard } from 'react-icons/md';

const Modal = ({ show, handleClose, credentialUser }: any) => {
    const [formData, setFormData] = useState({
        tarj_nombre: '',
        tarj_descripcion: '',
        tarj_cupo: '',
        tarj_fecha_corte: '',
        tarj_fecha_vencimiento: '',
        mtarj_id: '',
        saldo: '',
    });

    const [cardType, setCardType] = useState('');
    const [showCreditLimit, setShowCreditLimit] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleChange = (e) => {

        setCardType(e.target.value);
        setShowCreditLimit(e.target.value === '1');

    };

    const handleSaldoChange = (e) => {
        const inputValue = e.target.value;
        const regex = /^\d{0,10}(\.\d{0,2})?$/;
        if (regex.test(inputValue) || inputValue === '') {
            setFormData({
                ...formData,
                saldo: inputValue,
            });
        }
    };

    const handleCupoChange = (e) => {
        const inputValue = e.target.value;
        const regex = /^\d{0,10}(\.\d{0,2})?$/;
        if (regex.test(inputValue) || inputValue === '') {
            setFormData({
                ...formData,
                tarj_cupo: inputValue,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const tiptarj_id = cardType === '1' ? 1 : 2

        const data = {
            tarj_nombre: formData.tarj_nombre,
            tarj_descripcion: formData.tarj_descripcion,
            tarj_cupo: formData.tarj_cupo,
            tarj_saldo_total: formData.saldo,
            tarj_fecha_corte: formData.tarj_fecha_corte,
            tarj_fecha_vencimiento: formData.tarj_fecha_vencimiento,
            tiptarj_id_fk:{tiptarj_id_fk: tiptarj_id},
            mtarj_id_fk: { mtarjIdFk: 1 },
            cuenta_id_fk: { cuenta_id: credentialUser.credentialUser.cuenta },
        };

        try {
            const response = await axios.post('http://localhost:3000/api/cards', data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }

        console.log(data);
        handleClose();
    };

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${show ? 'block' : 'hidden'}`}>
            <div className="bg-white p-6 rounded-lg shadow-md">

                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Crear Nueva Tarjeta
                    </h3>
                    <button onClick={handleClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center
                    " data-modal-toggle="crud-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
                <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label className='block mb-2 text-sm font-medium text-gray-900'>Nombre de Banco</label>
                            <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5'
                                name='tarj_nombre'
                                id='tarj_nombre'
                                value={formData.tarj_nombre}
                                onChange={handleInputChange}
                                placeholder="Banco" type="text" />
                        </div>
                        <div className="col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900">Saldo Disponible</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                                placeholder="saldo"
                                type='number'
                                name='saldo'
                                id='saldo'
                                value={formData.saldo}
                                onChange={handleSaldoChange}
                            />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Tipo de Tarjeta</label>
                            <select value={cardType} onChange={handleChange} id="cardType"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 
                                focus:border-primary-500 block w-full p-2.5 ">
                                <option >Selecciona un Tipo</option>
                                <option value={1}>Crédito</option>
                                <option value={2}>Débito</option>
                            </select>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Modelo de Tarjeta</label>
                            <select id="opciones"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 
                                focus:border-primary-500 block w-full p-2.5 ">
                                <option >Selecciona un Modelo</option>
                                <option >MasterCard</option>
                                <option >Visa</option>
                                <option >Dinners Club</option>
                            </select>
                        </div>

                        {showCreditLimit && (
                            <div >
                                <div className="col-span-2 sm:col-span-1">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Fecha de Corte</label>
                                    <input
                                        type='date'
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        name='tarj_fecha_corte'
                                        value={formData.tarj_fecha_corte}
                                        onChange={handleInputChange}
                                    />

                                </div>
                                <div className="col-span-2 sm:col-span-1 mt-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Cupo</label>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                                        id='tarj_cupo'
                                        name='tarj_cupo'
                                        value={formData.tarj_cupo}
                                        onChange={handleCupoChange}
                                        type='number' />
                                </div>
                            </div>
                        )}

                        <div className="col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900">Fecha de Vencimiento</label>
                            <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                name='tarj_fecha_vencimiento'
                                value={formData.tarj_fecha_vencimiento}
                                onChange={handleInputChange}

                            />
                        </div>


                        <div className="col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900">Descripcion de la Tarjeta</label>
                            <textarea
                                id='tarj_descripcion'
                                name='tarj_descripcion'
                                value={formData.tarj_descripcion}
                                onChange={handleInputChange}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                                placeholder="Ejemplo:Tarjeta para comida,viajes,etc."></textarea>
                        </div>
                    </div>
                    <button type="submit" className="text-white inline-flex items-center bg-black hover:bg-gray-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        Agregar Tarjeta
                    </button>
                </form>
            </div>
        </div>
    );
};

export default function ModalTarjeta(credentialUser: any) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="">
            <button onClick={openModal} className="bg-black hover:bg-gray-800 text-white py-2 px-4 mr-1 rounded-lg ml-auto">
                <MdOutlineAddCard size={25} />
            </button>
            <Modal show={showModal} handleClose={closeModal} credentialUser={credentialUser} />
        </div>
    );
};