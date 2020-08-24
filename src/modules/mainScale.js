
const mainScale = (unit) => {

  let screenWidth = window.screen.width;

  if (unit === 'scale') {
    if (screenWidth > 400 && screenWidth < 800) {
      return 2;
    }
    else if ( screenWidth < 400) {
      return 1;
    }

    return 0;
  };

  if (unit === 'width') {
    if (screenWidth >= 800) {
      return 800;
    }
    else {
      return 400;
    }
  }
}

export default mainScale;
