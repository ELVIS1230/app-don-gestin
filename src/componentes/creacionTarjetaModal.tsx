import { useState } from 'react';
import { MdOutlineAddCard } from "react-icons/md";

const Modal = ({ show, handleClose, handleAccept }) => {
    const [amount, setAmount] = useState('');


    const [cardType, setCardType] = useState('');
    const handleInputChange = (e) => {
        setAmount(e.target.value);
    };

    function handleChange(e) {
        setCardType(e.target.value);
        setShowCreditLimit(e.target.value === 'Credito');
    }

    const [showCreditLimit, setShowCreditLimit] = useState(false);


    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${show ? 'block' : 'hidden'}`}>
            <div className="bg-white p-6 rounded-lg shadow-md">

                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Crear Nueva Tarjeta
                    </h3>
                    <button onClick={handleClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
                <form className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de Banco</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white " 
                            placeholder="Banco" type="Nombre" />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de Tarjeta</label>
                            <select value={cardType} onChange={handleChange} id="opciones" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option >Selecciona un Tipo</option>
                                <option value="Debito">Débito</option>
                                <option value="Credito">Crédito</option>
                            </select>
                        </div>

                        {showCreditLimit && (
                            <div >
                                <div className="col-span-2 sm:col-span-1">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de Corte</label>
                                    <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" />
                                </div>
                                <div className="col-span-2 sm:col-span-1 mt-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cupo</label>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white " 
                                    type="number" />
                                </div>
                            </div>
                        )}

                        <div className="col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de Vencimiento</label>
                            <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" />
                        </div>


                        <div className="col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion de la Tarjeta</label>
                            <textarea id="description"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Ejemplo:Tarjeta para comida,viajes,etc."></textarea>
                        </div>
                    </div>
                    <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        Agregar Tarjeta
                    </button>
                </form>
            </div>
        </div>
    );
};

const ModalTarjeta = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleAccept = (amount) => {
        // Aquí puedes realizar la acción con el número ingresado
        console.log(`Cantidad ingresada: ${amount}`);
        closeModal();
    };

    return (
        <div className="">
            <button onClick={openModal} className=" bg-black hover:bg-gray-800 text-white py-2 px-4 mr-1 rounded-lg ml-auto">
                <MdOutlineAddCard size={25} />
            </button>
            <Modal show={showModal} handleClose={closeModal} handleAccept={handleAccept} />
        </div>
    );
};

export default ModalTarjeta;
