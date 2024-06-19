import React from 'react';
import Table from './Table';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
    const data1 = [
        {
            key: 'creationAt',
            name: 'Creation At',
        },
    ];
    const [data, setData] = useState([]);
    const [totalRecords, setTotalRecords] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 3;
    
    const fetchData = async (page) => {
        // Replace with your API endpoint
        const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=${recordsPerPage}`, {
            method: 'GET',
        }).then((res) => res.json());
        console.log('aaaa', response);
        setData(response); // Assuming the API returns data in the 'data' field
        setTotalRecords(response?.totalRecords); // Assuming the API returns total number of records in 'totalRecords'
      };
    
      useEffect(() => {
        fetchData(currentPage);
      }, [currentPage]);
  return (
    <div className="main-content">
      <h1>Table with Pagination</h1>
      <Table
        data={data}
        // columns={['id', 'name', 'age', 'city','description','creationAt']}
        columns={data1}
        pagination={false}
        recordsPerPage={recordsPerPage}
        totalRecords={totalRecords}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;
