const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => <p>{props.part.name} - {props.part.units} units</p>

const Content = (props) => (
  <div>
    <Part part={props.part1} />
    <Part part={props.part2} />
    <Part part={props.part3} />
  </div>
)

const Total = (props) => <p>Total units: {props.total}</p>

const Footer = (props) => (
  <footer>{props.name} - {props.code} - {props.section}</footer>
)

const App = () => {
  const course = 'CSIT340'
  const part1 = { name: 'CSIT327', units: 3 }
  const part2 = { name: 'IT321', units: 3 }
  const part3 = { name: 'CSIT111', units: 3 }

  const name = 'Mary Claire Lauron'
  const code = 'CSIT340'
  const section = 'G7'

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.units + part2.units + part3.units} />
      <Footer name={name} code={code} section={section} />
    </div>
  )
}

export default App