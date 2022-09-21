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

const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    height: 70px;
    width: 100%;
    gap:20px;
    justify-content: end;
`;

export const TextEditor = ({onClick, onChange, text, id}) => {
    const { user } = useContext(AuthContext)

    return (
        <div className={styles.TextEditor} id={id}>
            <CKEditor
                editor={ClassicEditor}
                config={ {
                    toolbar: [ 'bold', 'italic', 'link', 'undo', 'redo']
                } }
                data={text}
                onChange={onChange}
            />

            <TextPreview
                id={user.user_id}
                nickname={user.nickname}
                avatar={user.avatar}
                body={parse(text)}
            />

            <ButtonsContainer>
                <GenericButton verb='Send' onClick={onClick} />
            </ButtonsContainer>
        </div>
    )
}
