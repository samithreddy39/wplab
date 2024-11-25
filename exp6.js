// Function to add a new element
function addElement() {
    const newElement = document.createElement("p");
    newElement.textContent = "This is a newly added paragraph.";
    document.getElementById("content").appendChild(newElement);
  }
  
  // Function to remove the last element
  function removeElement() {
    const contentDiv = document.getElementById("content");
    if (contentDiv.lastElementChild) {
      contentDiv.removeChild(contentDiv.lastElementChild);
    }
  }
  
  // Function to move the first paragraph to the end
  function moveElement() {
    const contentDiv = document.getElementById("content");
    const firstChild = contentDiv.firstElementChild;
    if (firstChild) {
      contentDiv.appendChild(firstChild);
    }
  }
  
  // Function to change properties like color and font
  function changeProperties() {
    const contentDiv = document.getElementById("content");
    contentDiv.classList.toggle("highlight");
  }
  
