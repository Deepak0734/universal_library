document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', function() {
        const selectedCategory = this.getAttribute('data-category');
        alert(`You selected the ${selectedCategory} category!`);
        // Here you can redirect to another page or filter content based on the selected category.
        // window.location.href = `category.html?category=${selectedCategory}`;
    });
});
