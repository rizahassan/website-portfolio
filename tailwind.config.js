/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      serif: ['Archivo', 'Comfortaa', 'Open Sans', 'Helvetica Neue'],
      sans: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif']
    },
    extend:{
      colors:{
      cyan:{DEFAULT: '#49ada4'}
    },
    spacing:{
      '74':'19rem',
    }
    }
    
  },
  prefix: 'tw-',
  purge: {
    enabled: false
  },
  variants: {},
  plugins: []
};
