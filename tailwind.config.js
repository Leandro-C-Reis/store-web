module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx }'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '800px': '800px',
        '700px': '700px',
        '500px': '500px',
        '350px': '350px',
        '300px': '300px',
        '400px': '400px',
        '270px': '270px',
        '260px': '260px',
        '240px': '240px',
        '200px': '200px',
        '180px': '180px',
        '160px': '160px',
        '90px': '90px',
        '70px': '70px',
        '50px': '50px',
        '40px': '40px',
        '24px': '24px',
        '20px': '20px',
        '18px': '18px',
        '15px': '15px',
        '12px': '12px',
        '10px': '10px',
        '6px': '6px',
        '5px': '5px',
      },
      height: {
        'complete': 'calc(100vh - 100px)',
        '600px': '600px',
        '450px': '450px',
        '350px': '350px',
        '300px': '300px',
        '270px': '270px',
        '150px': '150px',
        '110px': '110px',
        '100px': '100px',
        '80px': '80px',
        '75px': '75px',
        '60px': '60px',
        '50px': '50px',
        '30px': '30px',
        '24px': '24px',
        '20px': '20px',
        '18px': '18px',
        '15px': '15px',
        '12px': '12px',
        '10px': '10px',
        '6px': '6px',
        '5px': '5px',
      },
      margin: {
        '100px': '100px'
      },
      padding: {
        '100px': '100px'
      },
      fontFamily: {
        'ubuntu': ['Ubuntu','"Times New Roman"'],
        'poppins': ['Poppins', '"Times New Roman"']
      },
      backgroundColor: {
        'orange': '#FF9900'
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
