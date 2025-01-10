/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      }
    },
    extend: {
      screens: {
        'sm': '600px',
        'md': '600px',
        'lg': '600px',
        'xl': '600px',
        '2xl': '600px',
      },
      colors: {
        'primary-1': '#FF8637',
        'primary-2': '#F6EEE8',
        'secondary-1': '#00497D',
        'secondary-2': '#ECF4FA',
        'neutral-1': '#F8F8F8',
        'neutral-2': '#EAEAEA',
        'neutral-3': '#C9C9C9',
        'neutral-4': '#797979',
        'neutral-5': '#4A4A4A',
        'gray-1': '#FDFBF8',
        'gray-2': '#F0F0F0',
        'gray-3': '#C9C9C9',
        'gray-4': '#797979',
        'gray-5': '#292929',
        'complementary-1': '#52B1E7',
        'opaque-black-1': '#00000099',
        'opaque-black-2': '#00000026',
        'opaque-black-3': '#00000040',
        'opaque-black-4': '#00000008',
        'opaque-gray-4': '#FFFFFF99',
        white: '#FFFFFF',
        black: '#000000',
        mask: 'rgba(0,0,0,0.6)',
        danger: '#FF0000',
        success: '#79D333'
      },
      borderRadius: {
        base: '10px'
      },
      backgroundImage: {
        'banner-uwalk': 'url("@/assets/image/banner.png")',
        'icon-coin': 'url("@/assets/image/icon_coin.png")',
      }
    },
  },
  plugins: [

  ],
}