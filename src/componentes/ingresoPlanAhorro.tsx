import { useState } from 'react';

const Modal = ({ show, handleClose, handleAccept }) => {

    const [meta, setMeta] = useState('');

    const handleMetaChange = (e) => {
        const inputValue = e.target.value;

        // Validar que la entrada sea un número con un máximo de 10 dígitos y 2 decimales
        const regex = /^\d{1,10}(\.\d{0,2})?$/;

        if (regex.test(inputValue) || inputValue === '') {
            setMeta(inputValue);
        }
    };

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${show ? 'block' : 'hidden'}`}>

            <div className="bg-white p-4 rounded-lg shadow-md">

                <div className="flex items-center justify-between  md:p-5 border-b rounded-t">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Ahorrar
                    </h3>
                    <button onClick={handleClose} type="button" className="text-gray-400 bg-transparent 
                    hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 
                    ms-auto inline-flex justify-center items-center" data-modal-toggle="crud-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
                <form className=" md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">

                        <div className="col-span-2">
                            <div>
                                <label className="block text-sm font-medium text-gray-900">
                                    Ingresa el Valor
                                </label>
                                <input
                                    type="text" // Cambiado a tipo texto para permitir el uso de la expresión regular
                                    id="input"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="100000000.00"
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="text-white inline-flex items-center bg-black hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
                        </svg>
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    );};

const ModalIngresoAhorro = () => {
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
            <div className="flex justify-center">
                <button onClick={openModal} className=" bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg" >Ahorrar</button>
            </div>
            <Modal show={showModal} handleClose={closeModal} handleAccept={handleAccept} />
        </div>
    );
};

export default ModalIngresoAhorro;
