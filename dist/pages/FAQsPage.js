import AbstractPage from "./AbstractPage.js";

export default class extends AbstractPage {
    constructor(){
        super();
        this.setTitle('FAQs');
    }

    async getHtml() {
        return `
        <header id="header" class="fixed inset-x-0 top-0 z-50 backdrop-blur-sm shadow-sm">
          <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
            <div class="flex items-center">
              <a class="flex cursor-pointer text-4xl text-[var(--primary)]" href="/" data-link>to</a>
              <a href="/" data-link class="text-4xl bg-clip-text text-transparent bg-gradient-to-tr from-[var(--primary-gradient)] to-[var(--secondary-gradient)]">do</a>
            </div>
            </div>
            <div class="flex lg:hidden">
              <button id="open-nav" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Open main menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
              <a href="/faqs" data-link class="text-sm font-semibold leading-6 text-white hover:text-gray-300 underline underline-offset-8">FAQs</a>
              <a href="/team" data-link class="text-sm font-semibold leading-6 text-gray-200 hover:text-gray-300">Team</a>
              <a href="/support" data-link class="text-sm font-semibold leading-6 text-gray-200 hover:text-gray-300 ">Support</a>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end items-center">
              <div class="flex text-sm font-semibold leading-6 text-gray-100 transition-all group">
                  <a href="/login" data-link class="transition-all group-hover:mr-1">Log in &nbsp;</a>
                  <a href="/login" data-link class="pr-1 group-hover:pr-0 transition-all" aria-hidden="true"> &rarr;</a>
              </div>
                <a id="signUpBtn" href="/signup" data-link class="ml-6 button button-primary">
                    Sign up
                    <div class="button-border"></div>
                </a>
            </div>
          </nav>
        </header>
        <div id="navbar" class="hidden" role="dialog" aria-modal="true">
          <div class="fixed inset-0 z-50"></div>
          <div id="nav-animation" class="fixed inset-y-0 right-0 z-50 bg-neutral-900 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-end">
              <button id="close-nav" type="button" class="-m-2.5 mt-0 rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Close menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-200/10">
                <div class="py-6">
                  <a href="/faqs" data-link class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:text-gray-300">FAQs</a>
                  <a href="/team" data-link class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:text-gray-300">Team</a>
                  <a href="/support" data-link class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:text-gray-300">Support</a>
                </div>
                <div class="py-6">
                  <a href="/login" data-link class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-100 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-tr from-[var(--primary-gradient)] to-[var(--secondary-gradient)]">Log in</a>
                  <a href="/signup" data-link class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-100 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-tr from-[var(--primary-gradient)] to-[var(--secondary-gradient)]">Sign up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="leading-relaxed max-w-screen-xl pt-24 mx-auto px-4 md:px-8 isolate">
            <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
            </div>
            <div class="space-y-3 text-center">
                <h1 class="text-3xl text-gray-100 font-semibold">
                    Frequently Asked Questions
                </h1>
                <p class="text-gray-300 max-w-lg mx-auto text-base">
                Can’t find the answer you’re looking for? Reach out to our <a href="/support" data-link class="text-indigo-600">support</a> team.</p>
            </div>
            <div class="mt-14 max-w-2xl mx-auto">
            <div class="space-y-4 divide-y divide-gray-700">
            <details
              class="group p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-100"
              >
                <h2 class="font-medium">
                  How do you make holy water?
                </h2>
          
                <span class="relative h-5 w-5 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" stroke-width="2" class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 fill-gray-100" stroke="currentColor" y="0px" width="24" height="24" viewBox="0 0 50 50">
                    <path d="M 24 9 L 24 24 L 9 24 L 9 26 L 24 26 L 24 41 L 26 41 L 26 26 L 41 26 L 41 24 L 26 24 L 26 9 Z"></path>
                  </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 fill-gray-100" stroke="currentColor" stroke-width="2" width="24" height="24" viewBox="0 0 50 50">
                        <path d="M 9 24 L 9 26 L 41 26 L 41 24 Z"></path>
                    </svg>
                </span>
              </summary>
          
              <p class="mt-4 leading-relaxed text-gray-400">
                You boil the hell out of it.
              </p>
            </details>
          
            <details
              class="group p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-100"
              >
                <h2 class="font-medium">
                  Why did the invisible man turn down the job offer?
                </h2>
          
                <span class="relative h-5 w-5 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" stroke-width="2" class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 fill-gray-100" stroke="currentColor" y="0px" width="24" height="24" viewBox="0 0 50 50">
                    <path d="M 24 9 L 24 24 L 9 24 L 9 26 L 24 26 L 24 41 L 26 41 L 26 26 L 41 26 L 41 24 L 26 24 L 26 9 Z"></path>
                  </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 fill-gray-100" stroke="currentColor" stroke-width="2" width="24" height="24" viewBox="0 0 50 50">
                        <path d="M 9 24 L 9 26 L 41 26 L 41 24 Z"></path>
                    </svg>
                </span>
              </summary>
          
              <p class="mt-4 leading-relaxed text-gray-400">
                He couldn't see himself doing it.
              </p>
            </details>
            <details
              class="group p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-100"
              >
                <h2 class="font-medium">
                    What's the best thing about Switzerland?
                </h2>
          
                <span class="relative h-5 w-5 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" stroke-width="2" class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 fill-gray-100" stroke="currentColor" y="0px" width="24" height="24" viewBox="0 0 50 50">
                    <path d="M 24 9 L 24 24 L 9 24 L 9 26 L 24 26 L 24 41 L 26 41 L 26 26 L 41 26 L 41 24 L 26 24 L 26 9 Z"></path>
                  </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 fill-gray-100" stroke="currentColor" stroke-width="2" width="24" height="24" viewBox="0 0 50 50">
                        <path d="M 9 24 L 9 26 L 41 26 L 41 24 Z"></path>
                    </svg>
                </span>
              </summary>
          
              <p class="mt-4 leading-relaxed text-gray-400">
                I don't know, but the flag is a big plus.
              </p>
            </details>
            <details
              class="group p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-100"
              >
                <h2 class="font-medium">
                  What do you call someone with no body and no nose?
                </h2>
          
                <span class="relative h-5 w-5 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" stroke-width="2" class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 fill-gray-100" stroke="currentColor" y="0px" width="24" height="24" viewBox="0 0 50 50">
                    <path d="M 24 9 L 24 24 L 9 24 L 9 26 L 24 26 L 24 41 L 26 41 L 26 26 L 41 26 L 41 24 L 26 24 L 26 9 Z"></path>
                  </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 fill-gray-100" stroke="currentColor" stroke-width="2" width="24" height="24" viewBox="0 0 50 50">
                        <path d="M 9 24 L 9 26 L 41 26 L 41 24 Z"></path>
                    </svg>
                </span>
              </summary>
          
              <p class="mt-4 leading-relaxed text-gray-400">
                Nobody knows.
              </p>
            </details>
            <details
              class="group p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-100"
              >
                <h2 class="font-medium">
                  Why do you never see elephants hiding in trees?
                </h2>
          
                <span class="relative h-5 w-5 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" stroke-width="2" class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 fill-gray-100" stroke="currentColor" y="0px" width="24" height="24" viewBox="0 0 50 50">
                    <path d="M 24 9 L 24 24 L 9 24 L 9 26 L 24 26 L 24 41 L 26 41 L 26 26 L 41 26 L 41 24 L 26 24 L 26 9 Z"></path>
                  </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 fill-gray-100" stroke="currentColor" stroke-width="2" width="24" height="24" viewBox="0 0 50 50">
                        <path d="M 9 24 L 9 26 L 41 26 L 41 24 Z"></path>
                    </svg>
                </span>
              </summary>
          
              <p class="mt-4 leading-relaxed text-gray-400">
                Because they're so good at it.
              </p>
            </details>
          </div>
            </div>
            <footer class="text-gray-400 px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div class="mt-8 items-center justify-between sm:flex">
                <div class="mt-4 sm:mt-0">
                    &copy; 2023 All rights reserved.
                </div>
                <div class="mt-6 sm:mt-0">
                    <ul class="flex items-center space-x-4">
                        <li class="rounded-full group flex hover:scale-105 items-center justify-center">
                            <a href="https://github.com/yousefelassal/todo-app">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 24 24">
                                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" fill="white" class="group-hover:fill-neutral-300"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        `;
    }

    async getJs() {
      const navbar = document.getElementById('navbar');
      const openNav = document.getElementById('open-nav');
      const closeNav = document.getElementById('close-nav');
      
      openNav.addEventListener('click', () => {
          navbar.classList.remove('hidden');
          navbar.classList.add('flex');
      });
      
      closeNav.addEventListener('click', () => {
          navbar.classList.remove('flex');
          navbar.classList.add('hidden');
      });  
    }
}