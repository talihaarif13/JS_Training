//convert callbacks hell into promise
function loginUser(email, password){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({userEmail: email});
        }, 2000);
    });
}
function getUserVideos(email){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(['v1', 'v2', 'v3']);
        }, 3000);
    });
}
function videoDetails(video){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("title of video");
        }, 3000);
    });
}
//Way 1: 
// loginUser("taliha", 123456)
// .then(user => getUserVideos(user.userEmail))
// .then(videos => videoDetails(videos[0]))
// .then(detail => console.log(detail));

//Way 2:
//more readable 
async function displayUser(){
    const loggedinUser = await loginUser("taliha", 123456);
    console.log("user", loggedinUser);
    const videos = await getUserVideos(loggedinUser.userEmail);
    console.log("videos", videos);
    const detail = await videoDetails(videos[0]);
    console.log("detail : ", detail);
}
displayUser();