import axios from "axios";
import { useState } from "react";
import {
  Button,
  Form,
  FormProps,
  Input,
  InputNumber,
  Modal as ModalA,
} from "antd";
import { Rules } from "@/utils/rules-validate";

export function Modal({ show, handleClose, cardID }: any) {
  const [form] = Form.useForm();
  const [value, setValue] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [valueError, setValueError] = useState("");
  const [movementType, setMovementType] = useState("");
  const [typetrac, setTypetrac] = useState(0);
  const [cardType, setCardType] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [valueVisible, setValueVisible] = useState(false);

  // const handleAcceptClick = async () => {
  //   let isValid = true;
  //   const values = await form.validateFields();

  //   const letters = /^[a-zA-Z]*$/;
  //   // Validaciones para el campo de valor numérico
  //   const regex = /^\d{1,10}(\.\d{0,2})?$/;
  //   if (!regex.test(value)) {
  //     setValueError("Por favor ingrese un valor numérico válido.");
  //     isValid = false;
  //   } else {
  //     setValueError("");
  //   }

  //   // Validaciones para los campos de texto
  //   if (["2", "1"].includes(movementType)) {
  //     if (name.length > 35) {
  //       setNameError("El nombre debe tener menos de 35 caracteres.");
  //       isValid = false;
  //     } else {
  //       setNameError("");
  //     }

  //     if (description.length > 35) {
  //       setDescriptionError(
  //         "La descripción debe tener menos de 35 caracteres."
  //       );
  //       isValid = false;
  //     } else {
  //       setDescriptionError("");
  //     }
  //   }

  //   if (description.length > 35 || !letters.test(description)) {
  //     setDescriptionError('La descripción debe tener menos de 35 caracteres válidos.');
  //     isValid = false;
  //     return null;
  //   } else {
  //     setDescriptionError('');

  //   }

  //   if (!regex.test(value)) {
  //     setValueError('Por favor ingrese un valor numérico válido.');
  //     isValid = false;
  //   } else {
  //     setValueError('');
  //   }

  //   console.log(nameError, descriptionError)
  //   // Validación de campos requeridos
  //   if (
  //     isValid &&
  //     value &&
  //     movementType &&
  //     ["2", "1"].includes(movementType) &&
  //     name &&
  //     description
  //   ) {
  //     console.log(nameError, descriptionError)
  //     const cantidad = parseFloat(value);
  //     const ttrac = parseFloat(movementType);
  //     setCantidad(cantidad);
  //     setTypetrac(ttrac);
  //     //   console.log(cantidad);
  //     //   console.log(ttrac);
  //     const data = {
  //       trasac_name: name,
  //       trasac_description: description,
  //       trasac_quantity: cantidad,
  //       ttrac_id_fk: { ttrac_id: ttrac },
  //       card_id_fk: { card_id: cardID },
  //     };

  //     console.log(data);
  //     try {
  //       const response = await axios.post(
  //         "http://localhost:3000/api/transactions/cards",
  //         data
  //       );
  //     } catch (error) {
  //       console.error(error);
  //     }

  //     handleClose();
  //     handleResetFields();
  //   }
  //   else {
  //     setDescriptionError('Complete los campos');
  //   }
  // };
  const onSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log("Form is valid:", values);
      const ttrac = parseFloat(movementType);
      const data = {
        trasac_name: values.name,
        trasac_description: values.description,
        trasac_quantity: values.quantity,
        ttrac_id_fk: { ttrac_id: ttrac },
        card_id_fk: { card_id: cardID },
      };
      const response = await axios.post(
        "http://localhost:3000/api/transactions/cards",
        data
      );
      handleClose();
      handleResetFields();
      console.log(response);
      console.log(data);
    } catch (error) {
      const message = error.response?.data?.message;
      ModalA.error({
        title: "Hubo un error",
        content: message ? message : "Ocurrio un error",
      });
    }
  };

  const handleResetFields = () => {
    setValue("");
    setValueError("");
    setMovementType("");
    setCardType("");
    setName("");
    setNameError("");
    setDescription("");
    setDescriptionError("");
    setValueVisible(false);
  };

  const getIcon = () => {
    if (movementType === "1") {
      return (
        <div className="mr-2 text-white items-center bg-green-500 p-4 rounded-lg h-12 ">
          &#43;
        </div>
      );
    } else if (movementType === "2") {
      return (
        <div className="mr-2 text-white items-center bg-red-500 p-4 rounded-lg h-12">
          &#45;
        </div>
      );
    }
    return null;
  };

  const handleMovementTypeChange = (selectedMovementType: any) => {
    setMovementType(selectedMovementType);
    setCardType("");
    setName("");
    setDescription("");
    setValueVisible(true); // Hacer visible el campo de valor
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Ingresar Movimiento
        </h2>
        Ingresar Movimiento
        <Form
          form={form}
          name="basic"
          initialValues={{ quantity: 0, name: "", description: "" }}
        >
          <select
            value={movementType}
            onChange={(e) => handleMovementTypeChange(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
            required
          >
            <option value="">Seleccionar tipo de movimiento</option>
            <option value={2}>Gasto</option>
            <option value={1}>Ingreso</option>
          </select>

          {["2", "1"].includes(movementType) && (
            <>
              <div className="flex">
                {getIcon()}
                <span className="font-bold text-xl text-center pt-3 pr-2">
                  $
                </span>
                <Form.Item
                  name="quantity"
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
                    placeholder="Valor $000.00"
                    className="border border-gray-300 rounded-md px-2 py-2 w-full"
                  />
                </Form.Item>
              </div>
              <Form.Item name="name" rules={[Rules.required]}>
                <input
                  type="text"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  required
                />
              </Form.Item>
              <Form.Item name="description" rules={[Rules.required]}>
                <input
                  type="text"
                  placeholder="Descripción"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  required
                />
              </Form.Item>
            </>
          )}
        </Form>
        <div className="flex justify-center">
          <button
            onClick={() => {
              handleClose();
              handleResetFields();
            }}
            className="bg-neutral-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Cancelar
          </button>
          {["2", "1"].includes(movementType) && (
            <button
              onClick={onSubmit}
              className="bg-neutral-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Ingresar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TransactionCard({ cardID }: { cardID: string }) {
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
        Nueva Transaccion
      </button>
      <Modal show={showModal} cardID={cardID} handleClose={closeModal} />
    </div>
  );
}
