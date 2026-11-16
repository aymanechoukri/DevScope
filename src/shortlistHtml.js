import { FetchData, modale } from "./shortlist.js";

const article = document.querySelector("#articls");
const popap = document.querySelector("#popap");
const colsOpan = document.querySelector(".clos-opan");

FetchData(article);
modale(colsOpan, popap);