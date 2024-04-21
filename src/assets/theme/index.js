const theme = {
  color: {
    primaryColor: '#ff385C',
    secondaryColor: '#00848A'
  },
  text: {
    primaryColor: '#6A6A6A',
    secondaryColor: '#222'
  },
  borderColor: '#DDDDDD',
  mixin: {
    boxShadow: `
      transition: box-shadow 0.2s ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
      }
    `
  }
}

export default theme
