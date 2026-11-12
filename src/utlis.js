import { SerchUsers } from "./search.js";

const serchValue = document.querySelector("#search");
const serch = document.querySelector("#submit");
const parent = document.querySelector("#Error");
const loading = document.querySelector("#loding");

SerchUsers(serch, serchValue, parent, loading);
