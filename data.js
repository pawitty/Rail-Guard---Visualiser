const tests = [1,2,3,4,5]

const rodSeparation = [0.05,0.05,0.06,0.08,0.10]

const phaseShift = [0.05,0.1,0.2,0.5,1.0]

const wavelength = 0.005

const displacement = phaseShift.map(p =>
 (wavelength/(4*Math.PI))*p
)
