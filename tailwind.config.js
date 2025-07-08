/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './public/index.html',         // <–– añade esto
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
