const parseArrayVertically = ({ array, size }) => {
  const vertically = [];
  let group,
    temp;
  
    array.forEach((element, index) => {
    group = index % size;
    temp = vertically[group];

    if (!Array.isArray(temp)) {
        temp = [];
    }

    temp.push(element);
    vertically[group] = temp;
  });

  return vertically;
}

const parseArrayDiagonally = ({ array, bottomToTop = false }) => {
  let Ylength = array.length,
    Xlength = array[0].length,
    maxLength = Math.max(Xlength, Ylength),
    returnArray = [],
    temp;

  for (let k = 0; k <= 2 * (maxLength - 1); ++k) {
      temp = [];
      for (var y = Ylength - 1; y >= 0; --y) {
          var x = k - (bottomToTop ? Ylength - y : y);
          if (x >= 0 && x < Xlength) {
            if (array[y]) {
              temp.push(array[y]);
            }
          }
      }
      if(temp.length > 0) {
          returnArray.push(temp.join(''));
      }
  }

  return returnArray;
}

export {
  parseArrayVertically,
  parseArrayDiagonally
};