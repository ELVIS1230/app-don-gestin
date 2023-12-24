import axios from 'axios';
import { useState } from 'react';

const Modal = ({ show, handleClose, credentialUser, selectedAhorroId, }: any) => {
    const [amount, setAmount] = useState('');

    const handleAmountChange = (e: { target: { value: any; }; }) => {
        const inputValue = e.target.value;

        // Validar que la entrada sea un número con un máximo de 10 dígitos y 2 decimales
        const regex = /^\d{1,10}(\.\d{0,2})?$/;

        if (regex.test(inputValue) || inputValue === '') {
            setAmount(inputValue);
        }
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // console.log(credentialUser)
        const data = {
            amount: parseFloat(amount),
            cuenta_id_fk: { cuenta_id: credentialUser.cuenta },
            ttrac_id_fk: { ttrac_id: 3},
            aho_id_fk: { aho_id: selectedAhorroId },
        };
        console.log(data)

        try {
            // Utiliza una solicitud PATCH para actualizar la cantidad de ahorro
            const response = await axios.patch('http://localhost:3000/api/savings/amount', data);
            console.log(response.data);

        } catch (error) {
            console.error('Error en la solicitud:', error);
        }

        // Limpia los campos y cierra el modal
        setAmount('');
        handleClose();
    };

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${show ? 'block' : 'hidden'}`}>
        <div className="bg-white p-4 rounded-lg shadow-md">

                <div className="flex items-center justify-between  md:p-5 border-b rounded-t">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Ahorrar
                    </h3>
                    <button onClick={handleClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-toggle="crud-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
                <form className=" md:p-5 " onSubmit={handleSubmit}>
                    <div className="grid gap-4 mb-4 grid-cols-2">

                        <div className="col-span-2">
                            <div>
                                <label className="block font-medium text-gray-900 text-base mb-2">
                                    Ingresa el Monto que quieres ahorrar
                                </label>
                                <input
                                    type="text"
                                    id="amount"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="100000000.00"
                                    name='amount'
                                    value={amount}  
                                    onChange={handleAmountChange}
                                />

                            </div>
                        </div>
                    </div>
                    <button type="submit" className="text-white inline-flex items-center bg-black hover:bg-gray-800 font-medium rounded-lg text-base px-5 py-2.5 text-center">
                        Actualizar
                    </button>

                </form>
            </div>
        </div>
    );
};


export default function ModalIngresoAhorro({ credentialUser, selectedAhorroId }:any) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
        console.log(selectedAhorroId, credentialUser)

    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="flex justify-center">
            <div className="flex justify-center">
                <button onClick={openModal} className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg">Ahorrar</button>
            </div>

            <Modal show={showModal} credentialUser={credentialUser} selectedAhorroId={selectedAhorroId} handleClose={closeModal} />
        </div>
    );
}

