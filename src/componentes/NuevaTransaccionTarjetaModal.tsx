import { useState } from 'react';
import { MdOutlineAddCard } from "react-icons/md";
import { IoIosRemove } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";


const Modal = ({ show, handleClose, handleAccept }) => {
    const [amount, setAmount] = useState('');
    const [cardType, setCardType] = useState('');
    const [meta, setMeta] = useState('');
    const [incomeValue, setIncomeValue] = useState('');

    const handleInputChange = (e) => {
        setAmount(e.target.value);
    };

    const handleChange = (e) => {
        setCardType(e.target.value);
    };

    const handleMetaChange = (e) => {
        const inputValue = e.target.value;
        // Validar que la entrada sea un número con un máximo de 10 dígitos y 2 decimales
        const regex = /^\d{1,10}(\.\d{0,2})?$/;
        if (regex.test(inputValue) || inputValue === '') {
            setMeta(inputValue);
        }
    };

    const handleIncomeValueChange = (e) => {
        const inputValue = e.target.value;
        // Validar que la entrada sea un número con un máximo de 10 dígitos y 2 decimales
        const regex = /^\d{1,10}(\.\d{0,2})?$/;
        if (regex.test(inputValue) || inputValue === '') {
            setIncomeValue(inputValue);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Realiza la acción con los datos ingresados
        // Puedes llamar a la función handleAccept pasando los datos necesarios
        handleAccept({ cardType, amount, meta, incomeValue });
    };

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${show ? 'block' : 'hidden'}`}>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                    <div className="flex items-center justify-between border-b rounded-t mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 ">
                            Realizar Nueva Transacción
                        </h3>
                        <button onClick={handleClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-toggle="crud-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>

                    <div className="col-span-1 sm:col-span-2 mt-3"> {/* Ocupa una columna en dispositivos pequeños y dos en dispositivos medianos y mayores */}
                        <label className="block my-2 text-sm font-medium text-gray-900">Tipo de Transacción</label>
                        <select value={cardType} onChange={handleChange} id="opciones" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mb-4">
                            <option>Selecciona un Tipo</option>
                            <option value="Ingreso">Ingreso</option>
                            <option value="Gasto">Gasto</option>
                        </select>

                        {cardType === 'Gasto' && (
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">Ingrese Valor</label>
                                <div className="flex items-center"> {/* Utiliza la clase "flex items-center" */}
                                    <IoIosRemove size={35} className="mr-2 text-white bg-red-500 rounded-lg" />
                                    <input
                                        type="text"
                                        id="gasto"
                                        value={meta}
                                        onChange={handleMetaChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                        placeholder="100000000.00"
                                    />
                                </div>
                            </div>
                        )}

                        {cardType === 'Ingreso' && (
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">Ingrese Valor</label>
                                <div className="flex items-center"> {/* Utiliza la clase "flex items-center" */}
                                    <IoIosAdd size={35} className="mr-2 text-white bg-green-500 rounded-lg" />
                                    <input
                                        type="text"
                                        id="ingreso"
                                        value={incomeValue}
                                        onChange={handleIncomeValueChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                        placeholder="100000000.00"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    <button type="submit" className="mx-auto block text-white items-center 
                    bg-black hover:bg-gray-800 
                    font-medium rounded-lg text-sm px-5 
                    mt-4 py-2.5">
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
