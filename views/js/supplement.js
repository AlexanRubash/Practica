let supplementCount = 0;
let imgCount = 0;

function updateSupplementId() {
    supplementCount = 0;

    const supplements = Array.from(document.getElementById('supplementContainer').children);
    supplements.forEach(supplement => {
        const currentId = ++supplementCount;

        supplement.id = `supplement${currentId}`;
        const currentSupplement = supplement.querySelector('.supplement-info');
        currentSupplement.innerText = `Приложение ${currentId}`;

        const removeSupplementButton = currentSupplement.querySelector('.remove-supplement-button');
        removeSupplementButton.id = `remove-supplement-button${currentId}`;

        const supplementTitleInputs = supplement.querySelectorAll('.supplement-title-input');
        supplementTitleInputs.forEach(supplementTitleInput => supplementTitleInput.name = `supplements[${currentId}][name]`);

        const images = supplement.querySelectorAll('.upload-img');
        images.forEach(image => image.name = `supplements[${currentId}][images][]`);

        const titleImages = supplement.querySelectorAll('.img-title-input');
        titleImages.forEach(titleImage => titleImage.name = `supplements[${currentId}][imagesNames][]`);
    });
}

function addSupplement() {
    const supplementId = ++supplementCount;
    const supplementContainer = document.getElementById('supplementContainer');

    const supplementDiv = document.createElement('div');
    supplementDiv.className = 'supplement-form';
    supplementDiv.id = `supplement${supplementId}`;

    supplementDiv.innerHTML = `
        <label class="supplement-info">
            Приложение ${supplementId}
            <button type="button" id="remove-supplement-button${supplementId}" class="remove-supplement-button">X</button>
        </label>
        <input type="text" class="supplement-title-input" placeholder="Название приложения" name="supplements[${supplementId}][name]">
        <div class="img-container"></div>
        <label style="font-size: 16px">
            Добавить изображение
            <button type="button" class="add-img">+</button>
        </label>
    `;

    supplementContainer.appendChild(supplementDiv);

    // Event listeners
    const removeSupplementButton = supplementDiv.querySelector(`#remove-supplement-button${supplementId}`);
    const addImageButton = supplementDiv.querySelector('.add-img');
    const supplementInfo = supplementDiv.querySelector('.supplement-info');

    removeSupplementButton.addEventListener('click', () => {
        supplementDiv.remove();
        updateSupplementId();
    });

    addImageButton.addEventListener('click', () => {
        addImage(supplementDiv.querySelector('.img-container'), supplementId);
    });

    supplementInfo.addEventListener('click', () => {
        supplementDiv.scrollIntoView();
    });
}

function addImage(container, supplementId) {
    const imgId = ++imgCount;

    const imgDiv = document.createElement('div');
    imgDiv.id = `img-div${imgId}`;
    imgDiv.innerHTML = `
        <div class="img-controller">
            <input type="file" id="fileInput${imgId}" accept="image/*" class="upload-img" name="supplements[${supplementId}][images][]" style="display:none;">
            <img src="./no-photo.png" id="preview${imgId}" class="supplementImg" alt="Изображение">
            <button type="button" id="remove-img-button${imgId}" class="remove-img-button">X</button>
        </div>
        <input type="text" placeholder="Название изображения" class="img-title-input" name="supplements[${supplementId}][imagesNames][]">
    `;

    container.appendChild(imgDiv);

    // Event listeners
    const uploadImg = imgDiv.querySelector(`#fileInput${imgId}`);
    const image = imgDiv.querySelector(`#preview${imgId}`);
    const removeImgButton = imgDiv.querySelector(`#remove-img-button${imgId}`);

    uploadImg.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const preview = document.getElementById(`preview${imgId}`);
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    image.addEventListener('click', () => document.getElementById(`fileInput${imgId}`).click());

    removeImgButton.addEventListener('click', () => imgDiv.remove());
}