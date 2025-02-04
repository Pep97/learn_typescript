"use strict";
//--------------------
// CSV Writer Project
//--------------------
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class CSVWriter {
    constructor(columns // this way you know that they have to be 4 strings
    ) {
        this.columns = columns;
        this.csv = this.columns.join(',') + '\n'; // '\n' this is a new line
    }
    save(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = '\n';
        console.log('file saved to', filename);
    }
    addRows(values) {
        let rows = values.map((v) => this.formatRow(v));
        this.csv += rows.join('\n');
        console.log(this.csv);
    }
    formatRow(p) {
        return this.columns.map((col) => p[col]).join(',');
    }
}
const writer = new CSVWriter(['id', 'amount', 'to', 'notes']);
writer.addRows([
    { id: 1, amount: 50, to: 'yoshi', notes: 'for design work' },
    { id: 2, amount: 100, to: 'mario', notes: 'for design project' },
]);
writer.save('./data/payments.csv');
