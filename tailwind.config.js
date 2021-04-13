module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx }'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '500px': '500px',
        '300px': '300px',
        '260px': '260px',
        '240px': '240px',
        '200px': '200px',
        '180px': '180px',
        '160px': '160px',
        '90px': '90px',
        '24px': '24px',
        '18px': '18px',
        '12px': '12px'
      },
      height: {
        '450px': '450px',
        '350px': '350px',
        '300px': '300px',
        '270px': '270px',
        '110px': '110px',
        '100px': '100px',
        '60px': '60px',
        '50px': '50px',
        '30px': '30px',
        '24px': '24px',
        '20px': '20px',
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
  plugins: []
}
