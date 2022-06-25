// https://api.imgur.com/3/tags?
const getTags = async () => {
  try {
    let data = await fetch("https://api.imgur.com/3/tags?", {
      headers: {
        Authorization: "Client-ID 0fab2751548d768",
      },
    })
      .then((res) => res.json())
      .then((res) => showCard(res.data.tags));
  } catch (error) {
    console.log(error);
  }
};

getTags();

let container = document.querySelector("#tag-card");

const showCard = (AllData) => {
  const data = AllData.slice(0, 12);
  // console.log(data);
  

  
  data.map((d) => { 
    let div=document.createElement("div");
    
    div.style.display="flex"
    div.style.flexDirection="column"
    div.style.width="100px"
    div.style.height="110px"
    div.style.borderRadius="5px"
    div.style.margin="10px"
    // div.style.border="1px solid red"
    div.style.overflow="hidden"
    div.style.cursor="pointer"
    div.classList.add("tagDiv");

    // topdiv
    let topdiv=document.createElement("div");
  
    topdiv.style.flex="1"
    let img = document.createElement("img");
    img.style.width = "100%"
    img.style.height = "100%"
    img.setAttribute(
     "src",
     `https://i.imgur.com/${d.background_hash}.jpg?maxwidth=800&shape=thumb&fidelity=high`
   );
   topdiv.append(img)

    // bottomdiv

  
    let bottomdiv=document.createElement("div");
      bottomdiv.style.background=`#${d.accent}`
      bottomdiv.style.flex="1"
      bottomdiv.style.display="flex"
      bottomdiv.style.flexDirection="column"
      bottomdiv.style.justifyContent="center"
      bottomdiv.style.alignItems="center"

      let heading=document.createElement('h5')
      heading.innerText=d.display_name
      heading.style.marginBottom="5px"
      heading.style.textTransform="capitalize"
      heading.style.color="#FFFFFF"
      let postamount=document.createElement('h6')
      postamount.innerText=`${d.total_items}  posts`
      postamount.style.color="#899a97"



      bottomdiv.append(heading,postamount)
    div.append(topdiv,bottomdiv)
    container.append(div);
  });
};

