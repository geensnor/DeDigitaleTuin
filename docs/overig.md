---
title: Overig
---


# Overig

## Andere spullen

|Wat|Naam    |URL|Toelichting|
|---|--------|---|-----------|
|Afdrukken foto's|Cewe|[cewe.nl](https://cewe.nl)|Cewe is voor zover ik na kan gaan (hebben ze natuurlijk niet allemaal geprobeerd) een prima site om je foto's af te laten drukkken. Niet te duur, prima site en goede kwaliteit.|
|Koffiezetapparaat|Technivorm Moccamaster|[moccamaster.nl](https://www.moccamaster.nl)|Zeg je lekkere filterkoffie, dan zeg je Moccamaster. Beroemd ontwerp, gebouwd als een tank, van hollandse bodem. Dit is wat je leventje miste.|
|USB-C Dongle/Hub|Heeft niet echt een naam....|[Ali Express](https://nl.aliexpress.com/item/4001305601600.html?spm=a2g0s.9042311.0.0.2b574c4dqmPTcW)|Hij heeft geen merk, maar het is wel een keurig ding. Stevig gemaakt. Werkt goed. Geen gekkigheid. Deze kun je gerust over laten komen uit 中华人民共和国|
|Dunschillertje uit japan|Kai select 100|[knives and tools](https://www.knivesandtools.nl/nl/pt/-kai-select-100-dunschiller-t.htm?gclid=CjwKCAiAp4KCBhB6EiwAxRxbpJMBHBrc_6L6YPuxCvgNa1XikZMqPY2MNrh0aRyig6BmRHmaVt66kRoCYXgQAvD_BwE)|Handige dunschiller. Mesje staat net onder een geinig hoekje waardoor het allemaal een stuk makkelijker gaat. Fijn ding.|
|Kleine Hakselaar/hakmolen|Kitchenaid 5KFC3516EER|[KitchenAid mini hakmolen](https://partner.bol.com/click/click?p=2&t=url&s=1181127&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fp%2Fkitchenaid-mini-food-processor-5kfc3516s-hakmolen-wit%2F9200000084641155%2F&name=KitchenAid%20Mini%20Food%20Processor%205KFC3516S%20-%20Hak...)| Mooi klein, maar ook weer niet te klein. Hakt alles wat los en vast zit. Prima om bijv. hummus te maken, pesto, uitjes te snipperen, Kaas te raspen (kruimelen). En door het formaat kan hij prima in de keuken vertoeven.|
|Waterpistool|NERF Super Soaker Splash Mouth|[bol.com](https://partner.bol.com/click/click?p=2&t=url&s=1122314&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fp%2Fnerf-super-soaker-splash-mouth-waterpistool%2F9200000089794928%2F&name=NERF%20Super%20Soaker%20Splash%20Mouth%20-%20Waterpistool)|Snel vullen doordat hij een grote klep bovenop heeft en geen lullig gaatje. Pompen is spuiten (jaja). Lijkt redelijk stevig|
|Draadlopze oordopjes|QCY T4, maar ook ander types van QCY waarschijnlijk|[qcy.nl](https://www.qcy.nl/nl/draadloze-oortjes/)|Zie [artikel](/draadloze-oordopjes-voor-de-kleine-beurs/). Fijne oordopjes voor weinig.|
|Messenslijper voor op reis|Victorinox Dual-Knive sharpener | [Victorinox.com](https://www.victorinox.com/global/en/Products/Swiss-Army-Knives/Accessories/Dual-Knife-Sharpener/p/4.3323?mt_load=gt30)| Perfecte messenslijper die ook nog eens handig op reis mee kan. Zo fijn dat hij inmiddels mijn grotere slijper ook verdrongen heeft.|
| Stadsfiets | Azor | [azor.nl](https://www.azor.nl) | Stevigste fiets die mijn fietsenmaker verkoopt, volgens mijn fietsenmaker. Wordt in Hoogeveen in elkaar gezet. |
| Carbon steel pan| BK Black Steel | Super fijne betaalbare pannen van BK. Geen gore pfas pannen meer voor ons, leve gewoon staal! En nog beter, hoe vaker je de pan gebruikt, hoe beter hij wordt. En een stuk goedkoper dan debuyer|

## Geensnor Telegram Stickerpack

[https://t.me/addstickers/geensnor](https://t.me/addstickers/geensnor)

## Jekyll problemen na macOS upgrade

Misschien hoort dit niet echt hier, maar ik wet wel ergens laten omdat het me wel wat uitzoekwerk heeft gekost. Na de OS upgrade van macOS naar Monterey was m'n Jekyll installatie naar de maan.

Als eerste moet je `bundle install` doen om ontbrekende gems te installeren. Dat was bij mij niet voldoende. Ik heb `bundle upgrade` gedaan om bundle bij te werken, maar toen miste hij nog iets. Bleek dat er zoiets als "webrick" mist. De gem kun je toevoegen door `bundle add webrick` te doen en daarna natuurlijk weer `bundle install`. Dan lijkt het allemaal wel weer redelijk te werken.
