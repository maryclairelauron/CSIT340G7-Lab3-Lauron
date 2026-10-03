const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => <p>{props.part.name} - {props.part.units} units</p>

const Content = (props) => (
  <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </div>
)

const Total = (props) => (
  <p>
    Total units: {props.parts[0].units + props.parts[1].units + props.parts[2].units}
  </p>
)

const Footer = (props) => (
  <footer>{props.name} - {props.code} - {props.section}</footer>
)

const App = () => {
  const course = {
    name: 'CSIT340',
    parts: [
      { name: 'CSIT327', units: 3 },
      { name: 'IT321', units: 3 },
      { name: 'CSIT111', units: 3 },
    ],
  }

  const name = 'Mary Claire Lauron'
  const code = 'CSIT340'
  const section = 'G7'

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer name={name} code={code} section={section} />
    </div>
  )
}

export default App