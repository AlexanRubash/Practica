--1. Скачиваем докер и устанавливаем
--2. в cmd пишем

--docker pull mariadb

--docker run --detach --name practica --env MARIADB_ROOT_PASSWORD=Inul1234  mariadb:latest

--3. потом в datagrip или другой хуйнюше для бд вставляем это
CREATE DATABASE IF NOT EXISTS documents_db;

USE documents_db;
-- Таблица документов метаданных (без изменений)
CREATE OR REPLACE TABLE documents_metadates (
                                                metadataID INT PRIMARY KEY AUTO_INCREMENT,

                                                orgName TEXT,
                                                Boss TEXT,
                                                problemDescription LONGTEXT,
                                                solution LONGTEXT,
                                                result LONGTEXT,
                                                proposalName TEXT,
                                                infoAboutUseObject TEXT,
                                                readinessDegree TEXT,
                                                beneficialEffect TEXT,
                                                effectDescription TEXT,
                                                innovation TEXT,
                                                expediency TEXT,
                                                tradeSecretRegime TEXT,
                                                workplaceTradeSecret TEXT,
                                                fioTradeSecret TEXT,
                                                industrialSafety TEXT,
                                                workplaceIndustrialSafety TEXT,
                                                fioIndustrialSafety TEXT,
                                                environmentalSafety TEXT,
                                                workplaceEnvironmentalSafety TEXT,
                                                fioEnvironmentalSafety TEXT
);

-- Таблица авторов (без изменений)
CREATE OR REPLACE TABLE authors (
                                    authorID INT PRIMARY KEY AUTO_INCREMENT,
                                    inDocumentID INT,
                                    authorFIO TEXT,
                                    shortAuthorFIO TEXT,
                                    authorWorkPosition TEXT,
                                    authorWorkplace TEXT,
                                    percentageContribution TEXT,
                                    authorNumber INT,
                                    authorYearBirth INT,
                                    contribution TEXT
);

-- Таблица приложений (без изменений)
CREATE OR REPLACE TABLE supplements (
                                        supplementID INT PRIMARY KEY AUTO_INCREMENT,
                                        name TEXT,
                                        image LONGBLOB,
                                        imageName TEXT
);
CREATE OR REPLACE TABLE documents (
                                      documentID INT PRIMARY KEY AUTO_INCREMENT,
                                      metadataID INT,
                                      FOREIGN KEY (metadataID) REFERENCES documents_metadates(metadataID)
);



-- Промежуточная таблица для связи документов и авторов
CREATE OR REPLACE TABLE document_authors (
                                             documentID INT,
                                             inDocumentID INT,
                                             authorID INT,
                                             PRIMARY KEY (documentID, authorID),
                                             FOREIGN KEY (documentID) REFERENCES documents(documentID),
                                             FOREIGN KEY (authorID) REFERENCES authors(authorID)
);

--вроде бы все