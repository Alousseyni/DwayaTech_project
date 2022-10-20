CREATE TABLE IF NOT EXISTS drugtab (
    `drug_name` VARCHAR(19)  NOT NULL PRIMARY  KEY, 
    `drug_price` INT,
    `drug_period` DATETIME,
    `drug_in_stock` INT,
    `drug_arrival_date` DATETIME,
    `drug_code_bar` INT
); 
INSERT INTO drugtab VALUES
    ('Acetaminophen',5575,'2025-12-08 00:00:00',984,'2022-11-11 00:00:00',1506),
    ('Adderall',7686,'2024-10-10 00:00:00',567,'2021-05-16 00:00:00',6443),
    ('Amitriptyline',802,'2023-08-04 00:00:00',461,'2022-10-12 00:00:00',6410),
    ('Amlodipine',583,'2025-12-09 00:00:00',701,'2021-01-15 00:00:00',6228),
    ('Amoxicillin',1965,'2025-05-30 00:00:00',858,'2021-02-03 00:00:00',4965),
    ('Ativan',1589,'2023-09-29 00:00:00',804,'2022-07-12 00:00:00',5479),
    ('Atorvastatin',528,'2024-03-09 00:00:00',53,'2021-05-11 00:00:00',1205),
    ('Azithromycin',1172,'2023-03-27 00:00:00',711,'2022-04-10 00:00:00',4012),
    ('Benzonatate',1873,'2025-12-31 00:00:00',835,'2021-11-15 00:00:00',4494),
    ('Brilinta',477,'2025-06-08 00:00:00',532,'2022-10-17 00:00:00',5640),
    ('Bunavail',586,'2023-07-08 00:00:00',227,'2022-10-31 00:00:00',318),
    ('Buprenorphine',2543,'2023-08-12 00:00:00',506,'2022-04-19 00:00:00',4770),
    ('Cephalexin',1766,'2023-07-24 00:00:00',1092,'2022-10-29 00:00:00',4048),
    ('Ciprofloxacin',989,'2024-11-11 00:00:00',778,'2021-11-14 00:00:00',1322),
    ('Citalopram',2332,'2023-08-24 00:00:00',725,'2021-06-24 00:00:00',6498),
    ('Clindamycin',1766,'2024-01-07 00:00:00',551,'2022-10-05 00:00:00',5356),
    ('Clonazepam',1618,'2024-08-20 00:00:00',39,'2021-11-01 00:00:00',5449),
    ('Cyclobenzaprine',1538,'2023-08-20 00:00:00',535,'2022-07-07 00:00:00',6850),
    ('Cymbalta',669,'2024-04-12 00:00:00',67,'2022-06-24 00:00:00',704),
    ('Doxycycline',1761,'2024-11-02 00:00:00',354,'2021-10-27 00:00:00',1223),
    ('Dupixent',1525,'2023-12-01 00:00:00',226,'2021-05-06 00:00:00',7064),
    ('Entresto',2419,'2025-02-25 00:00:00',334,'2022-04-14 00:00:00',2731),
    ('Entyvio',1038,'2025-01-14 00:00:00',517,'2022-06-27 00:00:00',5619),
    ('Farxiga',2455,'2024-12-08 00:00:00',155,'2022-01-31 00:00:00',941),
    ('Fentanyl',2408,'2024-04-25 00:00:00',626,'2021-09-06 00:00:00',7240),
    ('Fentanyl Patch',2161,'2025-02-26 00:00:00',679,'2022-05-05 00:00:00',6922),
    ('Gabapentin',1895,'2024-01-03 00:00:00',660,'2022-09-09 00:00:00',6786),
    ('Gilenya',1063,'2023-07-27 00:00:00',1081,'2021-10-20 00:00:00',5395),
    ('Humira',1260,'2024-06-11 00:00:00',1089,'2021-11-16 00:00:00',5040),
    ('Hydrochlorothiazide',990,'2023-02-16 00:00:00',735,'2022-12-05 00:00:00',3872),
    ('Hydroxychloroquine',1683,'2024-07-27 00:00:00',331,'2021-11-03 00:00:00',3247),
    ('Ibuprofen',852,'2024-01-03 00:00:00',248,'2021-07-28 00:00:00',6412),
    ('Imbruvica',1395,'2024-01-07 00:00:00',158,'2022-08-04 00:00:00',1377),
    ('Invokana',2321,'2025-05-03 00:00:00',1102,'2022-06-28 00:00:00',1438),
    ('Januvia',1776,'2024-09-07 00:00:00',990,'2022-01-25 00:00:00',6510),
    ('Jardiance',2110,'2025-12-12 00:00:00',611,'2021-08-13 00:00:00',7001),
    ('Kevzara',1733,'2025-02-27 00:00:00',106,'2022-06-11 00:00:00',3626),
    ('Lexapro',1257,'2024-05-15 00:00:00',603,'2022-08-29 00:00:00',4976),
    ('Lisinopril',1563,'2024-09-15 00:00:00',752,'2022-03-23 00:00:00',7311),
    ('Lofexidine',1516,'2024-11-03 00:00:00',1057,'2021-01-21 00:00:00',447),
    ('Loratadine',998,'2023-05-11 00:00:00',760,'2022-05-24 00:00:00',4278),
    ('Lyrica',515,'2025-06-07 00:00:00',551,'2021-09-10 00:00:00',6946),
    ('Melatonin',2275,'2025-04-16 00:00:00',632,'2021-10-07 00:00:00',7070),
    ('Meloxicam',1649,'2025-11-12 00:00:00',657,'2021-04-05 00:00:00',315),
    ('Metformin',679,'2023-10-20 00:00:00',838,'2021-02-23 00:00:00',6288),
    ('Methadone',784,'2023-09-11 00:00:00',1111,'2022-04-21 00:00:00',5734),
    ('Methotrexate',608,'2025-08-19 00:00:00',301,'2022-03-15 00:00:00',5450),
    ('Metoprolol',2001,'2025-07-24 00:00:00',637,'2022-12-29 00:00:00',7312),
    ('Naloxone',2271,'2023-04-12 00:00:00',10,'2022-05-09 00:00:00',4977),
    ('Naltrexone',1853,'2025-12-12 00:00:00',752,'2022-08-12 00:00:00',3006),
    ('Naproxen',1761,'2023-01-21 00:00:00',173,'2021-12-28 00:00:00',422),
    ('Omeprazole',1534,'2023-05-05 00:00:00',1080,'2022-03-10 00:00:00',1482),
    ('Onpattro',590,'2024-06-16 00:00:00',960,'2021-12-18 00:00:00',4270),
    ('Otezla',1716,'2023-03-07 00:00:00',462,'2022-06-12 00:00:00',766),
    ('Ozempic',865,'2025-05-18 00:00:00',671,'2022-11-25 00:00:00',4688),
    ('Pantoprazole',719,'2025-11-17 00:00:00',806,'2022-05-05 00:00:00',5872),
    ('Prednisone',1871,'2025-02-10 00:00:00',851,'2021-05-21 00:00:00',4490),
    ('Probuphine',2453,'2025-10-31 00:00:00',289,'2022-10-14 00:00:00',2597),
    ('Rybelsus',1606,'2024-07-12 00:00:00',336,'2021-03-15 00:00:00',891),
    ('secukinumab',1311,'2024-02-25 00:00:00',715,'2021-04-12 00:00:00',2463),
    ('Sublocade',433,'2025-10-30 00:00:00',7,'2021-12-02 00:00:00',1942),
    ('Tramadol',996,'2025-01-05 00:00:00',395,'2022-10-04 00:00:00',5111),
    ('Trazodone',2095,'2023-02-06 00:00:00',774,'2022-03-18 00:00:00',3658),
    ('Viagra',2166,'2024-03-28 00:00:00',685,'2021-06-21 00:00:00',2049),
    ('Wellbutrin',1942,'2025-12-05 00:00:00',169,'2022-10-05 00:00:00',2084),
    ('Xanax',2364,'2025-09-18 00:00:00',893,'2021-03-11 00:00:00',3820),
    ('Zubsolv',2375,'2023-01-11 00:00:00',633,'2022-07-10 00:00:00',3302);
