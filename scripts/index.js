
  const getImage=async()=>{
    try {
        let data= await fetch("https://api.imgur.com/3/gallery/search/?q=mostviral",{
          headers:{
              Authorization:"Client-ID 0fab2751548d768"
          }
       
    })
    .then(res=>res.json()).then(res=>console.log(res))
  
    } catch (error) {
        console.log(error)
    }

}
//   getImage()
