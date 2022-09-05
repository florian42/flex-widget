import Select from "./Select";
import styled from "styled-components";

const FLEX_DIRECTIONS = ["row", "column"];

const JUSTIFY_CONTENTS = [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
];

const ALIGN_ITEMS = ["stretch", "flex-start", "flex-end", "center", "baseline"];

function Controls(props) {
    return (
        <Container>
            <Wrapper>
                <Select
                    name="flex-direction"
                    onChange={props.changeDirection}
                    value={props.direction}
                    options={FLEX_DIRECTIONS}
                />
                <Select
                    name="justify-content"
                    onChange={props.changeJustify}
                    value={props.justify}
                    options={JUSTIFY_CONTENTS}
                />
            </Wrapper>
            <Wrapper>
                <Select
                    name="align-items"
                    onChange={props.changeAlignItems}
                    value={props.alignItems}
                    options={ALIGN_ITEMS}
                />
                <Select
                    name="align-self"
                    onChange={props.changeAlignSelf}
                    value={props.alignSelf}
                    options={ALIGN_ITEMS}
                />
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export default Controls;
