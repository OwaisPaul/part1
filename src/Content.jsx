
import Part from './Part'
const Content = (props) => {
    return (
      <div>
        <Part part={props.part1} Exercises ={props.exercises1} />
        <Part part={props.part2} Exercises ={props.exercises2} />
        <Part part={props.part3} Exercises ={props.exercises3} />
      </div>
    )
  }

  export default Content;