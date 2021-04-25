module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/section/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FFFFFF',
      green: '#6FC05A',
      'green-100': '#D0FF6B',
      black: '#252525',
      blue: '#396BF1',
      'blue-100': '#6B7BCF',
      'blue-200': '#5496F5',
      'purple': '#A448ED',
      gray: '#F2F2F2',
      'gray-500': '#cccccc',
      'gray-600': '#B8B8B8',
      'gray-700': '#252525B2',
      'red': '#FF0000',
      'red-100': '#ff00001A'
    },
    fontSize: {
      'xs': ['0.625rem', '0.875rem'],
      'sm': ['0.75rem', '1rem'],
      'md': ['0.875rem', '1.125rem'],
      'base': ['1rem', '1.375rem'],
      'lg': ['1.25rem', '1.5rem'],
      'xl': ['1.5rem', '2.125rem'],
      '2xl': ['1.875rem', '2.25rem'],
      '3xl': ['2.25rem', '3.125rem'],
      '4xl': ['2.5rem', '3rem'],
    },
    fontFamily: {
      'open-sans': 'Open Sans',
      'arial': 'Arial',
      'arial-black': ['Arial Black', 'sans-serif']
    },
    boxShadow: {
      xs: '0px 2px 4px rgba(0, 0, 0, 0.25)',
      sm: '0 2px 8px rgba(0, 0, 0, 0.3)',
      md: '0 2px 10px rgba(0, 0, 0, 0.4)',
      lg: '0px 4px 30px rgba(0, 0, 0, 0.2)'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
