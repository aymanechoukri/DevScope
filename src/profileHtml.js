import { SerchUsers, ShowProfile, Submit } from "./profile.js"


const profile = document.querySelector("#profile");
const profile2 = document.querySelector("#parent2");
const serch2 = document.querySelector("#search2");
const submit = document.querySelector("#submit");

export const searchRepo = document.querySelector("#search-search-repo");
export const longage = document.querySelectorAll(".longage");

ShowProfile(profile, profile2)
SerchUsers(submit, serch2, profile)
Submit(profile);