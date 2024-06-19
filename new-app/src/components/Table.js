import React, { useState, useEffect } from 'react';
import '../Css/Table.css';

const Table = ({ data, columns, pagination, recordsPerPage, totalRecords }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (pagination) {
      setTotalPages(Math.ceil(totalRecords / recordsPerPage));
    } else {
      setTotalPages(1);
    }
  }, [totalRecords, pagination, recordsPerPage]);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTableHeader = () => {
    return (
      <>
        <th>Serial No.</th>
        {columns.map((column) => (
          <th key={column}>{column}</th>
        ))}
      </>
    );
  };

  const renderTableData = () => {
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    const displayedData = pagination ? data.slice(startIndex, endIndex) : data;

    return displayedData.map((row, index) => (
      <tr key={index}>
        <td>{startIndex + index + 1}</td>
        {columns.map((column) => (
          <td key={column}>{row[column]}</td>
        ))}
      </tr>
    ));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5; // Number of page buttons to show

    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    let endPage = startPage + maxPageButtons - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </button>
      );
    }

    if (startPage > 1) {
      pageNumbers.unshift(
        <button key="first" onClick={() => handleClick(1)}>
          1
        </button>
      );
      if (startPage > 2) {
        pageNumbers.splice(1, 0, <span key="start-ellipsis">...</span>);
      }
    }

    if (endPage < totalPages) {
      pageNumbers.push(
        <button key="last" onClick={() => handleClick(totalPages)}>
          {totalPages}
        </button>
      );
      if (endPage < totalPages - 1) {
        pageNumbers.splice(pageNumbers.length - 1, 0, <span key="end-ellipsis">...</span>);
      }
    }

    return pageNumbers;
  };

  const renderPagination = () => {
    if (!pagination) return null;

    return (
      <div className="pagination-container">
        <div className="pagination">
          <button
            onClick={() => handleClick(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {renderPageNumbers()}
          <button
            onClick={() => handleClick(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        <div className="total-records">
          Total Records: {totalRecords}
        </div>
      </div>
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>{renderTableHeader()}</tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>
      {renderPagination()}
    </div>
  );
};

export default Table;
