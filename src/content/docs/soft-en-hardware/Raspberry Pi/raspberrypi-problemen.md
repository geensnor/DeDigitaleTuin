---
title: Pi problemen
---

En hoe je ze op kan lossen...

## Je SSH client verwacht op het betreffende IP adres een ander apparaat

Dan krijg je deze error
`WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!`

Dan moet je even dit doen
`ssh-keygen -R <ip van het apparaat waar je naartoe wil ssh-en>`

## Domoticz kapt ermee na update

Als die update dus niet slaagt kun je gelukkig redelijk snel weer terug. Domoticz maakt namelijk standaard eerst een complete backup, inclusief settings, en gaat daarna pas aan de slag. Kwestie van dat ding terug zetten en de service een restart geven.

```bash
cd ~pi/domoticz/backups
```

```bash
tar xvzf domoticz_backup_yyyymmdd_hhmms.tar.gz -C /home/pi/domoticz
```

```bash
service domoticz restart
```

Mocht hij piepen over rechten op de backups folders is dat een kwestie van ff `sudo -s` (nieuwe shell met root rechten).
