const rotateValues = [0, 270, 180, 90]
const getNextRotateValue = (currentValue) => {
  const currentIndex = rotateValues.indexOf(currentValue)

  if (!~currentIndex || (currentIndex === (rotateValues.length - 1))) {
    return rotateValues[0]
  }

  return rotateValues[currentIndex + 1]
}

export default getNextRotateValue
