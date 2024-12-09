function openModal(imageSrc) {
    // Set the image source
    const modalImage = document.getElementById("modalImage");
    modalImage.src = imageSrc;

    // Show the modal
    const modal = document.getElementById("imageModal");
    modal.classList.remove("hidden");
}

function closeModal(event) {
    const modalImage = document.getElementById("modalImage");
    if (event.target !== modalImage) {
        const modal = document.getElementById("imageModal");
        modal.classList.add("hidden");
    }
}