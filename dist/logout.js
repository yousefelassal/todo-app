
$('#logout').on('click', function() {
    axios.post('/logout/')
    .then(response => {
        console.log('Form submission successful');
        window.location.href = '/';
    })
})