import { Panel } from 'components/UI/Panel/Panel'
import { SingleComment } from './SingleComment'
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 50px;
    width:95%;
`;


export const CommentGroup = ({comment}) => (
  <Container>
    <Panel title='Comments' />
    <SingleComment />
    <SingleComment />
    <SingleComment />
    <SingleComment />
    <SingleComment />

    
  </Container>
)
