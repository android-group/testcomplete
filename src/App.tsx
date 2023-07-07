import React, { useEffect, useState } from 'react';
import { fetcher } from './utils/fetcher';
import AutoComplete from './components/Autocomplete';
import './App.css';

const App: React.FC = () => {
    const [data, setData] = useState<string[]>([]);

    useEffect(() => {
        // Here use real API endpoint
        const fetchData = async () => {
            const result = await fetcher('https://jsonplaceholder.typicode.com/users');
            setData(result.map((item: { name: string }) => item.name));
        }
        fetchData();
    }, []);

    return <AutoComplete data={data} />;
}

export default App;
