const FontSizeOptions = ["sm", "md", "lg","xl"]
export const colorsVariantsOptions = ["primary", "secondary", "tertiary", "quaternary", "quinary"]

export const fontSizes = {
    $lgFontSize: {
        control: 'select',
        options: FontSizeOptions,
        description: 'Tamanho da fonte para telas grandes'
        },
    $mdFontSize: {
        control: 'select',
        options: FontSizeOptions,
        description: 'Tamanho da fonte para telas médias'
        },
    $smFontSize: {
        control: 'select',
        options: FontSizeOptions,
        description: 'Tamanho da fonte para telas pequenas'
    }
}
export const RemProps = {
    $lgRem:{
        control:'number',
        description: 'Escolher tamanho em px, que é convertido em rem para responsividade em telas maiores'
    },
    $mdRem:{
        control:'number',
        description: 'Escolher tamanho em px, que é convertido em rem para responsividade em telas médias'
    },
    $smRem:{
        control:'number',
        description: 'Escolher tamanho em px, que é convertido em rem para responsividade em telas menores'
    },
}
export const PercentSizes = {
    $lgPercent: {
        control:'number',
        description: 'Escolher porcentagem referente ao width para telas maiores'
    },
    $mdPercent: {
        control:'number',
        description: 'Escolher porcentagem referente ao width para telas médias'
    },
    $smPercent: {
        control:'number',
        description: 'Escolher porcentagem referente ao width para telas pequenas'
    },
}
export const colorsVariants = {
    $defaultColor: {
            control: 'select',
            options: colorsVariantsOptions,
            description: 'Escolher cor padrão'
        },
       $darkTheme: {
            control: 'select',
            options: colorsVariantsOptions,
            description: 'Escolher cor do texto do botão exclusivamente para tema escuro'
        },
       $lightTheme: {
            control: 'select',
            options: colorsVariantsOptions,
            description: 'Escolher cor exclusivamente para tema claro'
        },

}
export const buttonColorsVariants = {
        $buttonColor: {
            control: 'select',
            options: colorsVariantsOptions,
            description: 'Escolher cor do botão'
        },
        $buttonDarkThemeColor: {
            control: 'select',
            options: colorsVariantsOptions,
            description: 'Escolher cor do botão exclusivamente para tema escuro'
        },
       $buttonLightThemeColor: {
            control: 'select',
            options: colorsVariantsOptions,
            description: 'Escolher cor do botão exclusivamente para tema claro'
        },
        $buttonTextColor: {
            control: 'select',
            options: colorsVariantsOptions,
            description: 'Escolher cor do texto do botão'
        },
        $buttonTextDarkTheme: {
            control: 'select',
            options: colorsVariantsOptions,
            description: 'Escolher cor do texto do botão exclusivamente para tema escuro'
        },
        $buttonTextLightTheme: {
            control: 'select',
            options: colorsVariantsOptions,
            description: 'Escolher cor do texto do botão exclusivamente para tema claro'
        },
        
}
export const textColorsVariants = {
    $textColor: {
            control: 'select',
            options: colorsVariantsOptions,
            description: 'Escolher cor do texto'
        },
        $textDarkTheme: {
            control: 'select',
            options: colorsVariantsOptions,
            description: 'Escolher cor do texto exclusivamente para tema escuro'
        },
        $textLightTheme: {
            control: 'select',
            options: colorsVariantsOptions,
            description: 'Escolher cor do texto exclusivamente para tema  claro'
        },
}