import React from 'react';
import Table from './Table';
const data = [
    { id: 1, name: 'John Doe', age: 28, city: 'New York' },
    { id: 3, name: 'Jane Smith', age: 34, city: 'Los Angeles' },
    { id: 3, name: 'Michael Johnson', age: 45, city: 'Chicago' },
    { id: 4, name: 'Sara Wilson', age: 29, city: 'Miami' },
    { id: 5, name: 'David Brown', age: 41, city: 'Seattle' },
    { id: 6, name: 'Linda Green', age: 36, city: 'Boston' },
    { id: 7, name: 'James White', age: 50, city: 'San Francisco' },
    { id: 8, name: 'Patricia Black', age: 33, city: 'Denver' },
    { id: 9, name: 'Robert Young', age: 39, city: 'Austin' },
    { id: 10, name: 'Mary Blue', age: 42, city: 'Houston' },
    { id: 1, name: 'John Doe', age: 28, city: 'New York' },
    { id: 3, name: 'Jane Smith', age: 34, city: 'Los Angeles' },
    { id: 3, name: 'Michael Johnson', age: 45, city: 'Chicago' },
    { id: 4, name: 'Sara Wilson', age: 29, city: 'Miami' },
    { id: 5, name: 'David Brown', age: 41, city: 'Seattle' },
    { id: 6, name: 'Linda Green', age: 36, city: 'Boston' },
    { id: 7, name: 'James White', age: 50, city: 'San Francisco' },
    { id: 8, name: 'Patricia Black', age: 33, city: 'Denver' },
    { id: 9, name: 'Robert Young', age: 39, city: 'Austin' },
    { id: 10, name: 'Mary Blue', age: 42, city: 'Houston' },
    { id: 1, name: 'John Doe', age: 28, city: 'New York' },
    { id: 3, name: 'Jane Smith', age: 34, city: 'Los Angeles' },
    { id: 3, name: 'Michael Johnson', age: 45, city: 'Chicago' },
    { id: 4, name: 'Sara Wilson', age: 29, city: 'Miami' },
    { id: 5, name: 'David Brown', age: 41, city: 'Seattle' },
    { id: 6, name: 'Linda Green', age: 36, city: 'Boston' },
    { id: 7, name: 'James White', age: 50, city: 'San Francisco' },
    { id: 8, name: 'Patricia Black', age: 33, city: 'Denver' },
    { id: 9, name: 'Robert Young', age: 39, city: 'Austin' },
    { id: 10, name: 'Mary Blue', age: 42, city: 'Houston' },
    { id: 1, name: 'John Doe', age: 28, city: 'New York' },
    { id: 3, name: 'Jane Smith', age: 34, city: 'Los Angeles' },
    { id: 3, name: 'Michael Johnson', age: 45, city: 'Chicago' },
    { id: 4, name: 'Sara Wilson', age: 29, city: 'Miami' },
    { id: 5, name: 'David Brown', age: 41, city: 'Seattle' },
    { id: 6, name: 'Linda Green', age: 36, city: 'Boston' },
    { id: 7, name: 'James White', age: 50, city: 'San Francisco' },
    { id: 8, name: 'Patricia Black', age: 33, city: 'Denver' },
    { id: 9, name: 'Robert Young', age: 39, city: 'Austin' },
    { id: 10, name: 'Mary Blue', age: 42, city: 'Houston' },
    { id: 1, name: 'John Doe', age: 28, city: 'New York' },
    { id: 3, name: 'Jane Smith', age: 34, city: 'Los Angeles' },
    { id: 3, name: 'Michael Johnson', age: 45, city: 'Chicago' },
    { id: 4, name: 'Sara Wilson', age: 29, city: 'Miami' },
    { id: 5, name: 'David Brown', age: 41, city: 'Seattle' },
    { id: 6, name: 'Linda Green', age: 36, city: 'Boston' },
    { id: 7, name: 'James White', age: 50, city: 'San Francisco' },
    { id: 8, name: 'Patricia Black', age: 33, city: 'Denver' },
    { id: 9, name: 'Robert Young', age: 39, city: 'Austin' },
    { id: 10, name: 'Mary Blue', age: 42, city: 'Houston' },
    { id: 1, name: 'John Doe', age: 28, city: 'New York' },
    { id: 3, name: 'Jane Smith', age: 34, city: 'Los Angeles' },
    { id: 3, name: 'Michael Johnson', age: 45, city: 'Chicago' },
    { id: 4, name: 'Sara Wilson', age: 29, city: 'Miami' },
    { id: 5, name: 'David Brown', age: 41, city: 'Seattle' },
    { id: 6, name: 'Linda Green', age: 36, city: 'Boston' },
    { id: 7, name: 'James White', age: 50, city: 'San Francisco' },
    { id: 8, name: 'Patricia Black', age: 33, city: 'Denver' },
    { id: 9, name: 'Robert Young', age: 39, city: 'Austin' },
    { id: 10, name: 'Mary Blue', age: 42, city: 'Houston' },
    { id: 1, name: 'John Doe', age: 28, city: 'New York' },
    { id: 3, name: 'Jane Smith', age: 34, city: 'Los Angeles' },
    { id: 3, name: 'Michael Johnson', age: 45, city: 'Chicago' },
    { id: 4, name: 'Sara Wilson', age: 29, city: 'Miami' },
    { id: 5, name: 'David Brown', age: 41, city: 'Seattle' },
    { id: 6, name: 'Linda Green', age: 36, city: 'Boston' },
    { id: 7, name: 'James White', age: 50, city: 'San Francisco' },
    { id: 8, name: 'Patricia Black', age: 33, city: 'Denver' },
    { id: 9, name: 'Robert Young', age: 39, city: 'Austin' },
    { id: 10, name: 'Mary Blue', age: 42, city: 'Houston' },
    // Add more records as needed
  ];
  
const columns = ['id', 'name', 'age', 'city'];
const Home = () => {
  return (
    <div className="main-content">
      <h1>Welcome to My Company</h1>
      <h1>Table with Pagination</h1>
      <Table data={data} columns={columns} pagination={true} recordsPerPage={5} totalRecords={data.length} />
      <p>Test.</p>
    </div>
  );
};

export default Home;
