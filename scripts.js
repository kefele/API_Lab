$.get('https://www.reddit.com/r/aww/.json', (response) =>{
let items = response.data.children;
for(let i = 0; i<10 ; i++){
  console.log(items[i].data.title);
  console.log(items[i].data.thumbnail);
  console.log("reddit.com"+ items[i].data.permalink)

  let title = items[i].data.title;
  let thumbnail = items[i].data.thumbnail;
  let url = "reddit.com"+ items[i].data.permalink;
  $(".redditInfo").append("<li>" + title+"</li>")
  $(".redditInfo").append("<img src='" + thumbnail + "'"+ "<img>");
  $(".redditInfo").append("<p>" + url + "</p>");
}
console.log(response.data.children);
})

console.log("working")