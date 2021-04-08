module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx }'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    height: {
      '100px': '100px',
      '50px': '50px',
      '60px': '60px',
      '24px': '24px',
      '18px': '18px'
    },
    width: {
      '500px': '500px',
      '300px': '300px',
      '24px': '24px',
      '18px': '18px'
    },
    fontFamily: {
      'ubuntu': ['Ubuntu','"Times New Roman"']
    },
    fill: {
      current: 'currentColor'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
