// Initial function calls
hideVotes();
hideAwards();

// When mouse scrolled, call functions to keep up with newly loaded posts/comments
window.addEventListener('scroll', function(e) {
    hideVotes();
    hideAwards();
});

// Hides the number of votes on a post/comment
function hideVotes(){
    // Remove div for vote count on posts
    postVotes = document.getElementsByClassName("_1rZYMD_4xY3gRcSS3p8ODO _3a2ZHWaih05DgAOtvu6cIo");
    for( i=0; i<postVotes.length; i++ ){
        postVotes[i].remove();
    }

    // Remove div for vote count on comments
    commentVotes = document.getElementsByClassName("_1rZYMD_4xY3gRcSS3p8ODO _25IkBM0rRUqWX5ZojEMAFQ _3ChHiOyYyUkpZ_Nm3ZyM2M");
    for( i=0; i<commentVotes.length; i++ ){
        commentVotes[i].remove();
    }
}

// Hide any awards and box-shadows on comments
function hideAwards(){
    // _3XoW0oYd5806XiOr24gGdb is the award panel on reddit
    banners = document.getElementsByClassName("_3XoW0oYd5806XiOr24gGdb");
    for( i=0; i<banners.length; i++){
        banners[i].remove(); // remove award panel
    }

    // Remove any box shadows surrounding comments
    comments = document.querySelectorAll('[role="presentation"]');
    for( i=0; i<comments.length; i++ ){
        comments[i].remove();
    }
}