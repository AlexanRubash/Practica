--1. Скачиваем докер и устанавливаем
--2. в cmd пишем

--docker pull mariadb

--docker run --detach --name practica --env MARIADB_ROOT_PASSWORD=Inul1234  mariadb:latest

--3. потом в datagrip или другой хуйнюше для бд вставляем это
CREATE DATABASE IF NOT EXISTS documents_db;

USE documents_db;
-- Таблица документов метаданных (без изменений)
CREATE DATABASE IF NOT EXISTS documents_db;

USE documents_db;

-- Таблица документов метаданных
CREATE OR REPLACE TABLE documents_metadates (
                                                metadataID INT PRIMARY KEY AUTO_INCREMENT,
                                                orgName TEXT,
                                                boss TEXT,
												proposalName TEXT,
                                                problemDescription LONGTEXT,
                                                solution LONGTEXT,
                                                result LONGTEXT,                                           
                                                infoAboutUseObject TEXT,
                                                readinessDegree TEXT,
                                                beneficialEffect TEXT,
                                                effectDescription TEXT,
                                                innovation TEXT,
												useful TEXT,
                                                expediency TEXT,
                                                tradeSecretRegime TEXT,
                                                workplaceTradeSecret TEXT,
                                                fioTradeSecret TEXT,
                                                industrialSafety TEXT,
                                                workplaceIndustrialSafety TEXT,
                                                fioIndustrialSafety TEXT,
                                                environmentalSafety TEXT,
                                                workplaceEnvironmentalSafety TEXT,
                                                fioEnvironmentalSafety TEXT,
                                                timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица авторов
DROP TABLE authors;
CREATE OR REPLACE TABLE authors (
                                    authorID INT PRIMARY KEY AUTO_INCREMENT,
                                    authorFIO TEXT,
                                    shortAuthorFIO TEXT,
                                    authorWorkPosition TEXT,
                                    authorWorkplace TEXT,
                                    percentageContribution INT,
                                    authorNumber INT,
                                    authorYearBirth INT,
                                    contribution TEXT,
                                    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица приложений
SELECT * FROM supplements;
CREATE OR REPLACE TABLE supplements (
                                        supplementID INT PRIMARY KEY AUTO_INCREMENT,
                                        name TEXT,
                                        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM images;
CREATE OR REPLACE TABLE images (
                                    imageID INT PRIMARY KEY AUTO_INCREMENT,
                                    supplementID INT,
                                    image LONGBLOB,
                                    imageName TEXT,
                                    FOREIGN KEY (supplementID) REFERENCES supplements(supplementID),
                                    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM documents;
CREATE OR REPLACE TABLE documents (
                                      documentID INT PRIMARY KEY AUTO_INCREMENT,
                                      metadataID INT,
                                      FOREIGN KEY (metadataID) REFERENCES documents_metadates(metadataID),
                                      timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Промежуточная таблица для связи документов и авторов
CREATE OR REPLACE TABLE document_authors (
                                             documentID INT,
                                             authorID INT,
                                             PRIMARY KEY (documentID, authorID),
                                             FOREIGN KEY (documentID) REFERENCES documents(documentID),
                                             FOREIGN KEY (authorID) REFERENCES authors(authorID)
);

-- Промежуточная таблица для связи документов и приложений
SELECT * FROM document_supplements;
CREATE OR REPLACE TABLE document_supplements (
                                                 documentID INT,
                                                 supplementID INT,
                                                 PRIMARY KEY (documentID, supplementID),
                                                 FOREIGN KEY (documentID) REFERENCES documents(documentID),
                                                 FOREIGN KEY (supplementID) REFERENCES supplements(supplementID)
);

CREATE DATABASE IF NOT EXISTS documents_main;
USE documents_main;

SELECT * FROM documents;
CREATE OR REPLACE TABLE documents (
                                      id INT AUTO_INCREMENT PRIMARY KEY,
                                      name VARCHAR(255),
                                      document_content LONGBLOB,
                                      timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                      db_document_id INT,
                                      FOREIGN KEY (db_document_id) REFERENCES documents_db.documents(documentID) ON DELETE CASCADE
);


SELECT * FROM
--запускаем dbindex.js

--роуты
--localhost:3000/ форма
--localhost:3000/download/:id скачивание из бд ворд файла

--БАГИ:
--если в приложении только одна картинка, он считывает только один символ названия картинки (это косяк documentService.js который я поменял чутка)
--верстка документа, слетает верстка таблицы в СВЕДЕНИЯ ОБ АВТОРАХ(поле "Обоснование конкретного творческого вклада")
--какого-то фига при скачивании документа, и после открытия идет ошибка что есть поврежденые данные, ворд предлагает их востановить и весь документ нормальный

--Что надо сделать
--Изменение - указываем/тыкаем на документ и можем его менять, после замены сразу меняется и док файл в другой бд.
--Удаление - думаю понятно.
--Доменная авторизация у нас это вроде доп. поэому если не успеем то думаю ничего страшного
--Меню - просто список с Созданием/Изменением/Удалением/Скачиванием.
--По возможности после того как отработал documentService удалять изображения из папки uploads, ибо это не логично и много памяи жрет