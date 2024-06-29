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

        const removeSupplementButton = document.createElement('button');
        removeSupplementButton.innerText = 'X';
        removeSupplementButton.type = 'button';
        removeSupplementButton.id = `remove-supplement-button${currentId}`;
        removeSupplementButton.className = 'remove-supplement-button';
        removeSupplementButton.addEventListener('click', () => { 
            document.getElementById(`supplement${currentId}`).remove()
            updateSupplementId();
        });
        currentSupplement.appendChild(removeSupplementButton);

    });
}


function addSupplement() {
    supplementCount++;
    const supplementId = supplementCount;

    const supplementContainer = document.getElementById('supplementContainer');

    const supplementDiv = document.createElement('div');
    supplementDiv.className = 'supplement-form';
    supplementDiv.id = `supplement${supplementId}`;
    
    const supplementInfo = document.createElement('label');
    supplementInfo.className = 'supplement-info';
    supplementInfo.innerText = `Приложение ${supplementId}`;
    supplementInfo.onclick = function() {
        document.getElementById(`supplement${supplementId}`).scrollIntoView();
    };
    supplementDiv.appendChild(supplementInfo);

    const removeSupplementButton = document.createElement('button');
    removeSupplementButton.innerText = 'X';
    removeSupplementButton.type = 'button';
    removeSupplementButton.id = `remove-supplement-button${supplementId}`;
    removeSupplementButton.className = 'remove-supplement-button';
    removeSupplementButton.addEventListener('click', () => { 
        document.getElementById(`supplement${supplementId}`).remove()
        updateSupplementId();
    });
    supplementInfo.appendChild(removeSupplementButton);

    const supplementTitleInput = document.createElement('input');
    supplementTitleInput.type = 'text';
    supplementTitleInput.placeholder = 'Название приложения';
    supplementDiv.appendChild(supplementTitleInput);

    const imgContainer = document.createElement('div');
    imgContainer.className = 'img-container';
    supplementDiv.appendChild(imgContainer);

    const addImgLabel = document.createElement('label');
    addImgLabel.innerText = 'Добавить изображение';
    addImgLabel.style = 'font-size: 16px';

    const addImageButton = document.createElement('button');
    addImageButton.type = 'button';
    addImageButton.className = 'add-img';
    addImageButton.innerText = '+';
    addImageButton.onclick = function() {
        addImage(imgContainer);
    };
    addImgLabel.appendChild(addImageButton);
    supplementDiv.appendChild(addImgLabel);

    supplementContainer.appendChild(supplementDiv);

}

function addImage(container) {
    imgCount++;
    const imgId = imgCount;
    const imgDiv = document.createElement('div');
    imgDiv.id = `img-div${imgId}`;

    const imgController = document.createElement('div');
    imgController.className = 'img-controller';

    const uploadImg = document.createElement('input');
    uploadImg.type = 'file';
    uploadImg.id = `fileInput${imgId}`;
    uploadImg.accept = 'image/*';
    uploadImg.style = 'display:none;';
    imgController.appendChild(uploadImg);

    const image = document.createElement('img');
    image.src = './no-photo.png'; 
    const previewId = `preview${imgId}`;
    image.id = previewId; 
    image.className = 'supplementImg'; 
    image.alt = 'Изображение';
    imgController.appendChild(image);

    const removeImgButton = document.createElement('button');
    removeImgButton.innerText = 'X';
    removeImgButton.type = 'button';
    removeImgButton.id = `remove-img-button${imgId}`;
    removeImgButton.className = 'remove-img-button';
    removeImgButton.addEventListener('click', () => document.getElementById(`img-div${imgId}`).remove());
    imgController.appendChild(removeImgButton);

    imgDiv.appendChild(imgController);

    const imgTitleInput = document.createElement('input');
    imgTitleInput.type = 'text';
    imgTitleInput.placeholder = 'Название изображения';
    imgDiv.appendChild(imgTitleInput);

    container.appendChild(imgDiv);

    uploadImg.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const preview = document.getElementById(previewId);
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    image.addEventListener('click', () => document.getElementById(`fileInput${imgId}`).click());
}




// function addImage(container) {
//     imgCount++;
    
//     const imgHtml = `
//     <div>
//         <div class="img-controller">
//             <input type="file" id="fileInput${imgCount}" accept="image/*" style="display:none;">
//             <img src="./no-photo.png" id="preview${imgCount}" class="supplementImg" alt="Изображение">
//             <button class="remove-img">X</button>
//         </div>
//         <input style="display: block" type="text" placeholder="Название изображения">
//     </div>
//     `;

//     container.insertAdjacentHTML('beforeend', imgHtml);
//         document.getElementById(`fileInput${imgCount}`).addEventListener('change', function(event) {
//             const file = event.target.files[0];
//             if (file) {
//                 const reader = new FileReader();
//                 reader.onload = function(e) {
//                     const preview = document.getElementById(`preview${imgCount}`);
//                     preview.src = e.target.result;
//                 };
//                 reader.readAsDataURL(file);
//             }
//         });
    
//         document.getElementById(`preview${imgCount}`).addEventListener('click', function() {
//             document.getElementById(`fileInput${imgCount}`).click();
//         });
// }