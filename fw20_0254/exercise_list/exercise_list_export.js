import data from './data.js';

let getData = () => {
    let data2 = JSON.parse(JSON.stringify(data));
    data2 = data2.sort((a, b) => (a.title - b.title));
    return data2;
}
let getCate = (cate) => {
    let data2 = JSON.parse(JSON.stringify(data));
    data2 = data2.filter((a) => a.cate == cate);
    return JSON.parse(JSON.stringify(data2));;
}
let getID = (id) => {
    let data2 = JSON.parse(JSON.stringify(data));
    for (let i = 0; i < data2.length; i++) {
        if (data2[i].id = id) {
            return data2[i]
        }
    }
    return false;
}
export { getData, getCate, getID };