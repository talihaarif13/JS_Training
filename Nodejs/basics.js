//sync 
// console.log('start');
// console.log("hello");
// console.log("end");


//async
// console.log("start");
// setTimeout(() => {
//     console.log("hello")
// }, 1000);
// console.log("end");


//callbacks and callbacks hell
console.log("start");
function loginUser(email,pasword, callback){
    setTimeout(() => {
        callback ({userEmail : email});
    }, 2000);
}
function getUserVideos(email, callback){
    setTimeout(() => {
        callback([100, 200, 300, 400]);
    }, 3000);
}
function videoDetails(video, callback){
    setTimeout(() => {
        callback("title of video");
    }, 4000);
}
//use callbacks to print data returning from loginUser function
//function/callbacks after another creates callbacks hell
const user = loginUser("taliha@gmail.com", 12344, user => {
    console.log(user.userEmail);
    getUserVideos(user.userEmail, videos => {
        console.log(videos);
        videoDetails(videos[0], title => {
            console.log(title);
        });
    });
});


console.log("finish");

