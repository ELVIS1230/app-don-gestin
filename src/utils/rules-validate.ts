export const Rules = {
  required: { required: true, message: 'Este campo es necesario'},
  email: { pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Ingrese un correo válido'},
  cellphone: { pattern: /^(?:\+?593\s?|0)?9\s?\d{8}$/, message: 'Ingrese un telélfono válido'},
  names: {pattern: /^[a-z A-Z ñÑáÁíÍéÉóÓúÚ]{2,}\\*$/i, message: 'Ingrese un nombre válido'},
  cedula: {pattern: /^\d{10}$/, message: 'Ingresa una cedula valida'}
}