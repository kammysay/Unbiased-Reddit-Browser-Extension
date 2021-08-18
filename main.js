/**
 * Hides the number of votes on a post/comment on new reddit
 */
function hideVotesNewReddit(){
    // Remove div for vote count on posts
    var postVotes = document.getElementsByClassName("_1rZYMD_4xY3gRcSS3p8ODO _3a2ZHWaih05DgAOtvu6cIo");
    for(var i=0; i<postVotes.length; i++){
        postVotes[i].remove();
    }

    // There is only ever one banner vote
    var bannerVote = document.getElementsByClassName("_1rZYMD_4xY3gRcSS3p8ODO _25IkBM0rRUqWX5ZojEMAFQ");
    bannerVote[0].remove();

    // Remove div for vote count on comments
    var commentVotes = document.getElementsByClassName("_1rZYMD_4xY3gRcSS3p8ODO _25IkBM0rRUqWX5ZojEMAFQ _3ChHiOyYyUkpZ_Nm3ZyM2M");
    for(var i=0; i<commentVotes.length; i++){
        commentVotes[i].remove();
    }
}

/**
 * Hides the number of votes on a post/comment on old reddit
 */
function hideVotesOldReddit(){
    // Old Reddit handles upvotes in a clunky way. Three divs are created one for if you don't vote, one if you like, one if you dislike
    // Each needs to be hidden
    var postUnvoted = document.getElementsByClassName("score unvoted");
    for(var i=0; i<postUnvoted.length; i++){
        postUnvoted[i].remove();
    }

    var postLiked = document.getElementsByClassName("score likes");
    for(var i=0; i<postLiked.length; i++){
        postLiked[i].remove();
    }

    var postDisliked = document.getElementsByClassName("score dislikes");
    for(var i=0; i<postDisliked.length; i++){
        postDisliked[i].remove();
    }
}

/**
 * Called when an event that should trigger vote removal occurs
 */
function event_handler(){
    // Hide votes on the screen
    hideVotesOldReddit();
    hideVotesNewReddit();
    

    // Determine if we need to continue hiding votes (during initial page load)
    if(interval_count <= 5){
        interval_count++;
    }
}

/**
 * Reddit loads votes and other similar elements after page initially loads.
 * DOMContentLoaded and Load events do not accurately determine when these elements
 * will be available. So running the event handler for the first ~5 seconds to hide votes.
 */
interval_count = 0;
var interval = setInterval(event_handler, 1000);
function stopLoadInterval(){
    if(interval_count <= 5){
        clearInterval(interval);
    }
}

// Hide votes whenever the possibility for new comments/posts to be loaded occurs
window.addEventListener('wheel', event_handler);
window.addEventListener('click', event_handler);
window.addEventListener('load', event_handler);