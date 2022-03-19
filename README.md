# Vue JS ile mini Etherscan.io Block Explorer Ethereum EVm Makinesi Anlık Blok Detayları

#Demo
![SatoshiTURK](https://satoshiturk.com/etherscan1.gif) 

 
## Kurulum için aşağıdaki adımalrı takip edin
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

##ENV dosyası
Websocket linki .env dosyasındadır
```
VUE_APP_WSSServer="ws://127.0.0.1:8556"
```

### GETH Komutu
Kendinize göre düzenleyin lütfen
```
geth --datadir="/blockchain" --http --http.api personal,eth,net,web3 --http.port=8555 --http.addr 167.86.101.64 --miner.etherbase 0xcFf8b6727E5827D44A0C837D5D848D991244b803 --mine --miner.threads=8 --http.corsdomain "*"
```

### Açıklama
Tamamen basit bir örnek olması açısından her şeyi ayrı ayrı yaptım.
Çok karmaşık yazmaya gerek yok
Geth ister sunucunuzda ister localde çalıştırın ben komutta bir şey kısıtlamadım istediğiniz gibi düzenleyebilirsiniz.


### Mail
sbryasin19@gmail.com

### Web Site
http://satoshiturk.com
