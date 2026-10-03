const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
  <div>
    <p>{props.part1} - {props.units1} units</p>
    <p>{props.part2} - {props.units2} units</p>
    <p>{props.part3} - {props.units3} units</p>
  </div>
)

const Total = (props) => <p>Total units: {props.total}</p>

const Footer = (props) => (
  <footer>{props.name} - {props.code} - {props.section}</footer>
)

const App = () => {
  const course = "CSIT340"
  const part1 = '[CSIT327]'
  const units1 = 3
  const part2 = '[IT321]'
  const units2 = 3
  const part3 = '[CSIT111]'
  const units3 = 3

  const name = "Mary Claire Lauron"
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