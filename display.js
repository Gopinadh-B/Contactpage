window.addEventListener('load', ()=> {
    const params = (new URL(document.location)).searchParams;
    const email= params.get('email');
    const name = params.get('name');
    const subject= params.get('subject');
    const message= params.get('message');
    const query= params.get('query');

    document.getElementById('display-email').innerHTML = email;
    document.getElementById('display-name').innerHTML = name;
    document.getElementById('display-subject').innerHTML = subject;
    document.getElementById('display-message').innerHTML = message;
    document.getElementById('display-query').innerHTML = query;
})