const colorInput = document.getElementById('colorInput');
const colorBox = document.getElementById('colorBox');

colorInput.addEventListener('input', function() {
    const selectedColor = colorInput.value;
    colorBox.style.backgroundColor = selectedColor;
});
