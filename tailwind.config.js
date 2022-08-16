/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './layouts/**/*.{js,ts,jsx,tsx}',
        './ui-components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        screens: {
            xs: '376px',
            sm: '500px',
            md: '769px',
            lg: '1025px',
            xl: '1440px',
        },
        extend: {
            fontFamily: {
                gilroy: 'var(--fontFamily-gilroy)',
                circe: 'var(--fontFamily-circe)',
            },
            fontSize: {
                sm: ['14px', '20px'],
                base: ['16px', '24px'],
                lg: ['20px', '28px'],
                xl: ['24px', '32px'],
                xxl: ['44px', '50px'],
              },
            fontWeight: {
                light: 'var(--font-light)',
                regular: 'var(--font-regular)',
                medium: 'var(--font-medium)',
                semibold: 'var(--font-semibold)',
                bold: 'var(--font-bold)',
                extrabold: 'var(--font-extrabold)',
            },  
            textColor: {
                primary: 'var(--text-primary)',
                secondary: 'var(--text-secondary)',
                green: 'var(--text-green)',
                white: 'var(--text-white)',
            },
            colors: {
                white: 'var(--bg-white)',
                gray: 'var(--bg-gray)',
                lightWhite: 'var(--bg-lightWhite)',
                linearBlue: 'var(--bg-linearBlue)',
                blue: 'var(--bg-blue)',
                body: 'var(--bg-body)',
            },
            borderColor: {
                gray: 'var(--border-gray)',
                blue: 'var(--border-blue)',
                violet: 'var(--border-violet)',
                green: 'var(--border-green)',
            },
            borderRadius: {
                lg: 'var(--rounded-lg)',
                sm: 'var(--rounded-sm)',
                full: 'var(--rounded-full)',
            },
            boxShadow: {
                lg: 'var(--shadow-lg)',
                sm: 'var(--shadow-sm)',
            },
            boxShadowColor: {
                gray: 'var(--shadow-gray)',
                black: 'var(--shadow-black)',
                green: 'var(--shadow-green)',
            },
            padding: {
                10: '10px',
                15: '15px',
                20: '20px',
            },
            margin: {
                10: '10px',
                15: '15px',
                20: '20px',
            },
        },
    },
    plugins: [],
}
