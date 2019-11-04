// FIXME: These styles are currently in 2 places, styles.js and vars.css.
// we should really only have them in 1 place, the vars.css file. See VC for how to read a css var in js
// I had to make a change here because it was out of sync with the .css file and was causing different
// behavior in places.
const style = {
  pageTopMargin: 44,
  sidebarWidth: 250,

  availableColor: '#8FFF23',
  busyColor: '#FF4D4D',
  offlineColor: '#6F6F6F',

  report: {
    light: {
      header: {
        fontWeight: 'bold',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        color: 'rgb(13, 13, 13)',
      },
      even: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
      },
      odd: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
      },
    },

    dark: {
      header: {
        fontWeight: 'bold',
        backgroundColor: 'var(--brandcolor)',
        color: 'white',
      },
      even: {
        backgroundColor: 'rgba(168, 188, 230, 0.1)',
      },
      odd: {
        backgroundColor: 'rgba(168, 188, 230, 0.2)',
      },
    },
  },
}

export default style
