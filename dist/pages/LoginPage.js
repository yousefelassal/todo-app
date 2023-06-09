import AbstractPage from "./AbstractPage.js";

export default class extends AbstractPage {
    constructor(){
        super();
        this.setTitle("Login");
    }

    async getHtml(){
        return `
        <main class="w-full h-screen flex flex-col items-center justify-center px-4 relative">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#683DF7] to-[#9172F7] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
        <div class="max-w-sm w-full text-gray-600">
            <div class="text-center">
              <div class="flex text-center items-center justify-center">
                  <a class="flex cursor-pointer text-4xl text-[var(--primary)]" href="/" data-link>to</a>
                  <a href="/" data-link class="text-4xl bg-clip-text text-transparent bg-gradient-to-tr from-[var(--primary-gradient)] to-[var(--secondary-gradient)]">do</a>
              </div>
              <div class="mt-5 space-y-2">
                  <h3 class="text-gray-800 text-2xl font-bold sm:text-3xl dark:text-white">Log in to your account</h3>
                  <p class="text-gray-300">Don't have an account? <a href="/signup" data-link class="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a></p>
              </div>
            </div>
            <form
                class="mt-8 flex flex-col gap-4 space-y-6"
                method="POST"
            >
                <div>
                    <label
                for="email"
                class="block text-sm font-medium text-gray-700 dark:text-gray-200"
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
                for="password"
                class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Password
              </label>
              <div class="relative">
                <input required
                    type="password"
                    id="password"
                    name="password"
                    class="mt-1 w-full rounded-md p-2 ring-0 border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:outline focus:outline-indigo-900 border"
                />
                <span class="absolute inset-y-0 end-0 grid place-content-center px-2">
                    <button class="revealPassword" type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-gray-400 hover:stroke-indigo-600 transition-none password-icon"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    </button>
                </span>
                </div>
                <button
                class="shrink-0 flex mt-4 items-center justify-center w-full rounded-md h-10 bg-gradient-to-br from-[var(--primary-gradient)] to-[var(--secondary-gradient)] group-hover:bg-gradient-to-r text-[var(--primary)] shadow-md hover:bg-gradient-to-tr px-12 py-3 text-sm font-medium text-white transition"
              >
                Log In
              </button>
            </form>
        </div>
    </main>
    <script src="/src/scripts/login-auth.js"></script>
            `;
    }

    async getJs(){
      const password = document.getElementById('password');
let revealPassword = document.querySelector('.revealPassword');

revealPassword.addEventListener('click', () => {
    if(password.type === 'password') {
        password.type = 'text';
        revealPassword.classList.add('active');
    } else {
        password.type = 'password';
        revealPassword.classList.remove('active');
    }
});

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


let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const csrftoken = getCookie('csrftoken');
  const formData = new FormData(form);
  axios.post('/authuser/', formData, {
    headers: {
      'X-CSRFToken': csrftoken
    }
  })
  .then(response => {
    console.log('Form submission successful');
    window.location.href = '/';
    // Handle the response data here
  })
  .catch(error => {
    console.error('Form submission failed', error);
    // Handle the error here
  });
});

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

    }
}