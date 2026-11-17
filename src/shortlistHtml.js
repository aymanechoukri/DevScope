import { deletedData, FetchData, getData, modale, updateCondidate } from "./shortlist.js";

const article = document.querySelector("#articls");
const popap = document.querySelector("#popap");
const colsOpan = document.querySelector(".clos-opan");

const name = document.querySelector("#name");
const des = document.querySelector("#des");
const log = document.querySelector("#log");
const submit = document.querySelector("#submit");

FetchData(article);
modale(colsOpan, popap);
console.log(getData())
updateCondidate(article, popap, name, des, log, submit)
deletedData(article);