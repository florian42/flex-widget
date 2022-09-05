import { useState } from "react";
import styled from "styled-components";
import Controls from "./Controls";
import Item from "./Item";

const COLORS = {
    yellow: "hsl(37deg, 89%, 67%)",
    beige: "hsl(31deg, 57%, 93%)",
    pink: "hsl(8deg, 71%, 86%)",
    green: "hsl(165deg, 15%, 58%)",
    red: "hsl(1deg, 81%, 73%)",
};

const Wrapper = styled.div`
    background-color: hsl(0deg, 0%, 100%);
    display: flex;
    flex-direction: ${(props) => props.direction};
    justify-content: ${(props) => props.justify};
    align-items: ${(props) => props.alignItems};
    min-height: 200px;
    max-height: 400px;
    min-width: 200px;
    max-width: 100%;
    overflow: hidden;
    border-radius: 8px;
`;

const Container = styled.div`
    background-color: hsl(197deg, 100%, 5%);
    color: hsl(0, 0%, 100%);
    border-radius: 8px;
    border: 2px solid hsl(197deg, 100%, 5%);
`

const onChange = (setter) => (event) => setter(event.target.value);

function App() {
    const [direction, setDirection] = useState("row");
    const [justify, setJustify] = useState("flex-start");
    const [alignItems, setAlignItems] = useState("stretch");
    const [alignSelf, setAlignSelf] = useState("stretch");

    const isLast = index => index === Object.keys(COLORS).length - 1;
    const items = Object.values(COLORS).map((color, index) => {
        return (
            <Item
                key={color}
                color={color}
                title={Math.random().toString(36).substring(2, 5)}
                alignSelf={isLast(index) ? alignSelf : undefined}
            />
        );
    });

    return (
        <Container>
            <Wrapper
                direction={direction}
                justify={justify}
                alignItems={alignItems}
            >
                {items}
            </Wrapper>
            <Controls
                direction={direction}
                changeDirection={onChange(setDirection)}
                justify={justify}
                changeJustify={onChange(setJustify)}
                alignItems={alignItems}
                changeAlignItems={onChange(setAlignItems)}
                alignSelf={alignSelf}
                changeAlignSelf={onChange(setAlignSelf)}
            />
        </Container>
    );
}

export default App;
