const users = [];
const tweets = [];

function addUser(username, avatar) {
    const template = {
        username,
        avatar,
    }
    users.push(template);
    console.log(users);
}

function addTweet(username, tweet) {
    const template = {
        username,
        tweet,
    }
    tweets.push(template);
    console.log(tweets);
}

function verifyUserExistence(username) {
    return users.some(curr => curr.username === username);
}

function getTweetsUsingPage(pageId = 1) {
    const indexFall = (pageId - 1) * 10;
    const startPoint = (tweets.length - indexFall - 1 >= 0) ? (tweets.length - indexFall - 1) : 0;
    const finishPoint = (startPoint - 10) >= 0 ? (startPoint - 10) : 0; 
    if(startPoint == 0) return [];

    const pageTweets = [];
    for (let index = startPoint; index > finishPoint; index--) {
        const curr = tweets[index];
        const user = users.find( user_ => user_.username === curr.username);
        
        const template = {
            username: curr.username,
            avatar: user.avatar,
            tweet: curr.tweet,
        }
        
        pageTweets.push(template);
    }

    return pageTweets;
}

export {getTweetsUsingPage, verifyUserExistence, addTweet, addUser};