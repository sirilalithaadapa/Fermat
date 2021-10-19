var arr = [
    {cname:"Artisan contest",cstartdate:"10th October 2021",cenddate:"15th October 2021",contestfee:"$5",prize:"$9"},
    {cname:"Paris Art contest",cstartdate:"20th November 2021",cenddate:"30th November 2021",contestfee:"$2",prize:"$4"},
    { cname: "Velore Art contest", cstartdate: "1st December 2021", cenddate: "15th December 2021", contestfee: "$10", prize: "$15" },
     {cname:"Artisan contest",cstartdate:"10th October 2021",cenddate:"15th October 2021",contestfee:"$5",prize:"$9"}
]
var sn=1

document.querySelector("#button2").addEventListener('click', function () {
    var template = ``
        var first = ` <tr>
                    <th>S.No.</th>
                    <th>Contest name</th>
                    <th>Start date</th>
                    <th>End date</th>
                     <th>Contest fee</th>
                      <th>Prize</th>
                </tr>`
    arr.forEach(function (index) {
        template += `<tr>
                   <td>${sn++}</td>
                    <td>${index.cname}</td>
                    <td>${index.cstartdate}</td>
                     <td>${index.cenddate}</td>
                       <td>${index.contestfee}</td>
                         <td>${index.prize}</td>
                    </tr>`
 
    })
    document.querySelector("table").innerHTML = first + template
    document.querySelector("#row").style.display = "none"
})
document.querySelector("#button1").addEventListener('click', function () {
    document.querySelector("#row").style.display = "initial"
    document.querySelector("#organize").style.display="none"
})
function formValidation(){
    var row=document.querySelector("#row")
    var close=document.querySelector(".header i")
    var section2=document.querySelector("#section2")
    
    row.addEventListener("click",function(){
         section2.style.display="initial"
    })
    
    close.addEventListener("click",function(){
        section2.style.display="none"
    })
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const upload = document.getElementById('upload');
    
    form.addEventListener('submit', e => {
    e.preventDefault();
    
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const uploadValue = upload.value.trim();
    
    if(usernameValue === '') {
      setErrorFor(username, 'Username cannot be blank');
    } else {
      setSuccessFor(username);
    }
    
    if(emailValue === '') {
      setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
      setErrorFor(email, 'Not a valid email');
    } else {
      setSuccessFor(email);
    }
    
    if(passwordValue === '') {
      setErrorFor(password, 'Password cannot be blank');
    } else {
      setSuccessFor(password);
    }
    
    if(uploadValue === '') {
      setErrorFor(upload, 'Select a file');
    } else {
      setSuccessFor(upload);
    }
    
    });
    
    function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
      formControl.className = 'form-control error';
    small.innerText = message;
    }
    
    function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    }
    
    function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
}
    
formValidation()

