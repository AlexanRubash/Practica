const fs = require('fs')
const path = require('path')
const PizZip = require('pizzip')
const Docxtemplater = require('docxtemplater')
const documentService = require('../services/documentService')
const ImageModule = require('docxtemplater-image-module-free')

module.exports = {
	async index(req, res) {
		res.sendFile(path.join(__dirname, '../views', 'form.html'))
	},

	async addDocument(req, res) {
		try {
			const data = req.body

			const supplements = documentService.createSupplements(
				data.supplements,
				req.files
			)
			console.dir(supplements, { depth: null })
			const content = fs.readFileSync(
				path.resolve('templates/template.docx'),
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
				Boss: data.Boss,
				proposalName: data.proposalName,
				problemDescription: data.problemDescription,
				solution: data.solution,
				result: data.result,
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
				beneficialEffect: data.beneficialEffect,
				effectDescription: data.effectDescription,
				innovation: data.innovation,
				expediency: data.expediency,
				tradeSecretRegime: data.tradeSecretRegime,
				workplaceTradeSecret: data.workplaceTradeSecret,
				fioTradeSecret: data.fioTradeSecret,
				industrialSafety: data.industrialSafety ? 'да' : 'нет',
				workplaceIndustrialSafety: data.workplaceIndustrialSafety,
				fioIndustrialSafety: data.fioIndustrialSafety,
				environmentalSafety: data.environmentalSafety ? 'да' : 'нет',
				workplaceEnvironmentalSafety: data.workplaceEnvironmentalSafety,
				fioEnvironmentalSafety: data.fioEnvironmentalSafety,
				supplements: supplements,
			})

			const buf = doc.getZip().generate({ type: 'nodebuffer' })

			const generatedDir = './generated'
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
