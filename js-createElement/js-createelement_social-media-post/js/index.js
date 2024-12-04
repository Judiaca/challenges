console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPostSection = document.createElement("section");
newPostSection.className = "post";

const newPostContent = document.createElement("p");
newPostContent.className = "post__content";
newPostContent.textContent =
  "This is another social media post created with JavaScript.";

const newPostFooter = document.createElement("footer");
newPostFooter.className = "post__footer";

const newPostUsername = document.createElement("span");
newPostUsername.className = "post__username";
newPostUsername.textContent = "@newuser";

const newLikeButton = document.createElement("button");
newLikeButton.className = "post__button";
newLikeButton.setAttribute("type", "button");
newLikeButton.setAttribute("data-js", "like-button");
newLikeButton.textContent = "♥ Like";

newLikeButton.addEventListener("click", handleLikeButtonClick);

newPostFooter.appendChild(newPostUsername);
newPostFooter.appendChild(newLikeButton);

newPostSection.appendChild(newPostContent);
newPostSection.appendChild(newPostFooter);

document.body.appendChild(newPostSection);
