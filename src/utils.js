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
    console.log(tweets);
}

function verifyUserExistence(username) {
    return users.some(curr => curr.username === username);
}

function verifyIfStringIsValid( str )  {
    const tryNum = parseInt(str);
    // Checa: Se nao eh numero, string vazia, valor indefinido ou qualquer outro valor como array ou objeto.
    return (isNaN(tryNum) && str != "" && str != undefined && typeof str == "string");
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

// StackOverflow que falou essa, achei daora! 
function isValidHttpUrl(string) {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }


export {verifyIfStringIsValid, getTweetsUsingPage, verifyUserExistence, addTweet, addUser};