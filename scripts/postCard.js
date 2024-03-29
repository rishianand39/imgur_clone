// https://api.imgur.com/3/tags?
const getPosts = async () => {
  try {
    let data = await fetch(
      "https://api.imgur.com/post/v1/posts?filter%5Bsection%5D=eq%3Ahot&include=adtiles%2Cadconfig%2Ccover%2Cviral&location=desktophome&page=1&sort=-time",
      {
        headers: {
          Authorization: "Client-ID 0fab2751548d768",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => showPost(res));
  } catch (error) {
    console.log(error);
  }
};

getPosts();







const showPost = (AllData) => {
  console.log(AllData);
  // AllData=AllData.splice(0,15)
let Container=document.querySelector(".post-container")
  
  let allPost=document.createElement("div")

const macyInstance = Macy({
	container: allPost,
  margin: {
		x: 15,
		y: 15,
	},
  columns:6
})

const fixStartUpBug = () => {
	macyInstance.runOnImageLoad(function () {
		macyInstance.recalculate(true, true)
		var evt = document.createEvent('UIEvents')
		evt.initUIEvent('resize', true, false, window, 0)
		window.dispatchEvent(evt)
	}, true)
}

fixStartUpBug()

allPost.classList.add("all-post-container")



  AllData.map((post) => {
    let div = document.createElement("div");
    div.classList.add("eachPostDiv")


    let videoOrImage=document.createElement("div");
    videoOrImage.classList.add("videoImage")
    let content;
    if (
      post.cover.ext === "jpeg" ||
      post.cover.ext === "png" ||
      post.cover.ext === "jpg"
    ) {
      content = document.createElement("img");
      
      content.setAttribute(
        "src",
        `https://i.imgur.com/${post.cover.id}.jpg?maxwidth=800&shape=thumb&fidelity=high`
        );
        
     
    }
     else {
      content = document.createElement("div");
      
      content.innerHTML = `<video draggable="false" class="video" playsinline loop autoplay muted>
      <source type="video/mp4" src="https://i.imgur.com/${post.cover.id}.mp4">
      </video>`;
    }

    let postInfo = document.createElement("div");
    postInfo.classList.add("info")
    let title=document.createElement("p")
    title.innerText=post.title;

    let quatity=document.createElement("div")
    quatity.classList.add("icon-div")
    let vote=document.createElement("div")
    vote.innerHTML=`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Upvote</title><path fill="currentColor" stroke="#ffffff" stroke-width="0" fill-rule="evenodd" clip-rule="evenodd" d="M7.197 2.524a1.2 1.2 0 011.606 0c.521.46 1.302 1.182 2.363 2.243a29.617 29.617 0 012.423 2.722c.339.435.025 1.028-.526 1.028h-2.397v4.147c0 .524-.306.982-.823 1.064-.417.066-1.014.122-1.843.122s-1.427-.056-1.843-.122c-.517-.082-.824-.54-.824-1.064V8.517H2.937c-.552 0-.865-.593-.527-1.028.52-.669 1.32-1.62 2.423-2.722a52.996 52.996 0 012.364-2.243z"></path></svg>
    <span>${post.upvote_count}</span>
    `
    let comment=document.createElement("div")
    comment.innerHTML=`<svg width="16" height="16" viewBox="0 0 16 16" class="PostCommentsIcon" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Comments</title><path fill="currentColor" stroke="#ffffff" stroke-width="0" d="M4.455 12.195l.367 1.105 1.037-.53c.266-.135.637-.412 1.039-.74.39-.319.872-.737 1.422-1.245h2.291a3.306 3.306 0 003.306-3.306V5.306A3.306 3.306 0 0010.611 2H5.306A3.306 3.306 0 002 5.306v2.656c0 1.34.933 2.461 2.185 2.75.008.172.025.335.046.479a6.622 6.622 0 00.168.803c.016.07.035.137.056.2z"></path></svg>
    <span>${post.comment_count}</span>`

    let view=document.createElement("div")
    view.innerHTML=`<svg width="16" height="16" viewBox="0 0 16 16" class="PostViewsIcon" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Post views</title><path d="M8 2.5C4.74998 2.5 2.30142 5.50267 1.27514 6.77517C0.925337 7.20917 0.908553 7.76483 1.2278 8.16583C2.22527 9.41833 4.6991 12.5 8 12.5C11.3686 12.5 13.8396 9.31133 14.796 8.0905C15.0769 7.732 15.0674 7.2535 14.7692 6.8755C13.7938 5.6395 11.3376 2.5 8 2.5ZM7.98224 9.33333C6.90897 9.33333 6.03887 8.51233 6.03887 7.5C6.03887 6.4875 6.90897 5.66667 7.98224 5.66667C9.05551 5.66667 9.92561 6.4875 9.92561 7.5C9.92561 8.51233 9.05551 9.33333 7.98224 9.33333Z" fill="currentColor"></path></svg>
    <span>${post.view_count}</span>`


    quatity.append(vote,comment,view)

    postInfo.append(title,quatity)

    videoOrImage.append(content)
    div.append(videoOrImage,postInfo)
    allPost.append(div)
    Container.append(allPost)
  });
};
