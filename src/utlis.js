import { SerchUsers } from "./search.js";

const serchValue = document.querySelector("#search");
const serch = document.querySelector("#submit");
const parent = document.querySelector("#Error");

SerchUsers(serch, serchValue, parent);
