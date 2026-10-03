const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => <p>{props.name} - {props.units} units</p>

const Content = (props) => (
  <div>
    <Part name={props.part1} units={props.units1} />
    <Part name={props.part2} units={props.units2} />
    <Part name={props.part3} units={props.units3} />
  </div>
)

const Total = (props) => <p>Total units: {props.total}</p>

const Footer = (props) => (
  <footer>{props.name} - {props.code} - {props.section}</footer>
)

const App = () => {
  const course = 'CSIT340'
  const part1 = 'CSIT327'
  const units1 = 3
  const part2 = 'IT321'
  const units2 = 3
  const part3 = 'CSIT111'
  const units3 = 3

  const name = 'Mary Claire Lauron'
  const code = 'CSIT340'
  const section = 'G7'

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} units1={units1}
        part2={part2} units2={units2}
        part3={part3} units3={units3}
      />
      <Total total={units1 + units2 + units3} />
      <Footer name={name} code={code} section={section} />
    </div>
  )
}

export default App