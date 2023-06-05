function about() {
    var contentDiv = document.getElementById("content");
    contentDiv.style.display = "block";
    
    contentDiv.innerHTML = '';
    
    var Info = `
        <h2>Hello World!!!</h2>
        <p>I am Charles, 30 years old</p>
        <p>Born and raised in Caxias do Sul, Rio Grande do Sul, Brazil</p>
        <p>Living in Dublin, Ireland since 2018</p>
        <p>Video game enthusiast and a mountain cyclist in free time</p>
        <p>Starting a career in web and app development.</p>
        <p>I am currently enrolled in a Bachelor's degree program in Computer Science at CCT College Dublin.</p>
    `;
    
    contentDiv.innerHTML = Info;
}; 


function skills() {

    var contentDiv = document.getElementById("content");
    contentDiv.style.display = "block";
    contentDiv.innerHTML = '';

}; 


function work() {

    var contentDiv = document.getElementById("content");
    contentDiv.style.display = "block";
    contentDiv.innerHTML = '';
    
}; 


function contact() {
    var contentDiv = document.getElementById("content");
    contentDiv.style.display = "block";
    contentDiv.innerHTML = '';

    var phoneNumber = document.createElement("p");
    var phoneNumberImg = document.createElement("img");
    phoneNumberImg.src = "/imagems/phone.png";
    phoneNumberImg.alt = "Phone Icon";
    phoneNumber.appendChild(phoneNumberImg);
    phoneNumber.appendChild(document.createTextNode("+353 83 460 1235"));

    var whasappNumber = document.createElement("p");
    var whasappNumberImg = document.createElement("img");
    whasappNumberImg.src = "/imagems/whatsapp.png";
    whasappNumberImg.alt = "Whatsapp Icon";
    whasappNumber.appendChild(whasappNumberImg);
    whasappNumber.appendChild(document.createTextNode("+353 83 460 1235"));

    var email = document.createElement("p");
    var emailImg = document.createElement("img");
    emailImg.src = "/imagems/gmail.png";
    emailImg.alt = "Email Icon";
    email.appendChild(emailImg);
    email.appendChild(document.createTextNode("charlesjahn@gmail.com"));
    
    contentDiv.appendChild(phoneNumber);
    contentDiv.appendChild(whasappNumber);
    contentDiv.appendChild(email);
};