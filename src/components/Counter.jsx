import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className='card'>
            <div className='card-content'>
                <div className='content'>
                    <button className='button'
                        onClick={() => setCount(count + 1)}>

                        Count : {count}
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Counter;