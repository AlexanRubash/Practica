module.exports = {
    formatDate(inputDate) {
        const dateObj = new Date(inputDate);
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
    
        // Ensure two-digit format for day and month
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;
    
        return `${formattedDay}.${formattedMonth}.${year}`;
    },

    createAuthors(authorNumbers, authorFIOs, authorWorkplaces, authorWorkPositions, authorYearsBirth, contributions, percentageContributions ) {
        const authors = [];

        for (let i = 0; i < authorNumbers.length; i++) {
            let nameParts = authorFIOs[i].split(' ');

            if (nameParts.length >= 3) {
                nameParts[1] = nameParts[1].charAt(0) + '.';
                nameParts[2] = nameParts[2].charAt(0) + '.';
            }

            authors.push({ 
                indexAuthor: i + 1,
                authorNumber: authorNumbers[i], 
                authorFIO: authorFIOs[i],
                shortAuthorFIO: nameParts.join(' '),
                authorWorkplace: authorWorkplaces[i],
                authorWorkPosition: authorWorkPositions[i],
                authorYearBirth: authorYearsBirth[i],
                contribution: contributions[i],
                percentageContribution: percentageContributions[i]
            });
        }
        
        console.log(authors);
        return authors;
    },

    createSupplements(supplements, files) {
        const transformedSupplements = [];

        
        for (let i = 1; i < supplements.length; i++) {
            let paths = files.filter(file => parseInt(file.fieldname.match(/\[(\d+)\]/)[1]) === i).map(file => file.path);
            console.log(paths);

            let images = [];
            for (let j = 0; j < paths.length; j++) {
                images.push({
                    indexImage: j + 1,
                    image: paths[j],
                    imageName: supplements[i].imagesNames[j]
                })
            }

            console.log(images);

            transformedSupplements.push({
                indexSupplement: i,
                name: supplements[i].name,
                images: images
            })
        }
        
        return transformedSupplements;
    },

    formatTextWithIndent(text) {
        // Разделение текста на строки по символам новой строки
        const lines = text.split('\n');
        // Добавление отступа к каждой строке
        const formattedLines = lines.map(line => `          ${line.trim()}`);
        // Объединение строк обратно в текст с символами новой строки
        return formattedLines.join('\n');
    }
}
