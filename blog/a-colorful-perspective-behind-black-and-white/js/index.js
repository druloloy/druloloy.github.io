const galleryImageContainers = document.querySelectorAll('.blog-gallery-image-container');
const loadMoreButton = document.querySelector('.blog-gallery-load-more-btn');


galleryImageContainers.forEach((container) => {
    container.addEventListener('click', () => {
        const image = container.querySelector('img');
        const imageSrc = image.getAttribute('src');
        const imageAlt = image.getAttribute('alt');
    
        const modal = document.querySelector('.blog-image-modal');
        const modalImage = modal.querySelector('img');
    
        modalImage.setAttribute('src', imageSrc);
        modalImage.setAttribute('alt', imageAlt);

        modal.classList.add('blog-image-modal-visible');

        modal.addEventListener('click', (e) => {
            // close modal when clicked outside the image
            if (e.target === modal) {
                modal.classList.remove('blog-image-modal-visible');
            }
        });

    });
});

loadMoreButton.addEventListener('click', () => {
    const hiddenImages = document.querySelectorAll('.image-hidden');

    hiddenImages.forEach((image) => {
        image.classList.remove('image-hidden');
    });

    loadMoreButton.classList.add('button-hidden');
});