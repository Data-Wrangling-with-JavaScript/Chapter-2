"use strict";

//
// A reuseable code module with a function to generate a report.
//

function generateReport (data) {
    const columns = Object.keys(data[0]);
    return {
        numRows: data.length,
        numColumns: columns.length,
        columnNames: columns,
    };
};

module.exports = generateReport;
