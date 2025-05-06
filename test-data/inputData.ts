import {readFile, utils} from 'xlsx';
import * as path from 'node:path';
import {TestDataSheet} from './createTestData';

const filename = path.resolve(__dirname, './testDataSheet.csv');
const workbook = readFile(filename);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const createTestData: TestDataSheet[] = utils.sheet_to_json(sheet);

export {createTestData}