import AuthContext from 'context/AuthContext';
import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styles from './TextEditor.module.css'
import styled from 'styled-components';
import parse from 'html-react-parser'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { GenericButton } from 'components/UI/Buttons/Submit/SubmitButton';
import { TextPreview } from 'components/TextEditor/TextPreview';
import AnimeSerivce from 'api/AnimeService';

const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    height: 70px;
    width: 100%;
    gap:20px;
    justify-content: end;
`;


export const TextEditor = () => {
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const [text, setText] = useState('')
    const accessToken = JSON.parse(localStorage.getItem('JWT'))['access']

    const sendComment = async () => {
        const response = await AnimeSerivce.postComment(
            id, user.user_id, text, accessToken
        )
        if (response.status !== 201) {
            alert(response.status)
        }
    }


    return (
        <div className={styles.TextEditor}>
            <CKEditor
                editor={ClassicEditor}
                config={ {
                    toolbar: [ 'bold', 'italic', 'link', 'undo', 'redo']
                } }
                data="<p>Type your comment!</p>"
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setText(data)
                    console.log({ event, editor, data });
                }}
            />

            <TextPreview
                id={user.user_id}
                nickname={user.nickname}
                avatar={user.avatar}
                body={parse(text)}
            />

            <ButtonsContainer>
                <GenericButton verb='Send' onClick={sendComment} />
            </ButtonsContainer>
        </div>
    )
}
