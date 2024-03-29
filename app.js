//---------Toggle Nav---------------
// const navToggle = document.querySelector('.material-symbols-outlined');
const mainNav = document.querySelector('.navFlexContainer');
const openNav = document.querySelector('.clickOpen');
const closeNav = document.querySelector('.clickClose');
const blogTitle = document.querySelector('.blogTitle');
const blogcircle = document.querySelector('.circleContainer');

const openContactNav = document.querySelector('.navFlexContainer');

openNav.addEventListener('click', function() {
	openNav.classList.toggle('hide');
	closeNav.classList.toggle('hide');
 	mainNav.classList.toggle('hideMobileNav');
	blogTitle.classList.add('hide');
	blogcircle.classList.add('hide');
	// openContactNav.classList.toggle('hide');
})

closeNav.addEventListener('click', function() {
	openNav.classList.toggle('hide');
	closeNav.classList.toggle('hide');
 	mainNav.classList.toggle('hideMobileNav');
	blogTitle.classList.toggle('hide');
	blogcircle.classList.toggle('hide');
	// openContactNav.classList.toggle('hide');
})

// ---------- Carousel -----------------------
function carousel() {
//Get the element with nodes that will be used for th carousel
	imgList = document.querySelectorAll('.imageSlide');
	console.log(imgList);

	//add the translateX property by looping through the node list and multiplying each index by 100 to assign it's translateX value. This places all the images to the right of each other.

	imgList.forEach((imageSlide, indx) => {
		imageSlide.style.transform = `translateX(${indx * 100}%)`;
	});

	//visible Image counter
	let visibleImage = 0;

	//use selector for the "next" and "prev" buttons
	const next = document.getElementById('nextImage');
	
	console.log(next);
	//set a max counter
	let totalImages = imgList.length - 1;

	//write the functionality for the "Next" button
	if(next !== null){
		next.addEventListener('click', function() {

		if (visibleImage === totalImages) {
			visibleImage = 0;
		} else {
			visibleImage++;
		};

		imgList.forEach((imageSlide, indx) => {
			imageSlide.style.transform = `translateX(${100 * (indx - visibleImage)}%)`;
		});

	});
	}
		
	const prev = document.getElementById('prevImage');

	//write the functionality for the "Prev" button
	if(prev !== null){
		prev.addEventListener('click', function () {

		if (visibleImage === 0) {
			visibleImage = totalImages;
		} else {
			visibleImage--;
		}

		imgList.forEach((imageSlide, indx) => {
			imageSlide.style.transform = `translateX(${100 * (indx - visibleImage)}%)`;

		});
	});
	}

}
carousel();

//----------add comment function------------

function commentForm() {
  comment = document.querySelector('.blogForm');
    // console.log(comment);
    //add eventlistener to form on submit
	if(comment !== null){
		comment.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name').value;
        const commentInput = document.getElementById('commentBox').value;

        //select the place to insert a new post
        const newPost = document.querySelector('.blogMain');

    //insert new post content with html
    newPost.insertAdjacentHTML('beforeend', `<article class="post1">
                            <div class="imageUserPost">
                                <img src="./assets/user-solid.svg" alt="icon of a picture">
                            </div>
                            <article>
                                <p>${new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "long", day: "numeric" })} by ${nameInput} 
                                <br>
                                <br>
                                ${commentInput}</p>
                            </article>
                        </article>`);

        //reset form after submit
        document.querySelector('.blogForm').reset();
    });
	}
}

commentForm();
