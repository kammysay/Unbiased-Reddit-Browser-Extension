// Initial function calls
hideVotes();

// When mouse scrolled, call functions to keep up with newly loaded posts/comments
window.addEventListener('wheel', function() {
    hideVotes();
});

// When mouse clicked, call functions to keep up with newly loaded posts/comments
window.addEventListener('click', function() {
    hideVotes();
});

// Hides the number of votes on a post/comment
function hideVotes(){
    // Remove div for vote count on posts
    postVotes = document.getElementsByClassName("_1rZYMD_4xY3gRcSS3p8ODO _3a2ZHWaih05DgAOtvu6cIo");
    for( i=0; i<postVotes.length; i++ ){
        postVotes[i].remove();
    }

    // There is only ever one banner vote
    bannerVote = document.getElementsByClassName("_1rZYMD_4xY3gRcSS3p8ODO _25IkBM0rRUqWX5ZojEMAFQ");
    bannerVote[0].remove();

    // Remove div for vote count on comments
    commentVotes = document.getElementsByClassName("_1rZYMD_4xY3gRcSS3p8ODO _25IkBM0rRUqWX5ZojEMAFQ _3ChHiOyYyUkpZ_Nm3ZyM2M");
    for( i=0; i<commentVotes.length; i++ ){
        commentVotes[i].remove();
    }
}