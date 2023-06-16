(() => {
  "use strict";
  var e,
    t = {
      686: (e, t, r) => {
        r(826);
        class a {
          constructor(e, t, r, a, o, n, s, l) {
            (this.name = e),
              (this.notes = t),
              (this.project = r),
              (this.isCompleted = s),
              (this.date = a),
              (this.image = o),
              (this.star = n),
              (this.id = l);
          }
          getIsCompleted() {
            return this.isCompleted;
          }
          toggleStar() {
            this.star = !this.star;
          }
          toggleComplete() {
            this.isCompleted = !this.isCompleted;
          }
          getID() {
            return this.id;
          }
        }
        var o = r(755);
        const n =
          "undefined" != typeof localStorage && localStorage.getItem("theme")
            ? localStorage.getItem("theme")
            : window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
        "light" === n
          ? document.documentElement.classList.remove("dark")
          : document.documentElement.classList.add("dark"),
          window.localStorage.setItem("theme", n),
          document
            .getElementById("themeToggle")
            .addEventListener("click", () => {
              const e = document.documentElement;
              e.classList.toggle("dark");
              const t = e.classList.contains("dark");
              localStorage.setItem("theme", t ? "dark" : "light");
            });
        const s = document.getElementById("profile-popover"),
          l = document.getElementById("profile");
        function i() {
          const e = document.getElementById("view-popover"),
            t = document.getElementById("view"),
            r = document.getElementById("view-arrow");
          t.addEventListener("click", () => {
            e.classList.toggle("show"),
              r.classList.toggle("down"),
              r.classList.toggle("up");
          }),
            window.addEventListener("click", (a) => {
              t.contains(a.target) ||
                (e.classList.remove("show"),
                r.classList.add("down"),
                r.classList.remove("up"));
            });
        }
        function d() {
          const e = document.getElementById("sort-popover"),
            t = document.getElementById("sort"),
            r = document.getElementById("sort-arrow");
          t.addEventListener("click", () => {
            e.classList.toggle("show"),
              r.classList.toggle("down"),
              r.classList.toggle("up");
          }),
            window.addEventListener("click", (a) => {
              t.contains(a.target) ||
                (e.classList.remove("show"),
                r.classList.add("down"),
                r.classList.remove("up"));
            });
        }
        l.addEventListener("click", () => {
          s.classList.toggle("show");
        }),
          i(),
          d(),
          window.addEventListener("click", (e) => {
            l.contains(e.target) || s.classList.remove("show"),
              p.contains(e.target) || p.classList.remove("active");
          });
        let c = document.querySelectorAll(".item");
        c.forEach((e) => {
          e.addEventListener("click", (e) => {
            c.forEach((e) => {
              e.classList.remove("active");
            }),
              e.currentTarget.classList.add("active");
          });
        });
        const p = document.getElementById("addProject");
        function v() {
          document.querySelectorAll(".task-cbx").forEach((e) => {
            e.addEventListener("click", () => {
              e.disabled = !0;
              const t = e.getAttribute("data-cbx-index"),
                r = document.querySelector(`[data-title-index="${t}"]`),
                a = document.querySelector(`[data-options-index="${t}"]`),
                n = document.querySelector(`[data-bg-index="${t}"]`),
                s = g[t],
                l = n.getAttribute("data-task-id");
              var i = document.cookie.match(/csrftoken=(.+)/)[1];
              axios.patch('/tasks-api-details/' + l + '/',
              { completed: !s.isCompleted }, {
                headers: {"X-Csrftoken": i}
              })
              .then(function (response) {
                e.disabled = !1;
              })
              .catch(function (error) {
                e.disabled = !1;
              })
                e.checked
                  ? ((r.style.textDecoration = "line-through"),
                    (r.style.opacity = "0.7"),
                    (n.style.background = "transparent"),
                    (n.style.boxShadow = "none"),
                    (a.innerHTML = `<button class="delete-task" data-delete-index="${t}">\n      <svg class="fill-[var(--tertiary)] transition-all ease-out hover:fill-[var(--secondary)] hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">\n          <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>\n      </svg>\n  </button>`))
                  : ((r.style.textDecoration = "none"),
                    (r.style.opacity = "1"),
                    (n.style.background = "var(--task-bg)"),
                    (n.style.boxShadow = "var(--task-shadow)"),
                    (a.innerHTML = `<button class="delete-task hidden" data-delete-index="${t}">\n      <svg class="fill-[var(--tertiary)] transition-all ease-out hover:fill-[var(--secondary)] hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">\n          <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>\n      </svg>\n  </button>\n      <button>\n      <svg class="invisible fill-[var(--tertiary)] group-hover:visible transition-all ease-out hover:fill-[var(--secondary)] hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">\n          <path d="M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z"></path>\n      </svg>\n  </button>\n  ${
                      s.star
                        ? '<input id="star-cbx" class="star-cbx appearance-none m-0 hover:cursor-pointer" type="checkbox" checked></input>\n<label for="star-cbx">\n<svg class="fill-[var(--secondary)] transition-all ease-out hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 32 32">\n<path d="M 30.335938 12.546875 L 20.164063 11.472656 L 16 2.132813 L 11.835938 11.472656 L 1.664063 12.546875 L 9.261719 19.394531 L 7.140625 29.398438 L 16 24.289063 L 24.859375 29.398438 L 22.738281 19.394531 Z"></path>\n</svg>\n</label> '
                        : '<input class="star-cbx appearance-none m-0 hover:cursor-pointer" type="checkbox"></input>\n<label for="star-cbx">\n<svg class="invisible fill-[var(--tertiary)] group-hover:visible transition-all ease-out hover:fill-[var(--secondary)] hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 32 32">\n<path d="M 16 2.125 L 15.09375 4.1875 L 11.84375 11.46875 L 3.90625 12.3125 L 1.65625 12.5625 L 3.34375 14.0625 L 9.25 19.40625 L 7.59375 27.21875 L 7.125 29.40625 L 9.09375 28.28125 L 16 24.28125 L 22.90625 28.28125 L 24.875 29.40625 L 24.40625 27.21875 L 22.75 19.40625 L 28.65625 14.0625 L 30.34375 12.5625 L 28.09375 12.3125 L 20.15625 11.46875 L 16.90625 4.1875 Z M 16 7.03125 L 18.5625 12.8125 L 18.8125 13.34375 L 19.375 13.40625 L 25.65625 14.0625 L 20.96875 18.28125 L 20.53125 18.6875 L 20.65625 19.25 L 21.96875 25.40625 L 16.5 22.28125 L 16 21.96875 L 15.5 22.28125 L 10.03125 25.40625 L 11.34375 19.25 L 11.46875 18.6875 L 11.03125 18.28125 L 6.34375 14.0625 L 12.625 13.40625 L 13.1875 13.34375 L 13.4375 12.8125 Z"></path>\n</svg>\n</label>'
                    }`),
                    document
                      .querySelector(`[data-delete-index="${t}"]`)
                      .addEventListener("click", () => {
                        x(t);
                      }),
                    h());
            });
          });
        }
        function h() {
          document.querySelectorAll(".star-cbx").forEach((e, t) => {
            e.addEventListener("click", () => {
              g[t].toggleStar(), m(), v(), d(), i();
            });
          });
        }
        p.addEventListener("click", () => {
          p.classList.toggle("active");
        }),
          v();
        let g = [];
        function u() {
          document.getElementById("add-task").addEventListener("click", () => {
            !(function () {
              const e = document.createElement("form");
              (b.innerHTML = ""),
                (e.innerHTML =
                  '<div class="flex flex-col gap-10 w-full pb-4">\n  <h1 class="text-3xl text-[var(--secondary)] px-8 pt-6 pb-2">Add Task</h1>\n  <div class="px-8 mt-6 relative">\n    <input id="title" type="text" name="title" class="peer bg-[var(--task-bg)] h-10 w-full border-2 border-[var(--task-hover)] text-[var(--tertiary)] placeholder-transparent focus:outline-none focus:border-[var(--secondary)] rounded-lg px-4" placeholder="Title" />\n    <label for="title" class="absolute left-8 -top-7 text-[var(--primary)] text-xl transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:left-12 peer-focus:-top-8 peer-focus:text-[var(--secondary)] peer-focus:text-[1.3rem] hover:cursor-text">Title</label>\n  </div>\n  <div class="px-8 relative">\n    <input id="description" type="text" name="description" class="peer bg-[var(--task-bg)] h-48 w-full border-2 border-[var(--task-hover)] text-[var(--tertiary)] placeholder-transparent focus:outline-none focus:border-[var(--secondary)] rounded-lg px-4" placeholder="Description" />\n    <label for="description" class="absolute left-8 -top-7 text-[var(--primary)] text-xl transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:left-12 peer-focus:-top-8 peer-focus:text-[var(--secondary)] peer-focus:text-[1.3rem] hover:cursor-text">Description</label>\n  </div>\n  <div class="flex flex-row gap-4">\n    <div class="px-8 relative">\n      <input id="project" type="text" name="project" class="peer bg-[var(--task-bg)] h-10 w-full border-2 border-[var(--task-hover)] text-[var(--tertiary)] placeholder-transparent focus:outline-none focus:border-[var(--secondary)] rounded-lg px-4" placeholder="Project" />\n      <label for="project" class="absolute left-8 -top-7 text-[var(--primary)] text-xl transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:left-12 peer-focus:-top-8 peer-focus:text-[var(--secondary)] peer-focus:text-[1.3rem] hover:cursor-text">Project</label>\n    </div>\n    <div class="px-8 relative">\n      <input id="date" type="date" name="date" class="peer bg-[var(--task-bg)] h-10 w-full border-2 border-[var(--task-hover)] text-[var(--tertiary)] placeholder-transparent focus:outline-none focus:border-[var(--secondary)] rounded-lg px-4" placeholder="Date" />\n      <label for="date" class="absolute left-8 -top-7 text-[var(--primary)] text-xl transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:left-12 peer-focus:-top-8 peer-focus:text-[var(--secondary)] peer-focus:text-[1.3rem] hover:cursor-text">Date</label>\n    </div>\n    <div class="px-8 relative">\n      <input id="image" type="text" name="image" class="peer bg-[var(--task-bg)] h-10 w-full border-2 border-[var(--task-hover)] text-[var(--tertiary)] placeholder-transparent focus:outline-none focus:border-[var(--secondary)] rounded-lg px-4" placeholder="Image" />\n      <label for="image" class="absolute left-8 -top-7 text-[var(--primary)] text-xl transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:left-12 peer-focus:-top-8 peer-focus:text-[var(--secondary)] peer-focus:text-[1.3rem] hover:cursor-text">Image</label>\n    </div>\n    <div class="px-8 relative">\n      <input id="star" type="checkbox" name="star" class="peer bg-[var(--task-bg)] h-10 w-full border-2 border-[var(--task-hover)] text-[var(--tertiary)] placeholder-transparent focus:outline-none focus:border-[var(--secondary)] rounded-lg px-4" placeholder="Star" />\n      <label for="star" class="absolute left-8 -top-7 text-[var(--primary)] text-xl transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:left-12 peer-focus:-top-8 peer-focus:text-[var(--secondary)] peer-focus:text-[1.3rem] hover:cursor-text">Star</label>\n    </div>\n  </div>\n\n  \n  <div class="flex flex-row justify-end gap-4">\n    <input type="reset" value="Cancel" class="fixed hover:cursor-pointer p-4 w-40 group-hover:text-[var(--hover)] bg-gradient-to-br from-[var(--delete-primary-gradient)] to-[var(--delete-secondary-gradient)] group-hover:bg-gradient-to-tl grid place-content-center text-[var(--primary)] bottom-12 right-52 border-0 transition-none z-50 rounded-full shadow-md text-lg hover:scale-[1.02] active:scale-95 transition-transform"></input>\n    <input type="submit" value="Add" class="fixed hover:cursor-pointer p-4 w-40 group-hover:text-[var(--hover)] bg-gradient-to-br from-[var(--primary-gradient)] to-[var(--secondary-gradient)] group-hover:bg-gradient-to-tl grid place-content-center text-[var(--primary)] bottom-12 right-8 border-0 transition-none z-50 rounded-full shadow-md text-lg hover:scale-[1.02] active:scale-95 transition-transform"></input>\n  </div>\n  </div>'),
                b.appendChild(e);
            })(),
              document.querySelector("form").addEventListener("submit", (e) => {
                e.preventDefault();
                const t = document.getElementById("title").value,
                  r = document.getElementById("description").value,
                  n = document.getElementById("project").value,
                  s = document.getElementById("date").value,
                  l = document.getElementById("image").value,
                  c = document.getElementById("star").checked;
                var p = document.cookie.match(/csrftoken=(.+)/)[1];
                o.ajax({
                  async: "false",
                  type: "POST",
                  url: "/tasks-api/",
                  data: {
                    title: t,
                    description: r,
                    project: n,
                    date: s,
                    starred: c,
                    completed: !1,
                    csrfmiddlewaretoken: p,
                  },
                  success: function (e) {
                    console.log(e);
                    const o = new a(t, r, n, s, l, c, !1, e.id);
                    g.push(o), m(), v(), d(), i(), u();
                  },
                  error: function (e) {
                    console.log("error"), console.log(e);
                  },
                });
                const h = new a(t, r, n, s, l, c);
                g.push(h), m(), v(), d(), i(), u();
              });
          });
        }
        function x(e) {
          g.splice(e, 1),
            document.querySelectorAll(".delete-task-btn").forEach((e, t) => {
              e.setAttribute("data-delete-index", t);
            }),
            document.querySelectorAll(".star-cbx").forEach((e, t) => {
              e.setAttribute("data-star-index", t);
            }),
            m();
        }
        function m() {
          b.innerHTML =
            '<div class="flex flex-col gap-4 fixed top-0 w-full pb-4 bg-[#E6EEF8] dark:bg-[#18181C] z-40">\n  <h1 class="text-3xl text-[var(--secondary)] px-8 pt-6 pb-2">Tasks</h1>\n  \n  <div class="flex gap-2 px-8 -mt-2">\n      <div class="relative">\n          <button id="view" class="flex items-center justify-between bg-[var(--content-bg)] px-2 py-1 w-[max(15vw,12rem)] gap-2 border-2 border-[var(--theme-bg-color)] rounded-md shadow-sm hover:scale-[1.01] hover:bg-[var(--theme-bg-color)]">\n              <div class="gap-2 items-center flex">\n                  <svg class="fill-[var(--primary)] transition-none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">\n                      <path d="M7 11H22V13H7zM7 5H22V7H7zM7 17H22V19H7zM3 10.5A1.5 1.5 0 1 0 3 13.5 1.5 1.5 0 1 0 3 10.5zM3 16.5A1.5 1.5 0 1 0 3 19.5 1.5 1.5 0 1 0 3 16.5zM3 4.5A1.5 1.5 0 1 0 3 7.5 1.5 1.5 0 1 0 3 4.5z"></path>\n                  </svg>\n                  <h1 class="text-[var(--primary)]">List view</h1>\n              </div>\n              <div id="view-arrow" class="arrow down big">\n              </div>\n          </button>\n          <div id="view-popover" class="absolute top-10 left-0 w-[max(15vw,12rem)] rounded-md shadow-md bg-[var(--content-bg)] border-2 border-[var(--theme-bg-color)] p-2 z-50">\n              <a href="/" class="block rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-[var(--theme-bg-color)] hover:text-gray-900 dark:hover:text-gray-300">List view</a>\n              <a href="/" class="block rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-[var(--theme-bg-color)] hover:text-gray-900 dark:hover:text-gray-300">Grid view</a>\n          </div>\n      </div>\n      <div class="relative">\n          <button id="sort" class="flex items-center justify-between bg-[var(--content-bg)] px-2 py-1 w-[max(15vw,12rem)] gap-2 border-2 border-[var(--theme-bg-color)] rounded-md shadow-sm hover:scale-[1.01] hover:bg-[var(--theme-bg-color)]">\n              <div class="gap-2 items-center flex">\n                  <svg class="fill-[var(--primary)] transition-none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 128 128">\n                      <path d="M39 117c1.7 0 3-1.3 3-3V21.2l10.9 10.9c.6.6 1.4.9 2.1.9s1.5-.3 2.1-.9c1.2-1.2 1.2-3.1 0-4.2l-16-16c-1.2-1.2-3.1-1.2-4.2 0l-16 16c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0L36 21.2V114C36 115.7 37.3 117 39 117zM89 11c-1.7 0-3 1.3-3 3v92.8L75.1 95.9c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l16 16c.6.6 1.4.9 2.1.9s1.5-.3 2.1-.9l16-16c1.2-1.2 1.2-3.1 0-4.2-1.2-1.2-3.1-1.2-4.2 0L92 106.8V14C92 12.3 90.7 11 89 11z"></path>\n                  </svg>\n                  <h1 class="text-[var(--primary)]">Last modified</h1>\n              </div>\n              <div id="sort-arrow" class="arrow down big">\n              </div>\n          </button>\n          <div id="sort-popover" class="absolute top-10 left-0 w-[max(15vw,12rem)] rounded-md shadow-md bg-[var(--content-bg)] border-2 border-[var(--theme-bg-color)] p-2 z-50">\n              <a href="/" class="block rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-[var(--theme-bg-color)] hover:text-gray-900 dark:hover:text-gray-300">Last modified</a>\n              <a href="/" class="block rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-[var(--theme-bg-color)] hover:text-gray-900 dark:hover:text-gray-300">Name</a>\n              <a href="/" class="block rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-[var(--theme-bg-color)] hover:text-gray-900 dark:hover:text-gray-300">Due date</a>\n          </div>\n      </div>\n  </div>\n</div>\n<button id="add-task" class="fixed p-4 w-40 group-hover:text-[var(--hover)] bg-gradient-to-br from-[var(--primary-gradient)] to-[var(--secondary-gradient)] group-hover:bg-gradient-to-tl grid place-content-center text-[var(--primary)] bottom-12 right-8 border-0 transition-none z-50 rounded-full shadow-md text-lg hover:scale-[1.02] active:scale-95 transition-transform">\n    Add Task\n</button>';
          const e = document.createElement("div");
          e.classList.add("mt-32", "flex", "flex-col", "gap-4"),
            g.forEach((t, r) => {
              (e.innerHTML += `\n<div class="flex flex-col gap-2 px-8">\n    <div class="group flex justify-between w-full items-center px-4 py-3 rounded-xl  transition-all ${
                t.getIsCompleted()
                  ? "bg-transparent"
                  : "bg-[var(--task-bg)] hover:bg-[var(--task-hover)] shadow-sm"
              }" data-bg-index="${r}" data-task-id=${t.getID()}>\n        <div class="flex gap-4 items-center">\n            <div class="checkbox-wrapper-12">\n                <div class="cbx">\n                <input class="task-cbx ${
                t.getIsCompleted() ? "transition-none" : ""
              }" id="task-cbx" type="checkbox" data-cbx-index="${r}" ${
                t.getIsCompleted() ? "checked" : ""
              }>\n                <label for="task-cbx" class="${
                t.getIsCompleted() ? "transition-none isCompleted" : ""
              }"></label>\n                <svg width="15" height="14" viewBox="0 0 15 14" fill="none">\n                    <path d="M2 8.36364L6.23077 12L13 2"></path>\n                </svg>\n                </div>\n                \n                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">\n                <defs>\n                    <filter id="goo-12">\n                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"></feGaussianBlur>\n                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo-12"></feColorMatrix>\n                    <feBlend in="SourceGraphic" in2="goo-12"></feBlend>\n                    </filter>\n                </defs>\n                </svg>\n            </div>\n            <h1 class="text-[var(--primary)] text-lg ${
                t.getIsCompleted() ? "line-through opacity-[0.7]" : ""
              }" data-title-index="${r}">${
                t.name
              }</h1>\n        </div>\n        <div class="flex gap-2 justify-end items-center" data-options-index="${r}">\n        ${
                t.getIsCompleted()
                  ? `<button class="delete-task" data-delete-index="${r}">\n        <svg class="fill-[var(--tertiary)] transition-all ease-out hover:fill-[var(--secondary)] hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">\n            <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>\n        </svg>\n    </button>`
                  : `<button class="delete-task hidden" data-delete-index="${r}">\n    <svg class="fill-[var(--tertiary)] transition-all ease-out hover:fill-[var(--secondary)] hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">\n        <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>\n    </svg>\n</button>\n<button>\n    <svg class="invisible fill-[var(--tertiary)] group-hover:visible transition-all ease-out hover:fill-[var(--secondary)] hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">\n        <path d="M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z"></path>\n    </svg>\n</button>\n${
                      t.star
                        ? '<input id="star-cbx" class="star-cbx appearance-none m-0 hover:cursor-pointer" type="checkbox" checked></input>\n<label for="star-cbx">\n<svg class="fill-[var(--secondary)] transition-all ease-out hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 32 32">\n<path d="M 30.335938 12.546875 L 20.164063 11.472656 L 16 2.132813 L 11.835938 11.472656 L 1.664063 12.546875 L 9.261719 19.394531 L 7.140625 29.398438 L 16 24.289063 L 24.859375 29.398438 L 22.738281 19.394531 Z"></path>\n</svg>\n</label> '
                        : '<input class="star-cbx appearance-none m-0 hover:cursor-pointer" type="checkbox"></input>\n<label for="star-cbx">\n<svg class="invisible fill-[var(--tertiary)] group-hover:visible transition-all ease-out hover:fill-[var(--secondary)] hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 32 32">\n<path d="M 16 2.125 L 15.09375 4.1875 L 11.84375 11.46875 L 3.90625 12.3125 L 1.65625 12.5625 L 3.34375 14.0625 L 9.25 19.40625 L 7.59375 27.21875 L 7.125 29.40625 L 9.09375 28.28125 L 16 24.28125 L 22.90625 28.28125 L 24.875 29.40625 L 24.40625 27.21875 L 22.75 19.40625 L 28.65625 14.0625 L 30.34375 12.5625 L 28.09375 12.3125 L 20.15625 11.46875 L 16.90625 4.1875 Z M 16 7.03125 L 18.5625 12.8125 L 18.8125 13.34375 L 19.375 13.40625 L 25.65625 14.0625 L 20.96875 18.28125 L 20.53125 18.6875 L 20.65625 19.25 L 21.96875 25.40625 L 16.5 22.28125 L 16 21.96875 L 15.5 22.28125 L 10.03125 25.40625 L 11.34375 19.25 L 11.46875 18.6875 L 11.03125 18.28125 L 6.34375 14.0625 L 12.625 13.40625 L 13.1875 13.34375 L 13.4375 12.8125 Z"></path>\n</svg>\n</label>'
                    }`
              }\n            \n        </div>\n    </div>\n</div>`),
                b.appendChild(e),
                document
                  .querySelector(`[data-delete-index="${r}"]`)
                  .addEventListener("click", () => {
                    x(r);
                  }),
                u(),
                document.querySelectorAll(".task-cbx").forEach((e, t) => {
                  e.addEventListener("change", () => {
                    g[t].toggleComplete();
                  });
                }),
                h();
            });
        }
        o.ajax({
          async: "false",
          url: "/tasks-api/",
          type: "GET",
          success: function (e) {
            e.forEach((e) => {
              g.push(
                new a(
                  e.title,
                  e.description,
                  e.project,
                  e.date,
                  e.image,
                  e.starred,
                  e.completed,
                  e.id
                )
              );
            }),
              m(),
              v(),
              u();
          },
        }),
          u();
        const b = document.getElementById("display-container");
      },
    },
    r = {};
  function a(e) {
    var o = r[e];
    if (void 0 !== o) return o.exports;
    var n = (r[e] = { id: e, exports: {} });
    return t[e].call(n.exports, n, n.exports, a), n.exports;
  }
  (a.m = t),
    (e = []),
    (a.O = (t, r, o, n) => {
      if (!r) {
        var s = 1 / 0;
        for (c = 0; c < e.length; c++) {
          for (var [r, o, n] = e[c], l = !0, i = 0; i < r.length; i++)
            (!1 & n || s >= n) && Object.keys(a.O).every((e) => a.O[e](r[i]))
              ? r.splice(i--, 1)
              : ((l = !1), n < s && (s = n));
          if (l) {
            e.splice(c--, 1);
            var d = o();
            void 0 !== d && (t = d);
          }
        }
        return t;
      }
      n = n || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > n; c--) e[c] = e[c - 1];
      e[c] = [r, o, n];
    }),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (a.d = (e, t) => {
      for (var r in t)
        a.o(t, r) &&
          !a.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = { 143: 0 };
      a.O.j = (t) => 0 === e[t];
      var t = (t, r) => {
          var o,
            n,
            [s, l, i] = r,
            d = 0;
          if (s.some((t) => 0 !== e[t])) {
            for (o in l) a.o(l, o) && (a.m[o] = l[o]);
            if (i) var c = i(a);
          }
          for (t && t(r); d < s.length; d++)
            (n = s[d]), a.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return a.O(c);
        },
        r = (self.webpackChunktodo_app = self.webpackChunktodo_app || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (a.nc = void 0);
  var o = a.O(void 0, [278, 223], () => a(686));
  o = a.O(o);
})();
