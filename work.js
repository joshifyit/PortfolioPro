var typeData = new Typed(".role", {
    strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
    });

    const button1 = document.getElementById("logofinder");
    button1.addEventListener("click",function(){
        window.location.href = "#c0ntact"
    });

    let count = 0;
    const button2 = document.getElementById("contactButton");
    button2.addEventListener("click",function(){
        let target = document.getElementById("changeableText");
        let targetBg = document.getElementById("c0ntact");

        // target.classList.add("rotating");
        target.innerHTML += "!";
        count +=1;
        if(count ==10){
            target.innerHTML = "Questions, Thoughts, Or Just Want To Say Hello?!";
            count =0;
        }

        let bg_cont = window.getComputedStyle(targetBg).backgroundColor;
        if(bg_cont === "rgb(250, 235, 215)"){
            targetBg.style.backgroundColor = "rgb(210, 235, 215)";
        }else{
            targetBg.style.backgroundColor = "rgb(250, 235, 215)";
        }
    });