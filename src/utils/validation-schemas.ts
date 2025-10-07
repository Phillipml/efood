import * as yup from 'yup'

export const addressSchema = yup.object({
  description: yup
    .string()
    .required('Endereço é obrigatório')
    .min(5, 'Endereço deve ter pelo menos 5 caracteres'),
  city: yup
    .string()
    .required('Cidade é obrigatória')
    .min(2, 'Cidade deve ter pelo menos 2 caracteres'),
  zipCode: yup
    .string()
    .required('CEP é obrigatório')
    .matches(/^\d{5}-?\d{3}$/, 'CEP deve ter o formato 00000-000'),
  number: yup
    .number()
    .required('Número é obrigatório')
    .positive('Número deve ser positivo')
    .integer('Número deve ser um inteiro'),
  complement: yup.string().optional()
})

export const deliverySchema = yup.object({
  receiver: yup
    .string()
    .required('Nome do recebedor é obrigatório')
    .min(2, 'Nome deve ter pelo menos 2 caracteres'),
  address: addressSchema
})

export const cardSchema = yup.object({
  name: yup
    .string()
    .required('Nome no cartão é obrigatório')
    .min(2, 'Nome deve ter pelo menos 2 caracteres'),
  number: yup
    .string()
    .required('Número do cartão é obrigatório')
    .matches(/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/, 'Número do cartão inválido'),
  code: yup
    .number()
    .required('Código de segurança é obrigatório')
    .min(100, 'Código deve ter 3 dígitos')
    .max(9999, 'Código deve ter no máximo 4 dígitos'),
  expires: yup.object({
    month: yup
      .number()
      .required('Mês é obrigatório')
      .min(1, 'Mês inválido')
      .max(12, 'Mês inválido'),
    year: yup
      .number()
      .required('Ano é obrigatório')
      .min(new Date().getFullYear(), 'Cartão expirado')
      .max(new Date().getFullYear() + 10, 'Ano muito distante')
  })
})

export const paymentSchema = yup.object({
  card: cardSchema
})

export const checkoutSchema = yup.object({
  products: yup
    .array()
    .of(
      yup.object({
        id: yup.number().required(),
        price: yup.number().required().positive()
      })
    )
    .min(1, 'Deve ter pelo menos um produto'),
  delivery: deliverySchema,
  payment: paymentSchema
})
