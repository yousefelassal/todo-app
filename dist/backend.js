// const { response } = require("express");

$('#logout').on('click', function() {
    
    const csrftoken = getCookie('csrftoken');
    axios.post('/logout/',csrftoken, {
        headers: {
            "X-Csrftoken": csrftoken,
        }
    })
    .then(response => {
        console.log('Form submission successful');
        window.location.href = '/';
    })
})
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }


axios.get('/user-Info/')
.then(response => {
    data = response.data
    const name = document.getElementById('user-name');
    const email = document.getElementById('user-email');
    const letters = document.querySelectorAll('.first-letter')
    name.innerText = data.first_name +"'s todo" 
    email.innerText = data.email
    letters.forEach(element => {
        element.innerText = data.first_name[0]
    });
})





// export function axiosUserAuth(type, data, token) {
//     if (type == 'create'){
//         var url = '/createuser/'
//         var redirect_window = '/login'
//     } else if (type == 'login'){
//         var url = '/authuser/'
//         var redirect_window = '/'
//     }
//     axios.post(url, data, {
//         headers: {
//             'X-CSRFToken': token
//         }
//       })
//       .then(response => {

//         window.location.href = redirect_window;
//         // Handle the response data here
//       })
//       .catch(error => {
//         console.error('Form submission failed', error);
//         // Handle the error here
//       });
// }