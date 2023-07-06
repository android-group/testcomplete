import React, { useEffect, useState } from 'react';
import styles from './TablePage.module.css';
import Table from './Table';
import { fetchData } from '../../service/api';

const TablePage: React.FC = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchData()
      .then(data => setData(data))
      .catch(error => console.error('Error:', error))
      .finally(() => setIsLoading(false));
  }, []);

  const filteredData = data.filter((item: any) => 
    item?.place?.toLowerCase()?.includes(search.toLowerCase()) ||
    item?.title?.toLowerCase()?.includes(search.toLowerCase()) ||
    item?.type?.toLowerCase()?.includes(search.toLowerCase()) ||
    item?.time?.toLowerCase()?.includes(search.toLowerCase())
  );

  return (
    <div className="TablePage">
      <input 
        type="text" 
        placeholder="Search..." 
        onChange={e => setSearch(e.target.value)}
        className={styles.SearchInput}
      />
       {isLoading ? <p>Loading...</p> : 
       filteredData.length > 0 ? <Table data={data} /> : <p>No data</p>}
    </div>
  );
};

export default TablePage;
