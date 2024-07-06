const fs = require('fs')
const path = require('path')
const PizZip = require('pizzip')
const Docxtemplater = require('docxtemplater')
const documentService = require('../services/documentService')
const ImageModule = require('docxtemplater-image-module-free')

module.exports = {
	async index(req, res) {
		res.render("mainPage", { 
			currentForm: 'rationalizationProposal',
		});
	},

	async addDocument(req, res) {
		try {
			const data = req.body

			const supplements = data.supplements === undefined ? [] : documentService.createSupplements(
				data.supplements,
				req.files
			)
			console.dir(supplements, { depth: null });

			const content = fs.readFileSync(
				path.resolve('templates/rationalization_proposal_template.docx'),
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
				problemDescription: documentService.formatTextWithIndent(data.problemDescription),
				solution:  documentService.formatTextWithIndent(data.solution),
				result: documentService.formatTextWithIndent(data.result),
				authors: documentService.createAuthors(
					data.authorNumbers,
					data.authorFIOs,
					data.authorWorkplaces,
					data.authorWorkPositions,
					data.authorYearsBirh,
					data.contributions,
					data.percentageContributions
				),
				infoAboutUseObject: data.infoAboutUseObject,
				readinessDegree: data.readinessDegree,
				beneficialEffect: documentService.formatTextWithIndent(data.beneficialEffect),
				effectDescription: documentService.formatTextWithIndent(data.effectDescription),
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

			const generatedDir = './generated/rationalization_proposals'
			if (!fs.existsSync(generatedDir)) {
				fs.mkdirSync(generatedDir)
			}

			const fileName = `Рационализаторское предложение.docx`
			const outputPath = path.resolve(generatedDir, fileName)

			fs.writeFileSync(outputPath, buf)

			// Пример удаления всех загруженных файлов
			if (req.files) {
				req.files.forEach(file => {
					const filePath = file.path

					fs.unlink(filePath, err => {
						if (err) {
							return
						}
					})
				})
			}

			res.download(outputPath)
		} catch (error) {
			console.error('Ошибка при создании DOCX:', error.message)
			res
				.status(500)
				.send('Ошибка при создании документа. Обратитесь к администратору.')
		}
	},

	//getDocument
	//editDocument
	//deleteDocument
}
