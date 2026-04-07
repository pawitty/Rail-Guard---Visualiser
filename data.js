const tests = [1, 2, 3, 4, 5]

const rodSeparation = [0.05, 0.05, 0.06, 0.08, 0.10] // meters
const phaseShift = [0.05, 0.1, 0.2, 0.5, 1.0] // radians

const wavelength = 0.005 // meters

const results = tests.map((test, i) => {
  const displacement = (wavelength / (4 * Math.PI)) * phaseShift[i]

  return {
    test,
    rodSeparation: rodSeparation[i],
    phaseShift: phaseShift[i],
    displacement: displacement,
    displacement_mm: displacement * 1000
  }
})

console.log(results)
