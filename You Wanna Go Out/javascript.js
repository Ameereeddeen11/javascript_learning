const ano = document.querySelector('.ano')
const ne = document.querySelector('.ne')
const question = document.querySelector('.question')
const git = document.querySelector('.git')

ano.addEventListener('click', () => {
    question.innerHTML = "You got Rickrolled 😘";
    git.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif";
})

ne.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const ne = ne.getBoundingClientRect();
  
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;
  
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
  
    ne.style.left = randomX + "px";
    ne.style.top = randomY + "px";
  });