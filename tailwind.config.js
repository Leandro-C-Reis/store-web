module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx }'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '500px': '500px',
        '300px': '300px',
        '180px': '180px',
        '160px': '160px',
        '90px': '90px',
        '24px': '24px',
        '18px': '18px',
        '12px': '12px'
      },
      height: {
        '270px': '270px',
        '110px': '110px',
        '100px': '100px',
        '50px': '50px',
        '60px': '60px',
        '24px': '24px',
        '18px': '18px',
        '12px': '12px'
      },
      margin: {
        '100px': '100px'
      },
      padding: {
        '100px': '100px'
      },
      fontFamily: {
        'ubuntu': ['Ubuntu','"Times New Roman"']
      },
      fill: {
        current: 'currentColor'
      }
    },  
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins = {
    preflight: false
  }
}
