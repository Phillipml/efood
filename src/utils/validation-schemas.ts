import * as yup from 'yup'

export const deliverySchema = yup.object({
  receiver: yup
    .string()
    .required('Nome do destinatário é obrigatório')
    .min(2, 'Nome deve ter pelo menos 2 caracteres'),
  
  address: yup.object({
    descripton: yup
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
      .matches(/^\d{5}-?\d{3}$/, 'CEP deve ter formato 00000-000'),
    
    number: yup
      .number()
      .required('Número é obrigatório')
      .min(1, 'Número deve ser maior que 0'),
    
    complement: yup.string()
  })
})

export const paymentSchema = yup.object({
  card: yup.object({
    name: yup
      .string()
      .required('Nome no cartão é obrigatório')
      .min(2, 'Nome deve ter pelo menos 2 caracteres'),
    
    number: yup
      .string()
      .required('Número do cartão é obrigatório')
      .matches(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, 'Número do cartão deve ter formato 0000 0000 0000 0000'),
    
    code: yup
      .number()
      .required('CVV é obrigatório')
      .min(100, 'CVV deve ter 3 dígitos')
      .max(999, 'CVV deve ter 3 dígitos'),
    
    expires: yup.object({
      month: yup
        .number()
        .required('Mês é obrigatório')
        .min(1, 'Mês deve ser entre 1 e 12')
        .max(12, 'Mês deve ser entre 1 e 12'),
      
      year: yup
        .number()
        .required('Ano é obrigatório')
        .min(2024, 'Ano deve ser 2024 ou superior')
    })
  })
})