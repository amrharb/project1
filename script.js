const courses="http://localhost:3000/courses";
function drawCourse(course){
    let rate="";
    for(let i=1;i<=5;i++){
        if(course.rating>=i){
            rate+=`<i style="color:gold" class="fa fa-star"></i>`;
        }
        else if(course.rating+0.9>=i){
            rate+=`<i style="color:gold" class="fa fa-star-half-stroke"></i>`;
        }
        else{
            rate+=`<i style="color:whitesmoke;" class="fa-regular fa-star"></i>`;
        }
    }
    let instructor="",flag=0;
    for(let element of course.instructors){
        if(flag)instructor+=',';
        instructor+=element.name;
        flag=1;
    }
    return `
    <figure>
    <img style="width:100%;height:100%;" src="${course.image}" alt="python course">
    <figcaption>
      <p><b>${course.title}</b></p>
      <p style="color:gray;font-size:15px">${instructor}</p>
      <figure style="padding:0;">
        <span>${course.rating.toFixed(1)}</span>
        ${rate}
      </figure>
      <p style="width:75%;margin:20px 0;"><b>E£${course.price}</b></p>
    </figcaption>
  </figure>
  `;
}

async function getCourses(searchKey) {
        let obj = await fetch(courses);
        let json = await obj.json();
        let content="";
        for(let element of json){
            if(searchKey!=""&&element.title.indexOf(searchKey)==-1)continue;
            content+=drawCourse(element);
        }
        document.querySelector(".courses").innerHTML=content;
}

getCourses("");

let searchButton=document.querySelector("#search-btn");
searchButton.addEventListener('click',event=>{
    event.preventDefault();
    let searchKey = document.querySelector('#search-input').value;
    console.log(searchKey);
    getCourses(searchKey);
});