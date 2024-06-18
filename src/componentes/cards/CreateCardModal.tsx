import axios from "axios";
import { useState } from "react";
import { MdOutlineAddCard } from "react-icons/md";
import {
  Button,
  Form,
  FormProps,
  Input,
  InputNumber,
  Modal as ModalA,
} from "antd";
import { Rules } from "@/utils/rules-validate";
type FieldType = {
  quantity?: number;
  name?: string;
  description?: string;
};

const Modal = ({ show, handleClose, credentialUser }: any) => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    card_name: "",
    card_description: "",
    card_quota: "",
    card_date_cutoff: "",
    card_date_due: "",
    bcard_id: "",
    saldo: "",
  });

  const [cardType, setCardType] = useState("");
  const [cardBrand, setCardBrand] = useState("");
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
    setShowCreditLimit(e.target.value === "1");
  };
  const handleChangeBrand = (e: any) => {
    setCardBrand(e.target.value);
    // setShowCreditLimit(e.target.value === '1');
  };

  const handleSaldoChange = (e: any) => {
    const inputValue = e.target.value;
    const regex = /^\d{0,10}(\.\d{0,2})?$/;
    if (regex.test(inputValue) || inputValue === "") {
      setFormData({
        ...formData,
        saldo: inputValue,
      });
    }
  };

  const handleCupoChange = (e: any) => {
    const inputValue = e.target.value;
    const regex = /^\d{0,10}(\.\d{0,2})?$/;
    if (regex.test(inputValue) || inputValue === "") {
      setFormData({
        ...formData,
        card_quota: inputValue,
      });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const values = await form.validateFields();
      console.log(values);
      const typecard_id = cardType === "1" ? 1 : 2;
      const bcard_id = cardBrand === "1" ? 1 : 2;
      let data = {};
      if (typecard_id === 1) {
        data = {
          card_name: values.name,
          card_description: values.description,
          card_quota: values.quota,
          // card_balance_total: formData.saldo,
          card_date_cutoff: values.date_cutoff,
          card_date_due: values.date_due,
          typecard_id_fk: { typecard_id: typecard_id },
          bcard_id_fk: { bcard_id: bcard_id },
          account_id_fk: { account_id: credentialUser.credentialUser.cuenta },
        };
      } else if (typecard_id === 2) {
        data = {
          card_name: formData.card_name,
          card_description: formData.card_description,
          typecard_id_fk: { typecard_id: typecard_id },
          bcard_id_fk: { bcard_id: bcard_id },
          account_id_fk: { account_id: credentialUser.credentialUser.cuenta },
        };
      }

      const response = await axios.post(
        "http://localhost:3000/api/cards",
        data
      );
      console.log(response.data);
      handleClose();
    } catch (error) {
      const message = error.response?.data?.message;
      ModalA.error({
        title: "Hubo un error",
        content: message ? message : "Ocurrio un error",
      });
    }

    // console.log(data);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Crear Nueva Tarjeta
          </h3>
          <button
            onClick={handleClose}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center
                    "
            data-modal-toggle="crud-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
        <Form
          form={form}
          name="basic"
          initialValues={{
            name: "",
            quota: 0,
            description: "",
            date_cutoff: "",
            date_due: "",
          }}
        >
          {/* className="p-4 md:p-5" onSubmit={handleSubmit}> */}
          <div className="grid gap-4 mb-4 grid-cols-2">
            <div className="col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Nombre de Banco
              </label>
              <Form.Item name="name" rules={[Rules.required]}>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                  name="card_name"
                  id="card_name"
                  value={formData.card_name}
                  onChange={handleInputChange}
                  placeholder="Banco"
                  type="text"
                />
              </Form.Item>
            </div>
            {/* <div className="col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900">Saldo Disponible</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                                placeholder="saldo"
                                type='number'
                                name='saldo'
                                id='saldo'
                                value={formData.saldo}
                                onChange={handleSaldoChange}
                            />
                        </div> */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Tipo de Tarjeta
              </label>
              <select
                value={cardType}
                onChange={handleChangeType}
                id="cardType"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 
                                focus:border-primary-500 block w-full p-2.5 "
              >
                <option>Selecciona un Tipo</option>
                <option value={1}>Crédito</option>
                <option value={2}>Débito</option>
              </select>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Modelo de Tarjeta
              </label>
              <select
                id="opciones"
                value={cardBrand}
                onChange={handleChangeBrand}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 
                                focus:border-primary-500 block w-full p-2.5 "
              >
                <option>Selecciona un Modelo</option>
                <option value={1}>Visa</option>
                <option value={2}>MasterCard</option>
                <option value={3}>Dinners Club</option>
              </select>
            </div>

            {showCreditLimit && (
              <div>
                <div className="col-span-2 sm:col-span-1 mt-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Cupo
                  </label>
                  <Form.Item
                    name="quota"
                    rules={[
                      Rules.required,
                      {
                        type: "number",
                        min: 1,
                        message: "El valor debe se mayor que cero!",
                      },
                    ]}
                  >
                    <InputNumber
                      min={1}
                      type="number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                      id="card_quota"
                      name="card_quota"
                    />
                  </Form.Item>
                </div>

                <div className="col-span-2 sm:col-span-1 mt-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Fecha de Corte
                  </label>
                  <Form.Item name="date_cutoff" rules={[Rules.required]}>
                    <input
                      type="date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      name="card_date_cutoff"
                      // value={formData.card_date_cutoff}
                      // onChange={handleInputChange}
                    />
                  </Form.Item>
                </div>

                <div className="col-span-2 sm:col-span-1 mt-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Fecha de Vencimiento
                  </label>
                  <Form.Item name="date_due" rules={[Rules.required]}>
                    <input
                      type="date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      name="date_due"
                      value={formData.card_date_due}
                      onChange={handleInputChange}
                    />
                  </Form.Item>
                </div>
              </div>
            )}

            <div className="col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Descripcion de la Tarjeta
              </label>
              <Form.Item name="description" rules={[Rules.required]}>
                <textarea
                  id="card_description"
                  name="card_description"
                  value={formData.card_description}
                  onChange={handleInputChange}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                  placeholder="Ejemplo:Tarjeta para comida,viajes,etc."
                ></textarea>
              </Form.Item>
            </div>
          </div>
          <button
            type="submit"
            className="text-white inline-flex items-center bg-black hover:bg-gray-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={handleSubmit}
          >
            <svg
              className="me-1 -ms-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Agregar Tarjeta
          </button>
        </Form>
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
      <button
        onClick={openModal}
        className="bg-black hover:bg-gray-800 text-white py-2 px-4 mr-1 rounded-lg ml-auto"
      >
        <MdOutlineAddCard size={25} />
      </button>
      <Modal
        show={showModal}
        handleClose={closeModal}
        credentialUser={credentialUser}
      />
    </div>
  );
}
