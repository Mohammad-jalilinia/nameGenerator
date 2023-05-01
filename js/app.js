
// access to the forms values
// we have to find api pattern to use it !
document.querySelector("#generate-names").addEventListener("submit",function (e){
    e.preventDefault();

    const country = document.querySelector("#country").value;
    const gender = document.querySelector("#genre").value;

    // generate the url :
    let url = 'https://api.namefake.com/';
    if(country !== ''){
        url += country + '/';
    } else {
        url += 'random/';
    }

    if(gender !== ''){
        url += gender + '/';
    } else {
        url += 'random/';
    }
    //console.log(url)

    //ajax :
    const xhr = new XMLHttpRequest();

    xhr.open("GET",url,true);

    xhr.onload = function (){
        if(this.status === 200){
            console.log(this.responseText);
        }
    }

    xhr.send();
})


