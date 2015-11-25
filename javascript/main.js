function validEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function getDataForm() {
    var data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("messsage").value
    }
    //console.log(data);
    return data;
}

function handleFormSubmit(event) {
    event.preventDefault();
    var data = getDataForm();
    if (validEmail(data.email)) {
        document.getElementById('email-invalid').style.display = 'block';
        return false;
    } else {
        var url = event.target.action;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        //xhr.withCredentials = true;
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            //console.log(xhr.status, xhr.statusText);
           // console.log(xhr.responseText);
            document.getElementById('myForm').style.display = 'none';
            document.getElementById('thankYouMsg').style.display = 'block';
            return;
        };

        var encoded = Object.keys(data).map(function (k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
        }).join('&')
        xhr.send(encoded);
    }
}

function loaded() {
    //console.log('Contact form success');
    var form = document.getElementById('myForm');
    form.addEventListener("submit", handleFormSubmit, false);
};

document.addEventListener('DOMContentLoaded', loaded, false);
