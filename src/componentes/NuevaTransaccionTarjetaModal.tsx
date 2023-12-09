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
        setShowCreditLimit(e.target.value === 'Ingreso')
        setShowCreditLimit(e.target.value === 'Gasto');
    }

    const [showCreditLimit, setShowCreditLimit] = useState(false);


    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${show ? 'block' : 'hidden'}`}>
            <div className="bg-white p-6 rounded-lg shadow-md">

                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Nueva Transacción
                    </h3>
                    <button onClick={handleClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
                <form className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">


                        <div className="col-span-2 sm:col-span-1">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de Transacción</label>
                            <select value={cardType} onChange={handleChange} id="opciones" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                <option >Selecciona un Tipo</option>
                                <option value="Ingreso">Ingreso</option>
                                <option value="Gasto">Gasto</option>
                            </select>
                        </div>

                        {showCreditLimit && (
                            <div >
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Saldo Disponible</label>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white "
                                        placeholder="saldo" type="saldo" />
                                </div>

                            </div>
                        )}

                    </div>
                    <button type="submit" className="text-white inline-flex items-center bg-black hover:bg-gray-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center self-center">
                        Enviar
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
            <button onClick={openModal} className="bg-black hover:bg-gray-800 text-white py-2 px-4 mr-1 rounded-lg ml-auto">
                Nueva Transaccion
            </button>
            <Modal show={showModal} handleClose={closeModal} handleAccept={handleAccept} />
        </div>
    );
};

export default ModalTarjeta;
