/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": '#e21a70',
        "secondary": '#DFDFDF',
        "primary-dark": '#4C1D95',
        "secondary-dark": '#F97316'
      },
      fontFamily: {
        PoppinsBold: 'Poppins-Bold',
        PoppinsSemiBold: 'Poppins-SemiBold',
        PoppinsMedium: 'Poppins-Medium',
        PoppinsRegular: 'Poppins-Regular',
      }
    }
  },
  plugins: [],
}
