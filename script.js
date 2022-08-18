const courses="http://localhost:3000/";
let group="python";
function drawCourse(course){
    let rate="";
    for(let i=1;i<=5;i++){
        if(course.rating>=i){
            rate+=`<span class="fa fa-star checked"></span>`;
        }
        else if(course.rating+0.9>=i){
            rate+=`<span class="fa fa-star-half-stroke"></span>`;
        }
        else{
            rate+=`<span class="fa-regular fa-star"></span>`;
        }
    }

    let instructor="",index=0;
    for(let element of course.instructors){
        if(index)instructor+=',';
        instructor+=element.name;
        index++;
    }
    return `
    <div class="col-3">
        <div class="card">
            <img class="d-block w-100 card-img-top" src="${course.image}" alt="python course">
            <div class="card-body">
               <h4 class="card-title">${course.title}</h4>
               <p class="card-text">${instructor}</p>
               <p>
                    <span>${course.rating.toFixed(1)}</span>
                    ${rate}
                </p>
                <p><b>E£${course.price}</b></p>
            </div>
      </div>
 </div>
  `;
}

async function getCourses(searchKey) { 
        let search=`${courses}${group}`;
        let obj = await fetch(search);
        let json = await obj.json();
        let content=
        `
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
        <div class="carousel-item active">
        <div class="row">
        `,index=0;
        for(let element of json){
            if(index==4){
                content+=
                `
                    </div>
                </div>
                <div class="carousel-item">
                <div class="row">
                `;
                index=0;
            }
            if(searchKey!=""&&element.title.indexOf(searchKey)==-1)continue;
            content+=drawCourse(element);
            index++;
        }
        content+=
        `
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>
        `;
        document.querySelector(".container-fluid").innerHTML=content;
}

getCourses("");

let searchButton=document.querySelector("#search-btn");
searchButton.addEventListener('click',event=>{
    event.preventDefault();
    let searchKey = document.querySelector('#search-input').value;
    console.log(searchKey);
    getCourses(searchKey);
});

let tab=document.querySelector("#python");
tab.addEventListener('click',event=>{
    event.preventDefault();
    const last=document.getElementById(group);
    last.style.color="grey";
    group="python";
    console.log(group);
    const current=document.getElementById(group);
    current.style.color="black";
    getCourses("");
});
tab=document.querySelector("#excel");
tab.addEventListener('click',event=>{
    event.preventDefault();
    const last=document.getElementById(group);
    last.style.color="grey";
    group="excel";
    console.log(group);
    const current=document.getElementById(group);
    current.style.color="black";
    getCourses("");
});
tab=document.querySelector("#web");
tab.addEventListener('click',event=>{
    event.preventDefault();
    const last=document.getElementById(group);
    last.style.color="grey";
    group="web";
    console.log(group);
    const current=document.getElementById(group);
    current.style.color="black";
    getCourses("");
});

tab=document.querySelector("#js");
tab.addEventListener('click',event=>{
    event.preventDefault();
    const last=document.getElementById(group);
    last.style.color="grey";
    group="js";
    console.log(group);
    const current=document.getElementById(group);
    current.style.color="black";
    getCourses("");
});

tab=document.querySelector("#data");
tab.addEventListener('click',event=>{
    event.preventDefault();
    const last=document.getElementById(group);
    last.style.color="grey";
    group="data";
    console.log(group);
    const current=document.getElementById(group);
    current.style.color="black";
    getCourses("");
});

tab=document.querySelector("#aws");
tab.addEventListener('click',event=>{
    event.preventDefault();
    const last=document.getElementById(group);
    last.style.color="grey";
    group="aws";
    console.log(group);
    const current=document.getElementById(group);
    current.style.color="black";
    getCourses("");
});

tab=document.querySelector("#draw");
tab.addEventListener('click',event=>{
    event.preventDefault();
    const last=document.getElementById(group);
    last.style.color="grey";
    group="draw";
    console.log(group);
    const current=document.getElementById(group);
    current.style.color="black";
    getCourses("");
});