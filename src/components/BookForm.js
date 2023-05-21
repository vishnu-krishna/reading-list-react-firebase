import { useState } from 'react';
import { useFirestore } from '../hooks/useFirestore';
import { useAuthContext } from '../hooks/useAuthContext';

export default function BookForm() {
    const [ newBook, setNewBook ] = useState('');
    const { addDocument } = useFirestore('books');
    const { user } = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDocument({
            title: newBook,
            uid: user.uid,
        });
        setNewBook('');

    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>Add a new book title:</span>
                <input
                    required
                    type='text'
                    onChange={(e) => setNewBook(e.target.value)}
                    value={newBook}
                />
            </label>
            <button>Add</button>
        </form>
    );
}
