---
title: 'Ham-net'
---

## ... Czech webpage for Hamnet

Obsah pro Hamnet v cesku
### Co to je?
 HAMNET (zkr. Highspeed Amateur Multimedia NETwork) je pomyslným nástupcem sítě Packet Rádio, založený na technologií TCP/IP a Wifi (802.11n/a/ac) na pásmech 13 a 6cm, dovolující o několik řádů vyšší přenosové rychlosti.

 Slouží k nezávislému propojení radioamatérské infrastruktury, převaděčů, hotspotů, APRS iGatů, VoIP, amatérských Mesh sítí (AREDN, MeshCom, Meshtastic) apod., záleží na fantazií operátora. Síť je možné použít také v nouzovém závodním provozu díky dostupným proxy serverům služeb jako je například chat nebo DXcluster.

 Co bohužel není možné, a to kvůli souladu s podmínkami pro radioamatérský provoz je přímý přístup do sítě Internet, každá webová stránka dnes používá šifrovanou komunikaci, což by znamenalo přímé porušení pravidel pro provoz na radioamatérských pásmech.


### Technické info
Síť HAMNET pracuje v přiděleném IP rozsahu 44.128.0.0/10 (255.192.0.0), každý nód má potom přidělený rozsah /27 (255.255.255.224) (tedy 30 IP adres) pro vlastní síť který je rozdělený na dva /28 (255.255.255.240) rozsahy (14 IP adres každý), za účelem jeden může být "soukromý" a druhý "veřejný", na segregaci provozu potom stačí jediné pravidlo ve firewallu.
Páteřní linky (tj. mezi nódy) jsou v rozsahu /29 (255.255.255.248) (6 IP adres, 2 pro routery na každé straně linky + 2 rádia)
Každý nód potřebuje minimálně dvě komponenty, router a rádio pro propojení s dalším nódem. Na místě routerů používáme výrobky od firmy Mikrotik, jelikož i ty nejlevnější modely disponují všemi potřebnými funkcemi které provoz HAMNETu vyžaduje (z těch pokročilejších např. BGP). Kdo chce a má ty zkušenosti, může použít i jiné řešení routeru (opnSense, openWRT).

Rádia lze použít prakticky jakákoliv která podporují provoz minimálně 10MHz šířky na pásmu 5.65-5.85GHz (pouze ve rozsazích vyhrazených pro provoz neobsluhovaných stanic), podmínka je že na spoji mezi dvěma nódy musí být stejná rádia, nebo alespoň od stejného výrobce a stejné řady. Opět, v praxi se využívají hlavně rádia fy. Mikrotik a Ubiquiti.

Nastaveni pro radia. Frekvence.


### Mikrotik nastaveni
 - /interface wireless
   - set wlan1 scan-list=2300-2400
   - frequency mode = superchannel
   - country code = no_country_set


### UBNT nastaveni
Radio je potreba prepnout do "Licensed" nebo "Compilance test" modu. Country code je 511. Moznosti je vice.
 - factory reset
   - vyber compilance test/licensed v uvodnim pruvodci

 - jiz nastavene radio
   - zaloha konfigurace pres web
   - editace cfg souboru, zde jsou dve polozky countrycode, ty prepsat na 511
   - obnova konfigurace pres web

### Links
 - [Band plan UHF](https://www.iaru-r1.org/wp-content/uploads/2021/03/UHF-Bandplan.pdf)
 - [Band plan SHF](https://www.iaru-r1.org/wp-content/uploads/2020/12/SHF-Bandplan.pdf)
 - [Všeobecné oprávnění č. VO-R/12/11.2021-11](https://ctu.gov.cz/sites/default/files/obsah/vo-r_12-112021-11.pdf)
 - [Hamnet database](https://hamnetdb.net/)
