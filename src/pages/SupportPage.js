import AbstractPage from "./AbstractPage.js";

export default class extends AbstractPage {
    constructor(){
        super();
        this.setTitle('Support');
    }

    async getHtml() {
        return `
        <div class="h-screen bg-[#121215] relative isolate">
        <div class="p-6 w-screen flex text-center items-start justify-end md:justify-start fixed lg:px-8">
            <a class="flex cursor-pointer text-4xl text-[var(--primary)]" href="/" data-link>to</a>
            <a href="/" data-link class="text-4xl bg-clip-text text-transparent bg-gradient-to-tr from-[var(--primary-gradient)] to-[var(--secondary-gradient)]">do</a>
        </div>
        <div class="absolute inset-0 -z-10 overflow-hidden">
          <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-neutral-800 [mask-image:radial-gradient(64rem_64rem_at_top,#121215,transparent)]" aria-hidden="true">
            <defs>
              <pattern id="1212152c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" class="overflow-visible fill-neutral-700">
              <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
            </svg>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#1212152c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
        <main class="py-14">
        <div class="max-w-screen-xl mx-auto px-4 text-gray-400 md:px-8">
            <div class="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
                <div class="max-w-lg space-y-3 justify-self-center lg:mt-12">
                    <h3 class="text-indigo-600 font-semibold">
                        Support
                    </h3>
                    <p class="text-gray-100 text-3xl font-semibold sm:text-4xl">
                        Let us know how we can help
                    </p>
                    <p>
                    We are here to assist you with any questions, concerns, or issues you may have. Our dedicated support team is committed to providing timely and effective solutions to ensure your experience is smooth and enjoyable.</p>
                    <div>
                        <ul class="mt-6 flex flex-col gap-x-10 gap-y-6">    
                            <li class="flex items-center gap-x-3">
                                <div class="flex-none text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <p>support@todo.com</p>
                            </li>
                            <li class="flex items-center gap-x-3">
                                <div class="flex-none text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </div>
                                <p>0777 5000</p>
                            </li>
                            <li class="flex items-center gap-x-3">
                                <div class="flex-none text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                <p>Cairo, Egypt.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex-1 pt-12 sm:max-w-lg lg:max-w-md">
            <form
                class="mt-8 flex flex-col gap-4 space-y-6"
            >
                <div>
                    <label
                for="fullName"
                class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Full Name
              </label>
                <input required
                    type="fullName"
                    id="fullName"
                    name="fullName"
                    class="mt-1 w-full rounded-md p-2 ring-0 border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:outline focus:outline-indigo-900 border"
                />
                <div>
                    <label
                for="email"
                class="block mt-2 text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Email
              </label>
              <div class="relative">
                <input required
                    type="email"
                    id="email"
                    name="email"
                    class="mt-1 w-full rounded-md p-2 ring-0 border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:outline focus:outline-indigo-900 border"
                />
                <span class="absolute inset-y-0 end-0 grid place-content-center px-2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-400 email-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                    </svg>
                </span>
                </div>
                <div class="mt-2">
                    <label
                for="Message"
                class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Message
              </label>
                <textarea required
                    rows="4"
                    id="Message"
                    name="Message"
                    class="mt-1 w-full rounded-md p-2 ring-0 border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:outline focus:outline-indigo-900 border"
                ></textarea>
                <button
                class="shrink-0 flex mt-4 items-center justify-center w-full rounded-md h-10 bg-gradient-to-br from-[var(--primary-gradient)] to-[var(--secondary-gradient)] group-hover:bg-gradient-to-r text-[var(--primary)] shadow-md hover:bg-gradient-to-tr px-12 py-3 text-sm font-medium text-white transition"
              >
                Submit
              </button>
            </form>
                </div>
            </div>
        </div>
    </main>
    </div>
        `;
    }

    async getJs() {
        let email = document.getElementById('email');
        let emailIcon = document.querySelector('.email-icon');

        email.addEventListener('input', () => {
            if(email.validity.valid) {
                emailIcon.classList.add('valid');
                emailIcon.classList.remove('invalid');
            } else {
                emailIcon.classList.add('invalid');
                emailIcon.classList.remove('valid');
            }
        });
    }
}