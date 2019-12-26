import React, { useState } from 'react';
import { Table, Pagination } from '@alifd/next';

export default function Dashboard() {
  const json = {
    title1: 1,
    title2: 2,
    title3: 3,
    title4: 4,
    title5: 5,
    title6: 6,
    title7: 7,
    title8: 8,
  };
  const dataSource = [];
  for(let i = 0;i< 10; i++) {
    dataSource.push({
      ...json,
      id: i,
    });
  }

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(dataSource);

  const handlePaginationChange = (current) => {
    setLoading(true);
    setTimeout(() => {
      if (current === 2) {
        dataSource[5].title5 = '555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555';
        setData(dataSource);
      } else {
        setData(dataSource);
      }
      setLoading(false);
    }, 500);
  };
  return (
    <div>
      <Table 
        dataSource={data} 
        loading={loading}  
        rowSelection={{
          columnProps: () => {
            return {
                lock: 'left',
                width: 40,
                align: 'center',
            };
          },
        }}
      >
        <Table.Column width={200} dataIndex="title1" title="title1"/>
        <Table.Column width={200} dataIndex="title2" title="title2" />
        <Table.Column width={200} dataIndex="title3" title="title3" />
        <Table.Column width={400} dataIndex="title4" title="title4" />
        <Table.Column width={200} dataIndex="title5" title="title5" />
        <Table.Column width={200} dataIndex="title6" title="title6" />
        <Table.Column width={200} dataIndex="title7" title="title7" />
        <Table.Column width={200} dataIndex="title8" title="title8" />
      </Table>
      <Pagination
        total={20}
        onChange={handlePaginationChange}
        style={{ textAlign: 'right', marginTop: '10px' }}
      />
    </div>
  );
}
