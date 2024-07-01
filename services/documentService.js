module.exports = {
    createAuthors(authorNumbers, authorFIOs, authorWorkplaces, authorWorkPositions, authorYearsBirh, contributions, percentageContributions ) {
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
                authorYearBirh: authorYearsBirh[i],
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
    }
}
