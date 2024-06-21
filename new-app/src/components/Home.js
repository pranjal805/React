import React from 'react';
import landscapeImage from '../assets/pexels-bri-schneiter-28802-346529.jpg'
import Table from './Table';
import { useState } from 'react';
import { useEffect } from 'react';
import { PaginationAPI } from '../config/constants';

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
        const response = await fetch(`${PaginationAPI}?offset=${page}&limit=${recordsPerPage}`, {
            method: 'GET',
        }).then((res) => res.json());
        setData(response); // Assuming the API returns data in the 'data' field
        setTotalRecords(response?.totalRecords); // Assuming the API returns total number of records in 'totalRecords'
      };
      useEffect(() => {
        fetchData(currentPage);
      }, [currentPage]);
  return (
   <> 
   <div style={{
      position: 'absolute',
      top: '45%',
      left: '35%',
      transform: 'translate(-50%, -50%)'
    }}>
       <img src={landscapeImage} alt="Example" style={{ width: '100%', height: 'auto', opacity: 'inherit'}}/>
    </div>
    <div>
      <Table
        data={data}
        columns={data1}
        pagination={true}
        recordsPerPage={recordsPerPage}
        totalRecords={totalRecords}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
    </>
  );
};

export default Home;
