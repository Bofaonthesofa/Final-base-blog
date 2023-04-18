const { normalizeIdentifier } = require("@11ty/eleventy/src/Util/Compatibility");

const priorityImages = {
    low: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Flag-green.png',
    medium: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Flag-yellow.png',
    high: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Flag-red.png',
  };
  
  const form = document.getElementById("todo")
  
  const todoPane = document.getElementById("todo-pane");
  
  const titleInput = document.getElementById("title");
  
  const prioritySelect = document.getElementById("priority");
  
  //I targeted the button so that I could control when the lis were generated.
  const nikita = document.getElementById("blurb");
  
  nikita.addEventListener ("click", function (event){
    const allTodos = document.getElementsByClassName("todo");
    var li = document.createElement('li'); 
    //'prepend' so that the latest entry appears at the top.
    todoPane.prepend(li);
    li.className="just-created"
    var basil = titleInput.value
    
    //Get the relevant flags and text
    var bog = prioritySelect.options[prioritySelect.selectedIndex].text;
   
    if(bog ==="Low") {var mog = priorityImages.low};
     if(bog ==="Medium") {var mog = priorityImages.medium};
     if(bog ==="High") {var mog = priorityImages.high};
    //Think you have to created the element first, then add the SRC???
  var dog = document.createElement("img");
    dog.src=mog;
    
     var spider = `${basil} is a ${bog}-priority task.`;
    var daphne = document.createTextNode(spider);
    li.appendChild(daphne);
    li.appendChild(dog);
    
    
    
     let sog = todoPane.childNodes;
    for(let x=0; x<sog.length; x++) {if (x > 0) {
      sog[x].classList.remove("just-created")
    }}
    
  var felipe = document.getElementById("todo");
    felipe.reset();
    event.preventDefault();
   
                    })
   