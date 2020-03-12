//Este componente solamente envulve a sus childrens y los renderea, de esta manera puedes renderear adjacent JSX sin tener un div o wrapper innecesario.
const Auxiliar = props => props.children;

export default Auxiliar;