module.exports = {
    content: [
        './src/**/*.{html,js,css}',
        './public/**/*.{html,js,css}',

    ],
    theme: {
        extend: {

        },
        colors: {
            //Primary
            'Light_Cyan': 'hsl(193, 38%, 86%)',
            'Neon_Green': 'hsl(150, 100%, 66%)',
            //Neutral
            'Grayish_Blue': 'hsl(217, 19%, 38%)',
            'Dark_Grayish_Blue': 'hsl(217, 19%, 24%)',
            'Dark_Blue': 'hsl(218, 23%, 16%)'
        },
        fontFamily: {
            Manrope: ['Manrope', 'sans-serif']
        },
        letterSpacing: {
            widest: '.25em',
        },
        dropShadow: {
            '3xl': '0px 0px 25px rgba(81, 255, 168)',
        }
    },

    plugins: [],
}