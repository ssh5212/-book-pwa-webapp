// 이름으로 가져오기
import { conHello, fnPlusNumbers } from './03_library_named.js';
console.log(conHello, 'library_named');
console.log('1+2 = ', fnPlusNumbers(1, 2));

// 이름으로 모두 가져오기
import * as myLibrary from './03_library_named.js';
console.log(myLibrary.conHello, 'library_named with *');
console.log('3+4 = ', myLibrary.fnPlusNumbers(3, 4));

// 기본으로 가져오기
import fnMyFunction from './03_library_default.js';
console.log('5+6 = ', fnMyFunction(5, 6));