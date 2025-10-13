import * as yup from 'yup'

export const deliverySchema = yup.object({
  receiver: yup
    .string()
    .required()
    .min(2, 'Nome deve ter pelo menos 2 caracteres'),
  
  address: yup.object({
    description: yup
      .string()
      .required()
      .min(5, 'Endereço deve ter pelo menos 5 caracteres'),
    
    city: yup
      .string()
      .required()
      .min(2, 'Cidade deve ter pelo menos 2 caracteres'),
    
    zipCode: yup
      .string()
      .required()
      .matches(/^\d{5}-?\d{3}$/, 'CEP deve ter formato 00000-000'),
    
    number: yup
      .string()
      .required()
      .matches(/^\d+$/, 'Número deve conter apenas dígitos')
      .test('min-value', 'Número deve ser maior que 0', (value) => {
        return value ? parseInt(value) > 0 : false
      }),
    
    complement: yup.string()
  })
})

export const paymentSchema = yup.object({
  card: yup.object({
    name: yup
      .string()
      .required()
      .min(2, 'Nome deve ter pelo menos 2 caracteres'),
    
    number: yup
      .string()
      .required()
      .matches(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, 'Número do cartão deve ter formato 0000 0000 0000 0000'),
    
    code: yup
      .string()
      .required()
      .matches(/^\d{3}$/, 'CVV deve ter 3 dígitos'),
    
    expires: yup.object({
      month: yup
        .string()
        .required()
        .matches(/^(0[1-9]|1[0-2])$/, 'Mês deve ser entre 01 e 12'),
      
      year: yup
        .string()
        .required()
        .matches(/^(202[4-9]|20[3-9]\d|2[1-9]\d{2})$/, 'Ano deve ser 2024 ou superior')
    })
  })
})