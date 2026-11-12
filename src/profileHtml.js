import { SerchUsers, ShowProfile, Submit } from "./profile.js"


const profile = document.querySelector("#profile");
const profile2 = document.querySelector("#parent2");
const serch2 = document.querySelector("#search2");
const submit = document.querySelector("#submit");

ShowProfile(profile, profile2)
SerchUsers(submit, serch2)
Submit(profile);