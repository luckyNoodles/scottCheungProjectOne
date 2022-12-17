//---------Toggle Nav---------------
const navToggle = document.querySelector('.material-symbols-outlined');
const mainNav = document.querySelector('.navFlexContainer');

navToggle.addEventListener('click', function() {
 mainNav.classList.toggle('mobileNav')
})

//----------add comment function------------

//select form
const comment = document.querySelector('.blogForm');

//add eventlistener to form on submit
    comment.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name').value;
        const commentInput = document.getElementById('commentBox').value;

        //select the place to insert a new post
        const newPost = document.querySelector('.blogMain');

        //insert new post content with html
        newPost.insertAdjacentHTML( 'beforeend',`<article class="post1">
                                <div class="imagePost">
                                    <span class="material-icons-outlined">person</span>
                                </div>
                                <article>
                                    <p>${new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})} by ${nameInput} 
                                    <br>
                                    <br>
                                    ${commentInput}</p>
                                </article>
                            </article>`);

        //reset form after submit
        document.querySelector('.blogForm').reset();
});

