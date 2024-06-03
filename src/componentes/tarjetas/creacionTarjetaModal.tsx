import axios from 'axios';
import { useState } from 'react';
import { MdOutlineAddCard } from 'react-icons/md';

const Modal = ({ show, handleClose, credentialUser }: any) => {
    const [formData, setFormData] = useState({
        card_name : '',
        card_description: '',
        quota_card: '',
        cut_date_card: '',
        expiration_date_card: '',
        mcard_id: '',
        balance: '',
    });

    const [cardType, setCardType] = useState('');
    const [cardBrand, setCardBrand] = useState('');
    const [showCreditLimit, setShowCreditLimit] = useState(false);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleChangeType = (e: any) => {
        setCardType(e.target.value);
        setShowCreditLimit(e.target.value === '1');

    };
    const handleChangeBrand = (e: any) => {
        setCardBrand(e.target.value);
        // setShowCreditLimit(e.target.value === '1');

    };

    const handleBalanceChange = (e: any) => {
        const inputValue = e.target.value;
        const regex = /^\d{0,10}(\.\d{0,2})?$/;
        if (regex.test(inputValue) || inputValue === '') {
            setFormData({
                ...formData,
                balance: inputValue,
            });
        }
    };

    const handleCupoChange = (e: any) => {
        const inputValue = e.target.value;
        const regex = /^\d{0,10}(\.\d{0,2})?$/;
        if (regex.test(inputValue) || inputValue === '') {
            setFormData({
                ...formData,
                quota_card: inputValue,
            });
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const tipcard_id = cardType === '1' ? 1 : 2
        const mcard_id = cardBrand === '1' ? 1 : 2
        let data = {}
        if(tipcard_id === 1){
             data = {
                card_name : formData.card_name ,
                card_description: formData.card_description,
                quota_card: parseFloat(formData.quota_card),
                // tarj_balance_total: formData.balance,
                cut_date_card: formData.cut_date_card,
                expiration_date_card: formData.expiration_date_card,
                tipcard_id_fk: { tipcard_id: tipcard_id },
                mcard_id_fk: { mcard_id: mcard_id },
                account_id_fk: { account_id: credentialUser.credentialUser.account },
            };
        }else if(tipcard_id ===2){
            data = {
                card_name : formData.card_name ,
                card_description: formData.card_description,
                tipcard_id_fk: { tipcard_id: tipcard_id },
                mcard_id_fk: { mcard_id: mcard_id },
                account_id_fk: { account_id: credentialUser.credentialUser.account },
            };
        }

        try {
            const response = await axios.post('http://localhost:3000/api/cards', data);
            console.log(response.data);

        } catch (error) {
            console.error(error);
        }

        // console.log(data);
        handleClose();
    };

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${show ? 'block' : 'hidden'}`}>
            <div className="bg-white p-6 rounded-lg shadow-md">

                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Create New Card
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
                            <label className='block mb-2 text-sm font-medium text-gray-900'>Bank Namevv</label>
                            <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5'
                                name='card_name '
                                id='card_name '
                                value={formData.card_name }
                                onChange={handleInputChange}
                                placeholder="Banco" type="text" />
                        </div>
                        {/* <div className="col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900">balance Disponible</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                                placeholder="balance"
                                type='number'
                                name='balance'
                                id='balance'
                                value={formData.balance}
                                onChange={handlebalanceChange}
                            />
                        </div> */}
                        <div className="col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Card Type</label>
                            <select value={cardType} onChange={handleChangeType} id="cardType"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 
                                focus:border-primary-500 block w-full p-2.5 ">
                                <option >Select a Type</option>
                                <option value={1}>Credit</option>
                                <option value={2}>Debit</option>
                            </select>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Card Model</label>
                            <select id="opciones" value={cardBrand} onChange={handleChangeBrand}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 
                                focus:border-primary-500 block w-full p-2.5 ">
                                <option >Select a Model</option>
                                <option value={1}>Visa</option>
                                <option value={2}>MasterCard</option>
                                <option value={3}>Dinners Club</option>
                            </select>
                        </div>

                        {showCreditLimit  && (
                            <div >
                                <div className="col-span-2 sm:col-span-1 mt-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Quota</label>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                                        id='quota_card'
                                        name='quota_card'
                                        value={formData.quota_card}
                                        onChange={handleCupoChange}
                                        type='number' />
                                </div>

                                <div className="col-span-2 sm:col-span-1 mt-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Cutoff date</label>
                                    <input
                                        type='date'
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        name='cut_date_card'
                                        value={formData.cut_date_card}
                                        onChange={handleInputChange}
                                    />

                                </div>

                                <div className="col-span-2 sm:col-span-1 mt-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Due date</label>
                                    <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        name='expiration_date_card'
                                        value={formData.expiration_date_card}
                                        onChange={handleInputChange}

                                    />
                                </div>
                                </div>
                        )}



                        <div className="col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900">Card Description</label>
                            <textarea
                                id='card_description'
                                name='card_description'
                                value={formData.card_description}
                                onChange={handleInputChange}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                                placeholder="Ejemplo:Tarjeta para comida,viajes,etc."></textarea>
                        </div>
                    </div>
                    <button type="submit" className="text-white inline-flex items-center bg-black hover:bg-gray-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        Add Card
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