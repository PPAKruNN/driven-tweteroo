const users = [];
const tweets = [];

function addUser(username, avatar) {
    const template = {
        username,
        avatar,
    }
    users.push(template);
}

function addTweet(username, tweet) {
    const template = {
        username,
        tweet,
    }
    tweets.push(template);
}

function verifyUserExistence(username) {
    return users.some(curr => curr.username === username);
}

function getTweetsUsingPage(pageId) {
    const indexFall = (pageId - 1) * 10;
    const startPoint = tweets.length - indexFall;
    const finishPoint = (startPoint - 10) >= 0 ? (startPoint - 10) : 0; 

    if(startPoint === 0) return [];

    const pageTweets = [];
    for (let index = startPoint; finishPoint > index; index--) {
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