import styled from "styled-components"

function Select(props) {
    return (
        <Wrapper>
        <label for={props.name}>{props.name}</label>
        <select name={props.name} onChange={props.onChange} value={props.value}>
            {props.options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
`

export default Select;
