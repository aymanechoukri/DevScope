import { MOCK_API } from "./api.js";
const search = document.querySelector("#search");
const status = document.querySelectorAll(".status");

let data = null;
let valueSearch = "";
let valueFilter = "Tous";

export async function FetchData(parent) {
  refrsh(parent);
  try {
    const res = await fetch(MOCK_API);
    if (!res.ok) {
      throw new error("User Not Found");
    }
    data = await res.json();
  } catch (error) {
    console.error(error);
  } finally {
    parent.innerHTML = "";
  }

  parent.innerHTML = "";
  ValueFilter(parent);
  const resultData = await searchUser(data);

  resultData.forEach((user) => {
    const rating = [
      user.star1,
      user.star2,
      user.star3,
      user.star4,
      user.star5,
    ].filter((star) => star === "yellow").length;
    const html = `
        <article
            class="group  relative z-10  rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D552A3]/40 hover:bg-white/[0.06] hover:shadow-[0_8px_35px_rgba(142,30,162,0.18)] md:p-6"
          >
            <div
              class="flex flex-col justify-between gap-6 xl:flex-row xl:items-center"
            >
              <div class="flex items-start gap-4">
                <div class="relative shrink-0">
                  <img
                    src=${user.avatar_url}
                    alt="Profile image"
                    class="h-16 w-16 rounded-2xl border-2 border-[#D552A3]/40 object-cover shadow-[0_0_20px_rgba(213,82,163,0.15)] transition-all duration-300 group-hover:border-[#D552A3]"
                  />
                  <span
                    class="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-[#100B16] bg-green-400"
                  ></span>
                </div>

                <div class="flex flex-col gap-2">
                  <h3
                    class="text-lg font-bold text-white transition-colors group-hover:text-[#F49ACD]"
                  >
                    ${user.username}
                  </h3>

                  <div
                    class="flex flex-wrap items-center gap-2 text-sm text-gray-400"
                  >
                    <span class="h-1 w-1 rounded-full bg-gray-600"></span>
                    <span
                      class="rounded-md border border-[#8E1EA2]/30 bg-[#8E1EA2]/15 px-2 py-1 text-xs font-semibold text-[#DDA0E8]"
                    >
                      ${user.language}
                    </span>
                  </div>

                  <p class="flex items-center gap-2 text-xs text-gray-500">
                    <i class="fa-regular fa-calendar text-[#D552A3]"></i>
                    ${user.addedAt}
                  </p>
                </div>
              </div>

              <div
                class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between xl:justify-end"
              >
                <div
                  class="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3"
                >
                  <div class="flex items-center gap-1 text-sm">
                      ${[1, 2, 3, 4, 5]
                        .map(
                          (num) => `
                        <i
                          data-star="${user.id}"
                          data-star-index="${num}"
                          class="${
                            user[`star${num}`] === "yellow"
                              ? "text-yellow-400"
                              : "text-gray-600"
                          } fa-solid fa-star cursor-pointer">
                        </i>
                      `,
                        )
                        .join("")}
                    </div>

                    <span class="text-xs font-semibold text-gray-400">
                      ${rating}/5
                    </span>

                <div class="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    data-value=${user.status}
                    data-status=${user.id}
                    class="${user.status === "REFUSÉ" ? "rounded-xl cursor-pointer border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-xs font-bold text-red-400 transition-all duration-300 hover:border-red-500/50 hover:bg-red-500/20 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)]" : "rounded-xl cursor-pointer border border-green-500/20 bg-green-500/10 px-4 py-2.5 text-xs font-bold text-green-400 transition-all duration-300 hover:border-green-500/50 hover:bg-green-500/20 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)]"}"
                  >
                    ${user.status === "REFUSÉ" ? `<i class="fa-solid fa-xmark mr-1"></i> ` : `<i class="fa-solid fa-check"></i>`}
                    ${user.status}
                  </button>

                  <button
                    type="button"
                    data-update=${user.id}
                    class="rounded-xl cursor-pointer border border-[#D552A3]/30 bg-gradient-to-r from-[#8E1EA2]/20 to-[#D552A3]/10 px-4 py-2.5 text-xs font-bold text-[#F49ACD] transition-all duration-300 hover:border-[#D552A3]/60 hover:from-[#8E1EA2]/40 hover:to-[#D552A3]/30 hover:shadow-[0_0_20px_rgba(213,82,163,0.15)]"
                  >
                    <i class="fa-solid fa-pen-to-square mr-1"></i>
                    Modifier
                  </button>

                  <button
                  data-deleted=${user.id}
                    type="button"
                    class="rounded-xl cursor-pointer border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-bold text-gray-400 transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
                  >
                    <i class="fa-solid fa-trash-can mr-1"></i>
                    Supprimer
                  </button>
                </div>
              </div>
            </article>
        `;
    parent.insertAdjacentHTML("beforeend", html);
  });
}

function refrsh(ref) {
  ref.innerHTML = `
        <p class="text-purple-600 text-sm font-medium bg-purple-500/10 border border-purple-500/20 rounded-lg px-4 py-3 text-center animate-pulse">
            <i class="fa-solid fa-spinner fa-spin mr-2"></i>
            Loading...
        </p>
    `;
}

export function modale(button, popap) {
  button.addEventListener("click", () => {
    popap.hidden = true;
  });
}

export async function getData() {
  try {
    const res = await fetch(MOCK_API);

    if (!res.ok) {
      throw console.error("user not found");
    }

    const users = await res.json();
    return users;
  } catch (err) {
    console.error(err);
  }
}

export async function updateCondidate(article, popap, name, des, log, submit) {
  let userId = null;

  article.addEventListener("click", async (e) => {
    const updateID = e.target.closest("[data-update]");
    if (!updateID) return;
    userId = Number(updateID.dataset.update);
    popap.hidden = false;
    const data = await getData();

    const findUser = data.find((u) => Number(u.id) === userId);

    name.value = findUser.username;
    des.value = findUser.description;
    log.value = findUser.language;
  });

  submit.addEventListener("click", async () => {
    let isValid = true;

    if (name.value.trim() === "") {
      isValid = false;
    }

    if (des.value.trim() === "") {
      isValid = false;
    }

    if (log.value.trim() === "") {
      isValid = false;
    }

    if (!isValid) {
      return;
    }
    try {
      const res = await fetch(`${MOCK_API}/${userId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username: name.value,
          description: des.value,
          language: log.value,
        }),
      });

      const updatedUser = await res.json();

      name.value = "";
      des.value = "";
      log.value = "";

      popap.hidden = true;

      await "FetchData"(article);
    } catch (err) {
      console.error(err);
    }
  });
}

export function modaleDeletd(button, popap) {
  button.addEventListener("click", () => {
    popap.hidden = true;
  });
}

export async function deletedData(article, popap, deletedB) {
  let idUser = null;

  article.addEventListener("click", async (e) => {
    const deketdU = e.target.closest("[data-deleted]");
    if (!deketdU) return;

    popap.hidden = false;

    idUser = Number(deketdU.dataset.deleted);
  });

  deletedB.addEventListener("click", async () => {
    try {
      const res = await fetch(`${MOCK_API}/${idUser}`, {
        method: "DELETE",
      });

      FetchData(article);
      popap.hidden = true;

      if (!res.ok) {
        throw Error("user introvable");
      }
    } catch (err) {
      console.error(err);
    }
  });
}

export async function changeStatus(article) {
  const data = await getData();
  let userId = null;

  article.addEventListener("click", async (e) => {
    const btnStatus = e.target.closest("[data-status]");
    if (!btnStatus) return;

    userId = Number(btnStatus.dataset.status);

    const newStatus =
      btnStatus.dataset.value === "REFUSÉ" ? "A CONTACTER" : "REFUSÉ";

    try {
      const res = await fetch(`${MOCK_API}/${userId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          status: newStatus,
        }),
      });

      if (!res.ok) {
        throw new Error("user introvable");
      }
      const dat = await res.json();

      btnStatus.dataset.value = dat.status;

      await FetchData(article);
    } catch (err) {
      console.error(err);
    }
  });
}

export function stars(article) {
  article.addEventListener("click", async (e) => {
    const btnStar = e.target.closest("[data-star-index]");
    if (!btnStar) return;

    const userId = Number(btnStar.dataset.star);
    const selectedRating = Number(btnStar.dataset.starIndex);

    try {
      const users = await getData();

      const user = users.find((u) => Number(u.id) === userId);

      if (!user) throw new Error("User not found");

      const ratingData = {};

      for (let i = 1; i <= 5; i++) {
        ratingData[`star${i}`] = i <= selectedRating ? "yellow" : "";
      }

      const res = await fetch(`${MOCK_API}/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...user,
          ...ratingData,
        }),
      });

      if (!res.ok) throw new Error("Update failed");

      await FetchData(article);
    } catch (err) {
      console.error(err);
    }
  });
}

function searchUser(user) {
  return user.filter((u) => {
    const search = u.username.toLowerCase().includes(valueSearch.toLowerCase());
    const filterStatus = valueFilter === "Tous" || u.status === valueFilter;

    return search && filterStatus;
  });
}

function ValueFilter(article) {
  search.addEventListener("input", (e) => {
    valueSearch = e.target.value;
    FetchData(article);
  });

  status.forEach((u) => {
    u.addEventListener("click", () => {
      valueFilter = u.dataset.status;
      FetchData(article);
    });
  });
}
