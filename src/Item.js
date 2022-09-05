import styled from "styled-components";

const Container = styled.div`
    background-color: ${(props) => props.color};
    min-width: 50px;
    display: flex;
    align-self: ${(props) => props.alignSelf}
`;

const Title = styled.span`
    margin: auto;
`;

function Item(props) {
    return (
        <Container color={props.color} alignSelf={props.alignSelf}>
            <Title>{props.title}</Title>
        </Container>
    );
}

export default Item;
