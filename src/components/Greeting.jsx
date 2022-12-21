import {h} from 'preact';
import {useState} from 'preact/hooks';

export default function Greeting({messages} ) {
    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

    const [greeting, setGreeting] = useState(randomMessage());

    return (
        <div>
            <h3>{greeting}!</h3>
            <button onClick={() => setGreeting(randomMessage())}>
            
                Get New Greeting
            </button>
        </div>
    );
}