function Book(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return this.name + " by " + this.author + " , " + this.pages + " pages, " + this.read;
    }
}


let myLibrary = [];

function addBook(){
    var cards = document.querySelector(cards);
}

document.getElementById("close").addEventListener("click", function(){
  document.getElementById("add-book").style.display= "none";
  document.querySelector("form").reset();
});


document.getElementById("form-button").addEventListener("click", function() {
    document.getElementById("add-book").style.display = "flex";
  });
  
//   document.getElementById("closeFormBtn").addEventListener("click", function() {
//     document.getElementById("add-book").style.display = "none";
//   });
  
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let cardId;
    do {
      // Generate a random unique identifier for the card
      cardId = Math.floor(Math.random() * 100); // Change range according to your requirement
    }while(myLibrary.some(card => card.id === cardId)); // Check if generated ID already exists

    // Get form values
    const title = this.querySelector('input[id="title"]').value;
    const author = this.querySelector('input[id="author"]').value;
    const pages = this.querySelector('input[id="pages"]').value;
    const read = this.querySelector('input[class="slider-checkbox"]').checked



    myLibrary.push({id:cardId, book:new Book(title, author, pages, read)});
    // Create card element
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <svg id="close-card" class="close-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-circle-outline</title><path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" /></svg>
      <h2>Title: "${title}"</h2>
      <p>Author: ${author}</p>
      <p>Page Number: ${pages}</p>
      <p>Read?</p>
      <label class="switch">
      <input type="checkbox" class="slider-checkbox"  ${read ? 'checked' : ''}>
      <span class="slider round"></span>
      </label>
    `;
    card.dataset.cardId = cardId;


    // Append card to the container
    document.getElementById("cards").appendChild(card);
    
    const slider = card.querySelector(".slider-checkbox");
    slider.addEventListener("change", function(){
        // Find the index of the book in myLibrary array
      const index = myLibrary.findIndex(item => item.id === cardId);

      // Check if the book with the given ID exists
      if (index !== -1) {
          // Update the read status of the book
          myLibrary[index].book.read = this.checked;
      } else {
          console.log("Book not found with ID:", cardId);
      }
        })
    
    const closeButton = card.querySelector(".close-btn");
    closeButton.addEventListener("click", function() {
    // Find the corresponding cardId for the clicked card
    const clickedCardId = card.dataset.cardId;
    // Find the index of the item with the matching ID in the myLibrary array
      console.log(cardId)
      // Remove the parent card element from the document
      card.remove();
      myLibrary = myLibrary.filter(item => item.id !==cardId);
    });

    // Reset form
    this.reset();
  
    // Close the form popup
    document.getElementById("add-book").style.display = "none";
  });
  