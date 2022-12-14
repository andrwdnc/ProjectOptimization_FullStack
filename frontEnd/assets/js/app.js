function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}


async function fetchData(){
    const response = await fetch("",
        {
            method: "GET",
            headers:{
                Accept:"application/json", "Content-Type": "application/json"
            }
        }
    )
    .then((res)=> res.json())

}