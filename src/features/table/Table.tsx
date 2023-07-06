// Table.tsx
import React, { useState } from 'react';
import styles from './Table.module.css';

interface Column {
  id: string;
  label: string;
}

interface TableProps {
  data: any[];
}

const columns: Column[] = [
  { id: 'place', label: 'Place' },
  { id: 'title', label: 'Title' },
  { id: 'type', label: 'Type' },
  { id: 'time', label: 'Time' }
];

const Table: React.FC<TableProps> = ({ data }) => {
  const [sortConfig, setSortConfig] = useState<{ key: string, direction: string } | null>(null);

  let sortedData = [...data];
  if (sortConfig !== null) {
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }

  const onSort = (key: string) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column.id} onClick={() => onSort(column.id)}>
              {column.label}
              {sortConfig && sortConfig.key === column.id && (sortConfig.direction === 'ascending' ? ' ▲' : ' ▼')}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => (
          <tr key={index}>
            {columns.map(column => (
              <td key={column.id}>{row[column.id]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
