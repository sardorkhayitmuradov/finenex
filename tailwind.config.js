/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      NunitoSansRegular: ['NunitoSansRegular'],
      NunitoSansSemibold: ['NunitoSansSemibold'],
      NunitoSansBold: ['NunitoSansBold'],
      NunitoSansExtraBold: ['NunitoSansExtraBold'],
      NunitoSansBlack: ['NunitoSansBlack']
    },
    maxWidth: {
      xs: '450px',
      xl: '1260px',
      lg: '1188px',
      "2lg": '1288px'
    },
    fontSize: {
      'xxs-regular': ['12px', '25px'], // 8
      'xs-regular': ['14px', '19px'], // 7
      'sm-regular': ['14px', '22px'], // 10
      'base-regular': ['16px', '135%'], // 5
      'md-regular': ['16px', '25px'],  // 6
      'lg-regular': ['18px', '180%'], // 1
      '2lg-regular': ['24px', '33px'], // 8

      // 'sm-medium': ['14px', '135%'],
      // 'base-medium': ['16px', '25px'],
      // 'lg-medium': ['18px', '135%'],

      'xs-semibold': ['14px', '19px'],
      'sm-semibold': ['16px', '22px'], // 2
      'lg-semibold': ['16px', '159.5%'], // 3
      '2lg-semibold': ['16px', '180%'], // 6
      '3lg-semibold': ['18px', '25px'],// 4
      '4lg-semibold': ['18px', '160%'], // 5

      'base-bold': ['16px', '22px'], // 1
      // 'lg-bold': ['20px', '135%'],
      // '2lg-bold': ['24px', '120%'],
      // '3xl-bold': ['36px', '135%'],
      // '4xl-bold': ['40px', '135%'],
      // '5xl-bold': ['42px', '135%'],
      // '6xl-bold': ['48px', '135%'],
      // '7xl-bold': ['90px', '120%'],

      'sm-extrabold': ['20px', '27px'], // 2
      'base-extrabold': ['24px', '33px'], // 7
      'lg-extrabold': ['36px', '49px'], // 3
      '2lg-extrabold': ['40px', '55px'],// 4
      '3lg-extrabold': ['48px', '65px'],// 5
      '3xl-extrabold': ['63px', '75px'],// 5
      '4lg-extrabold': ['90px', '120%'],// 6

      '3lg-black': ['128px', '175px'],// 6
      '4lg-black': ['180px', '246px']
    },
    borderRadius: {
      5: '5px',
      10: '10px',
      15: '15px',
      20: '20px',
      25: '15px',
      30: '30px',
    },
    extend: {
      colors: {
        "Charcoal": "#4F4949",
        "Bright-Pink": "#D22DA0",
        "Gunmetal": "#484649",
        "Sky-Blue": "#5FC2EE",
        "typo": "#cff0ff4d",
        "Royal-Blue": "#3F14A5",
        "Gray": "#868686",
        "Light-Gray": "#CCCFD4"
      },
      boxShadow: {
        'services-circle': '-22px 22px 44px rgba(224, 224, 224, 0.2), 22px -22px 44px rgba(224, 224, 224, 0.2), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(224, 224, 224, 0.5)',
        'value-card': '0px 4px 13px #F3ECEF',
        "value-card-sm": "0px 4px 70px rgba(194, 194, 194, 0.6)",
        'hero-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'shadow-button': '0px 0px 1px 3px rgba(20, 140, 236, 1)',
      },
    },
  },
  plugins: [],
};
