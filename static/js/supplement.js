let supplementId = 0;
let imgId = 0;
let supplementCount = 0;

function updateSupplementId() {
    const supplements = Array.from(document.getElementById('supplementContainer').children);
    supplementCount = 0;

    supplements.forEach((supplement) => { 
        const supplementInfo = supplement.querySelector('.supplement-info');
        supplementInfo.innerText = `Приложение ${++supplementCount}`;

        const removeSupplementButton = document.createElement('button');
        removeSupplementButton.type = 'button';
        removeSupplementButton.className = 'remove-supplement-button';
        removeSupplementButton.innerText = 'X';

        removeSupplementButton.addEventListener('click', () => {
            supplement.remove();
            updateSupplementId();
        });

        supplementInfo.appendChild(removeSupplementButton)
    });
}

function addSupplement(supplement) {
    if(!supplement) {
        supplement = {
            name: '',
            image: false,
            imageName: '',
        }
    }

    const currentSupplementId = ++supplementId;
    const supplementContainer = document.getElementById('supplementContainer');

    const supplementDiv = document.createElement('div');
    supplementDiv.className = 'supplement-form';
    supplementDiv.id = `supplement${currentSupplementId}`;

    supplementDiv.innerHTML = `
        <label class="supplement-info">
            Приложение ${++supplementCount}
            <button type="button" id="remove-supplement-button${currentSupplementId}" class="remove-supplement-button">X</button>
        </label>
        <input type="text" class="supplement-title-input" placeholder="Название приложения" name="supplements[${currentSupplementId}][name]" value='${supplement.name}'>
        <div class="img-container"></div>
        <label style="font-size: 16px">
            Добавить изображение
            <button type="button" class="add-img">+</button>
        </label>
    `;

    supplementContainer.appendChild(supplementDiv);

    // Event listeners
    const removeSupplementButton = supplementDiv.querySelector(`#remove-supplement-button${currentSupplementId}`);
    const addImageButton = supplementDiv.querySelector('.add-img');
    const supplementInfo = supplementDiv.querySelector('.supplement-info');

    removeSupplementButton.addEventListener('click', () => {
        supplementDiv.remove();
        updateSupplementId();
    });

    addImageButton.addEventListener('click', () => {
        addImage(supplementDiv.querySelector('.img-container'), currentSupplementId);
    });

    supplementInfo.addEventListener('click', () => {
        supplementDiv.scrollIntoView();
    });

    addImage(supplementDiv.querySelector('.img-container'), currentSupplementId, { image: supplement.image, imageName: supplement.imageName})
}

function addImage(container, currentSupplementId, img) {
    if(!img) {
        img = {
            image: false,
            imageName: '',
        }
    }

    const currentImgId = ++imgId;

    const imgDiv = document.createElement('div');
    imgDiv.id = `img-div${currentImgId}`;
    imgDiv.innerHTML = img.image ? `
        <div class="img-controller">
            <input type="file" id="fileInput${currentImgId}" accept="image/*" class="upload-img" name="supplements[${currentSupplementId}][images][]" style="display:none;">
            <img src="${img.image.toString('base64')}" id="preview${currentImgId}" class="supplementImg" alt="Изображение">
            <button type="button" id="remove-img-button${currentImgId}" class="remove-img-button">X</button>
        </div>
        <input type="text" placeholder="Название изображения" class="img-title-input" name="supplements[${currentSupplementId}][imagesNames][]" value='${img.imageName}'>
    `:`
        <div class="img-controller">
            <input type="file" id="fileInput${currentImgId}" accept="image/*" class="upload-img" name="supplements[${currentSupplementId}][images][]" style="display:none;">
            <img src="./no-photo.png" id="preview${currentImgId}" class="supplementImg" alt="Изображение">
            <button type="button" id="remove-img-button${currentImgId}" class="remove-img-button">X</button>
        </div>
        <input type="text" placeholder="Название изображения" class="img-title-input" name="supplements[${currentSupplementId}][imagesNames][]" value='${img.imageName}'>
    `;

    container.appendChild(imgDiv);

    // Event listeners
    const uploadImg = imgDiv.querySelector(`#fileInput${currentImgId}`);
    const image = imgDiv.querySelector(`#preview${currentImgId}`);
    const removeImgButton = imgDiv.querySelector(`#remove-img-button${currentImgId}`);

    uploadImg.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const preview = document.getElementById(`preview${currentImgId}`);
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    image.addEventListener('click', () => document.getElementById(`fileInput${currentImgId}`).click());

    removeImgButton.addEventListener('click', () => imgDiv.remove());
}