---
title: Pi-hole op je Raspberry Pi
tableOfContents: true
---

Eerder verschenen op [Geensnor.nl](https://geensnor.netlify.app/pi-hole-voor-beginners/)

[Pi-hole](https://pi-hole.net/) is een applicatie die internetadvertenties en trackers blokkeert op je thuisnetwerk. Pi-hole kun je op allerlei manieren installeren en gebruiken. Hieronder leg ik een (relatief..) eenvoudige manier uit en laat ik zien wat je ervoor moet kopen. Als je Pi-hole eenmaal hebt geconfigureerd, worden advertenties op al je apparaten in huis automatisch geblokkeerd.

![pi hole logo](https://repository-images.githubusercontent.com/20619036/d86b7900-610a-11e9-811b-100767c1714e)

Het enige wat je van tevoren nodig hebt is:

- Een uur de tijd
- Een computer met een micro [SD kaart lezer](https://partner.bol.com/click/click?p=2&t=url&s=1122314&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fp%2Fmultifunctionele-usb-kaartlezer-4-in-1-usb-2-0-m2-sd-sdhc-sd-tf-geheugenkaart-smart-reader-blauw%2F9200000101914013%2F&name=Multifunctionele%20USB%20Kaartlezer%204%20in%201%20USB%202.0...)
- Ongeveer 45 euro
- Basale kennis van je eigen netwerk. IP adres van je router bijvoorbeeld.

## 1. Kopen

Voordat je kan beginnen moet je wat dingen kopen. En een Pi-hole mag dan wel advertenties tegenhouden, maar dit artikel staat helemaal strak van de Bol.com affiliate links. Voor Geensnor.nl moet ook gewoon elk jaar de portemonee getrokken worden...

Ten eerste natuurlijk een Raspberry Pi waar we Pi-hole op gaan installeren. De goedkoopste en kleinste is voldoende voor Pi-hole.

Deze is prima: [Raspberry Pi Zero WH (voorgesoldeerde headers)](<https://partner.bol.com/click/click?p=2&t=url&s=1122314&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fp%2Fraspberry-pi-zero-wh%2F9300000014844610%2F&name=Raspberry%20Pi%20Zero%20WH%20(voorgesoldeerde%20headers)>)

Standaard kun je niets opslaan op een Raspberry Pi, dus je hebt ook nog een geheugenkaartje nodig. Qua ruimte heeft Pi-hole ook niet veel nodig, dus 16 GB volstaat. Deze bijvoorbeeld: [SanDisk Ultra Micro SDHC 16GB - UHSI & A1 - met adapter](https://partner.bol.com/click/click?p=2&t=url&s=1122314&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fp%2Fsandisk-ultra-micro-sdhc-16gb-uhsi-a1-met-adapter%2F9200000080737259%2F&name=SanDisk%20Ultra%20Micro%20SDHC%2016GB%20-%20UHSI%20%26%20A1%20-%20me)

De Raspberry Pi heeft ook nog voeding nodig. Hoogstwaarschijnlijk heb je zelf nog wel ergens een Micro USB kabel liggen die je ervoor kan gebruiken. Anders moet je deze kopen: [Nedis Micro-USB naar USB kabel - Zwart - 1 meter](https://partner.bol.com/click/click?p=2&t=url&s=1122314&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fp%2Fnedis-micro-usb-naar-usb-kabel-zwart-1-meter%2F9200000105915308%2F&name=Nedis%20Micro-USB%20naar%20USB%20kabel%20-%20Zwart%20-%201%20meter)

Als je een Raspberry Pi 4 hebt gekocht, moet je trouwens een USB C kabel kopen: [Haweel Gecertificeerde Type C kabel 1 Meter USB C Cable](https://partner.bol.com/click/click?p=2&t=url&s=1122314&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fp%2Fhaweel-gecertificeerde-type-c-kabel-1-meter-usb-c-cable-voor-huawei-nova-nexus-6p-p9-p9-plus-mate-9-mate-9%2F9200000092997635%2F&name=Haweel%20Gecertificeerde%20Type%20C%20kabel%201%20Meter%20US...)

Tip: Als de Raspberry Pi eenmaal is geinstalleerd, kun je hem prima voeden via een USB poort van de modem/router. Dan heb je mooi alle netwerkspullen bij elkaar liggen en heb je geen extra adapter nodig.

## 2. Software

Nu je alle hardware hebt, wordt het tijd voor wat software.

### Besturingssysteem

Als eerste moeten we het besturingssysteem van de Raspberry Pi op de SD kaart zetten. Daarvoor moet je het volgende doen

1. Stop de SD kaart in je computer.
2. Download de Raspberry Pi Imager van [https://www.raspberrypi.org/software/](https://www.raspberrypi.org/software/)
3. Installeer de Raspberry Pi Imager
4. Start de Raspberry Pi Imager, kies het "recommend" besturingssysteem en je SD kaart.
5. Klik op "Write"
6. Na een tijdje staat het besturingssysteem (Raspberry Pi OS) op de SD kaart.
7. Klaar!

Laat de kaart voor nu maar even in je computer zitten.

### WiFi configureren

Zonder WiFi verbinding begin je natuurlijk niet zoveel. Volgen deze stappen om verbinding te maken met je WiFi netwerk

1. Open met je verkenner/finder je SD kaart
2. Maak een bestand aan met de volgende naam: wpa_supplicant.conf
3. Open het bestand met een texteditor en zet het onderstaande erin
4. Bewaren en afsluiten

Inhoud wpa_supplicant.conf

```text
    update_config=1
    ctrl_interface=/var/run/wpa_supplicant

    network={
    ssid="<ssid van je WiFi netwerk>"
    psk="<wachtwoord van je WiFi>"
    }
```

### SSH aanzetten

Je Raspberry Pi besturen gaat voor deze toepassing het makkelijkst via [SSH](https://nl.wikipedia.org/wiki/Secure_Shell). Om dit te activeren moet je een leeg bestand maken op de SD kaart. Het bestand moet "SSH" heten. Zonder extentie of inhoud.

Op dit punt kun je de SD kaart wel uit je laptop halen en in je Raspberry Pi stoppen. Vervolgens sluit je de Raspberry Pi aan op een stroombron. Een USB lader of iets dergelijks.

### Statisch IP adres geven

Hier wordt het allemaal wat lastiger. Je Pi-hole werkt het beste als hij een statisch IP adres heeft. Je geeft dan een zelf een IP adres op in plaats van dat hij er een van je router krijgt. Dat werkt beter want alle apparaten op je netwerk moeten je Pi-hole straks weten te vinden.

1. Start een SSH client. In Windows moet je nog wat [trucjes](https://www.howtogeek.com/336775/how-to-enable-and-use-windows-10s-built-in-ssh-commands/) uithalen om SSH te kunnen gebruiken. Bij Mac OS start je gewoon terminal.
2. Login op je Raspberry Pi door het volgende in te typen: `ssh pi@<IP adres van je Raspberry Pi`. Als je Raspberry Pi voor de eerste keer op start en verbinding maak met het WiFi netwerk, krijgt hij een IP adres van je router. Je moet in je router even kijken welk IP adres dat is. Waarschijnlijk staat er ergens een "DHCP table" waar dat instaat.
3. Als er om een wachtwoord wordt gevraagd, moet je `raspberry` intypen.
4. Als alles goed is gegaan, heb je via SSH verbinding gemaakt met je Raspberry Pi. Verander het standaard "raspberry" wachtwoord door iets veiligers door `passwd` in te tikken.
5. Nadat het standaard wachtwoord is gewijzigd, tik het volgende in om het configuratiebestand te openen
   `sudo nano /etc/dhcpcd.conf`.
   In dit bestand kun je een vast IP adres opgegven. Het kan zijn dat je weer het wachtwoord moet opgeven.
6. Onderaan het bestand moet je het volgende neerzetten

```text
interface wlan0
        static ip_address=192.168.1.1
        static routers=192.168.1.254

```

De bovenste is het nieuwe, statische adres van je Raspberry Pi. De onderste is het adres van je router. 7. Druk op ctrl-x om op te slaan. 8. En tik in `sudo reboot` om de Raspberry Pi opnieuw op te starten. Na de reboot heeft je Raspberry Pi het IP adres wat je in stap 5 hierboven hebt opgegeven.

### Pi-hole installeren

Nu de Raspberry Pi is geconfigureerd, kan Pi-hole erop gezet worden.

1. Log weer in met SSH zoals je eerder hebt gedaan
2. Het is verstand om de software op je Raspberry Pi bij te werken. Tik daarvoor eerst `sudo apt-get update` in om de lijst van packages te updaten. Vervolgens `sudo apt-get upgrade` om de applicaties daadwerkelijk bij te werken.
3. Als alles is bijgewerkt kan Pi-hole worden geinstalleerd: `curl -sSL https://install.pi-hole.net | bash`. Nu gaat je Raspberry Pi vanalles doen. Geef hem even de tijd.
4. Na de installatie start direct de setup van Pi-hole. Next-next-next voldoet wel redelijk. In de [documentatie](https://docs.pi-hole.net) op Pi-hole.net kun je veel terugvinden als je iets niet snapt.

### Router configureren

Als laatste moet je ervoor zorgen dat al je apparaten van je netwerk hun DNS verkeer via de Pi-hole laten lopen. Wat je hiervoor precies moet doen is lastig uit te leggen omdat dat in je router moet gebeuren en dat dus voor elke router anders is. Wel belangrijk is dat je ervoor zorgt dat de apparaten je Pi-hole gaan gebruiken en niet alleen de router zelf. Daarvoor zul je de apparaten het nieuwe DNS adres moeten vertellen tijdens het uitdelen van de IP adressen door de DHCP server. Het komt ongeveer hier op neer:

1. Login op je router
2. Zoek ergens "DHCP settings" ofzoiets op. Een DHCP server deelt niet alleen IP adressen uit aan de apparaten op je netwerk maar vertelt ook welke DNS server de clients mogen gebruiken. Standaard is dat de router zelf maar dat wil je via de Pi-hole laten lopen.
3. Als DNS server moet je het IP adres van je Raspberry Pi opgeven. Hiermee zeg je eigenlijk tegen alle apparaten op het netwerk:"Vraag voortaan maar aan de Pi-hole welke adressen opgehaald mogen worden, want die filtert de reclames eruit en stuurt de rest door". En dat is precies wat je wil!
4. Optioneel kun je de router zelf ook de DNS lookups via de Pi-hole laten doen. Dat zal op een andere plek in de router moeten, waarschijnlijk onder DNS settings.
5. Klaar! Reclames worden nu op al je apparaten in je netwerk geblokkeerd. Het kan wel zijn dat je daarvoor eerst even het IP adres van het apparaat moet vernieuwen, maar dat gebeurt uiteindelijk voor alle apparaten vanzelf een keer.
