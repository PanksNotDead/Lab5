
const cardsData = [
    { image: "Img/1.jpg", text: "Вид на гору" },
    { image: "Img/2.jpg", text: "Летняя природа" },
    { image: "Img/3.jpg", text: "Закат на горы" },
    { image: "Img/4.jpg", text: "Просто красивый вид" },
    { image: "Img/5.jpg", text: "Поле цветов" },
    { image: "Img/6.jpg", text: "Летний пруд" },
  ];
 

  
  const cardTemplate = document.getElementById('cardTemplate');
  const cardSection = document.querySelector(".card-section");
  
  function createCard(imageData) {
      const card = cardTemplate.content.cloneNode(true);
  
      const img = card.querySelector('.card-image');
      img.src = imageData.image;
  
      const text = card.querySelector('.card-text');
      text.textContent = imageData.text;
  
      const heartIcon = card.querySelector('.heart-icon');
      const initialHeartSrc = heartIcon.src;
      const likedHeartSrc = 'img/Like.svg';
    
    let isLiked = false;
  
      heartIcon.addEventListener('click', () => {
        isLiked = !isLiked;
        heartIcon.src = isLiked ? likedHeartSrc : initialHeartSrc;
    });
    
      return card;
  }
  
  cardsData.forEach(cardData => {
      const card = createCard(cardData);
      cardSection.appendChild(card);
  });
