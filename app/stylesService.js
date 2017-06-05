app.service('styles', function () {
  const { style } = typestyle

  const baseBtnStyle = {
    border: '3px solid',
    padding: '10px 20px',
    fontWeight: 'bold',
    fontSize: '16px',
    display: 'inline-block',
    background: 'white',
    borderRadius: '5px',
    outline: 'none',
    $nest: {
      '&:active': {
        transform: 'translateY(1px)'
      }
    }
  }

  return {
    containerClassName: style({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    }),
    fibClassName: style({
      fontSize: '36px',
      fontFamily: 'Arial',
      padding: '20px',
      fontWeight: 'bold'
    }),
    nextFibBtnClassName: style(
      Object.assign(baseBtnStyle, {
        borderColor: 'green',
        color: 'green'
      })
    ),
    resetBtnClassName: style(
      Object.assign(baseBtnStyle, {
        borderColor: 'grey',
        color: 'grey'
      })
    )
  }
})