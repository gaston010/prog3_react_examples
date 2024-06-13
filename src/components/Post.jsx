import { useState, useEffect } from 'react';

function Posting({ postID }) {

    // const [post, setPost] = useState({ id: postID, title: null, body: null });
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setError(null);
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
            .then((response) => {
                if (!response.ok) {
                    setError(response.statusText);
                    throw new Error("Error en la petición"); // Error handling
                }

                return response.json();
            })
            .then((data) => {
                setPost({
                    title: data.title,
                    body: data.body,
                    userId: data.userId,
                });
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
                setError(error)
            });
    }, [postID]);

    return (
        <div className="box">
            {loading ? (
                <p>Cargando...</p>
            ) : (error ? (
                <p className='subtitle'>Error: {error}</p>
            ) : (
                <div className='box'>
                    <strong>{post.title}</strong>
                    <small>ID:({postID})</small>
                    <p>Author: {post.userId}</p>
                    <small>{post.body}</small>
                </div>
            )
            )}
        </div>
    )
}

export { Posting };