import AnimeSerivce from 'api/AnimeService';
import AuthContext from 'context/AuthContext';
import styled from 'styled-components'
import parse from 'html-react-parser'
import moment from 'moment';
import { BeatLoader } from 'react-spinners';
import { CommentButtons, MyCommentButtons } from './Buttons/CommentButtons';
import { Comment } from 'components/Comments/Comment'
import { PanelWithLink, Panel } from 'components/UI/Panel/Panel'
import { TextEditor } from 'components/TextEditor/TextEditor';
import { useEffect, useState, useContext } from 'react';
import { useFetch } from 'hooks/useFetch';
import { useParams } from 'react-router-dom';

const Container = styled.div`
    margin-top: 50px;
    width:98%;
    margin-left: 15px;

`;

const LoadingWrapper = styled.div`
    width: 100%;
    height: 10vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const YourCommentContainer = styled.div`
    width:100%;
`;


export const Feed = () => {
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const [comments, setComments] = useState([])
    const [text, setText] = useState('Type your comment here!')
    const [commentCount, setCommentCount] = useState(0)
    
    const [fetchComments, isLoading, error] = useFetch(async () => {
        const response = await AnimeSerivce.getComments(id)
        setComments(response.result.slice(0,3))
        setCommentCount(response.result.length)
    })
    
    const clickDelete = async (event) => {
        const accessToken = JSON.parse(localStorage.getItem('JWT'))['access']
        let comment_id = event.currentTarget.id
        const response = await AnimeSerivce.deleteComment(id, comment_id, accessToken)
        if (response.status !== 204) alert(response.status)
        fetchComments()
    };

    const clickReply = async (event) => {
        let comment_id = event.currentTarget.id
        setText(`>>${comment_id}`)
    }

    const selectButtons = (author_id, comment_id) => {
        if (user.user_id === author_id) {
            return <MyCommentButtons id={comment_id} onClick={clickDelete} />
        }
        return <CommentButtons id={comment_id} onClick={clickReply} />
    }


    const sendComment = async () => {
        const accessToken = JSON.parse(localStorage.getItem('JWT'))['access']
        const response = await AnimeSerivce.postComment(
            id, user.user_id, text, accessToken
        )
        if (response.status !== 201) {
            alert(response.status)
        }
        fetchComments()
        setText('Type your comment here!')
    }


    useEffect(() => {
        fetchComments()
    }, [])

    return (
        <Container>
            {isLoading &&
                <LoadingWrapper>
                    <BeatLoader loading size={20} speedMultiplier={1} />
                </LoadingWrapper>
            }
            {!isLoading && commentCount > 0 && (
                <>
                <PanelWithLink title='Feed' count={`(${commentCount})`} />
                    {comments.map(comment => {
                        return <Comment
                            id={comment.author.id}
                            key={comment.id}
                            avatar={comment.author.avatar_url}
                            nickname={comment.author.nickname}
                            body={parse(comment.body)}
                            datetime={moment(comment.updated_at).fromNow()}
                            buttons={user ? selectButtons(comment.author.id, comment.id) : ''}
                        />
                    })}
                </>
            )}
            {user &&
                <YourCommentContainer >
                    <Panel title='Your Message' />
                    <TextEditor
                        id='CommentEditor'
                        onClick={sendComment} 
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setText(data)
                        }}
                        text={text}
                    />
                </YourCommentContainer>
            }
        </Container>
    )
}
