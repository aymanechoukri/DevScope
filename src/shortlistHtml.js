import { changeStatus, deletedData, FetchData, getData, modale, modaleDeletd, updateCondidate } from "./shortlist.js";

const article = document.querySelector("#articls");
const popap = document.querySelector("#popap");
const colsOpan = document.querySelector(".clos-opan");

const name = document.querySelector("#name");
const des = document.querySelector("#des");
const log = document.querySelector("#log");
const submit = document.querySelector("#submit");

const deletePopap = document.querySelector("#deletePopup");
const cancelDelete = document.querySelector("#cancelDelete");
const confirmDelete = document.querySelector("#confirmDelete");

FetchData(article);
modale(colsOpan, popap);
console.log(getData())
updateCondidate(article, popap, name, des, log, submit)
deletedData(article, deletePopap, confirmDelete);
modaleDeletd(cancelDelete, deletePopap);
changeStatus(article);

