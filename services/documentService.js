const fs = require('fs');
const path = require('path');
const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');
const ImageModule = require('docxtemplater-image-module-free');
const formatService = require('./formatService'); 

module.exports = {
    createDocument(data, files) {
        try {
            const supplements = data.supplements === undefined ? [] : formatService.createSupplements(
                data.supplements,
                files
            )
            console.dir(supplements, { depth: null });

            const content = fs.readFileSync(
                path.resolve('templates/proposal_template.docx'),
                'binary'
            )
            const zip = new PizZip(content)

            const opts = {
                centered: false,
                getImage: function (tagValue, tagName) {
                    return fs.readFileSync(tagValue, 'binary')
                },
                getSize: function (img, tagValue, tagName) {
                    // Задаем размеры изображений, можно изменить по необходимости
                    return [365, 260]
                },
            }
            const doc = new Docxtemplater(zip, {
                paragraphLoop: true,
                linebreaks: true,
                modules: [new ImageModule(opts)],
            })

            doc.render({
                orgName: data.orgName,
                boss: data.boss,
                proposalName: data.proposalName,
                problemDescription: formatService.formatTextWithIndent(data.problemDescription),
                solution:  formatService.formatTextWithIndent(data.solution),
                result: formatService.formatTextWithIndent(data.result),
                authors: formatService.createAuthors(
                    data.authorNumbers,
                    data.authorFIOs,
                    data.authorWorkplaces,
                    data.authorWorkPositions,
                    data.authorYearsBirth,
                    data.contributions,
                    data.percentageContributions
                ),
                infoAboutUseObject: data.infoAboutUseObject,
                readinessDegree: data.readinessDegree,
                beneficialEffect: formatService.formatTextWithIndent(data.beneficialEffect),
                effectDescription: formatService.formatTextWithIndent(data.effectDescription),
                innovation: data.innovation,
                useful: data.useful,
                expediency: data.expediency,
                tradeSecretRegime: data.tradeSecretRegime,
                workplaceTradeSecret: data.workplaceTradeSecret,
                fioTradeSecret: data.fioTradeSecret,
                industrialSafety: data.industrialSafety ? 'требованиям соответствует' : 'требованиям не соответствует',
                workplaceIndustrialSafety: data.workplaceIndustrialSafety,
                fioIndustrialSafety: data.fioIndustrialSafety,
                environmentalSafety: data.environmentalSafety ? 'требованиям соответствует' : 'требованиям не соответствует',
                workplaceEnvironmentalSafety: data.workplaceEnvironmentalSafety,
                fioEnvironmentalSafety: data.fioEnvironmentalSafety,
                supplements: supplements
            })

            const buf = doc.getZip().generate({ type: 'nodebuffer' })

            const generatedDir = './generated/proposals'
            if (!fs.existsSync(generatedDir)) {
                fs.mkdirSync(generatedDir)
            }

            const fileName = `Рационализаторское предложение.docx`
            const outputPath = path.resolve(generatedDir, fileName)

            fs.writeFileSync(outputPath, buf)

            // Пример удаления всех загруженных файлов
            if (files) {
                files.forEach(file => {
                    const filePath = file.path

                    fs.unlink(filePath, err => {
                        if (err) {
                            return
                        }
                    })
                })
            }

            return buf;
        } catch (error) {
            console.error(error);
			throw error;
		} 
    }
}
