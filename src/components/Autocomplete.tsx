import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

interface Props {
    data: string[];
}

const AutoComplete: React.FC<Props> = ({ data }) => {
    const [input, setInput] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const filterData = async (input: string) => {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 300));
        if(input === '') {
            setSuggestions([]);
        } else {
            const newSuggestions = data.filter(value =>
                value.toLowerCase().includes(input.toLowerCase())
            );
            setSuggestions(newSuggestions);
        }
    };

    useEffect(() => {
        filterData(input);
    }, [input, data]);

    return (
        <div className={styles.autoCompleteContainer}>
            <input
                className={styles.inputBox}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Start typing..."
            />
            {suggestions.map((suggestion, index) => (
                <div
                    key={index}
                    className={styles.suggestionBox}
                    onClick={() => setInput(suggestion)}
                >
                    <span dangerouslySetInnerHTML={{
                        __html: suggestion.replace(new RegExp(`(${input})`, 'gi'), '<strong>$1</strong>')
                    }} />
                </div>
            ))}
        </div>
    );
}

export default AutoComplete;
