import { useState } from 'react';
import useUser from '../hooks/useUser';
import { useDispatch } from 'react-redux';
import { fetchAllArticles } from '../slices/articleSlice';

const AddCommentForm = ({ articleName }) => {
    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');
    const { user } = useUser();
    const dispatch = useDispatch();

    const addComment = () => {
        const url = `/api/articles/${articleName}/comments`;
        const method = 'post';
        const data = {
            postedBy: name,
            text: commentText,
        };
        dispatch(fetchAllArticles({url, user, method, data}));
        setName('');
        setCommentText('');
    }
    

    return (
        <div id="add-comment-form">
            <h3>Add a Comment</h3>
            {user && <p>You are posting as {user.email}</p>}
            <textarea
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
                rows="4"
                cols="50" />
            <button onClick={addComment}>Add Comment</button>
        </div>
    )
}

export default AddCommentForm;