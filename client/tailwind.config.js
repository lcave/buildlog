module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
    inset: {
      '0': 0,
      auto: 'auto',
      '20': '20px',
    }
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
    border: ['responsive', 'hover', 'focus'],
    borderColor: ['responsive', 'hover', 'focus']
  },
  plugins: [],
}
