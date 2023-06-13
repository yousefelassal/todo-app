
$('#logout').on('click', function() {
    const csrftoken = getCookie('csrftoken');
    axios.post('/logout/',csrftoken,)
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

  