---
title: 'Ham-net'
---

## ... Czech webpage for Hamnet

Obsah pro Hamnet v cesku
### Co to je?
 HAMNET (zkr. Highspeed Amateur Multimedia NETwork) je pomyslným nástupcem sítě Packet Rádio, založený na technologií TCP/IP a Wifi (802.11n/a/ac) na pásmech 13 a 6cm, dovolující o několik řádů vyšší přenosové rychlosti.
 Slouží k nezávislému propojení radioamatérské infrastruktury, převaděčů, hotspotů, APRS iGatů, WebSDR, VoIP apod., záleží na fantazií operátora. Síť je možné použít také v nouzovém závodním provozu díky dostupným proxy serverům služeb jako je například chat nebo DXcluster.
 Co bohužel není možné, a to kvůli souladu s podmínkami pro radioamatérský provoz je přímý přístup do sítě Internet, každá webová stránka dnes používá šifrovanou komunikaci, což by znamenalo přímé porušení pravidel pro provoz na radioamatérských pásmech.


Nastaveni pro radia. Frekvence.


### Mikrotik nastaveni
 - /interface wireless
   - set wlan1 scan-list=2300-2400
   - frequency mode = superchannel
   - country code = no_country_set

### Links
 - [Band plan SHF](https://www.iaru-r1.org/wp-content/uploads/2020/12/SHF-Bandplan.pdf)
 - [Všeobecné oprávnění č. VO-R/12/11.2021-11](https://ctu.gov.cz/sites/default/files/obsah/vo-r_12-112021-11.pdf)
 - [Hamnet database](https://hamnetdb.net/)
