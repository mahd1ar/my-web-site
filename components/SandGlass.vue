<template>
  <section id="loading">
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAB4CAMAAACJiy/mAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAk9QTFRFAAAAAAAAg///2ifbecT/IUBAg///g///Nwo32ifbecT/QoCAg///AAAAPWKAbRRuecT/gfD/HjFAAAEBYr+/AAAA2ifbfuH/2ifbfuL/ecT/AAAAr5PtfNP/ERwkAAAAecT/ecT/xF3kAAAAg///KEFVAQEBNVZwW5O/g///ChQUY8DAecT/LUpgCQ8Ug///EyQkg///g///AAAAg///ecT/g///fuL/GCczCAwQGTAwIDxAg///IDhAAAAAg///2ifbg///kZ721DHdYry/gOv/SQ1JAwYHiBiJHwYfesr/mcn2Up+fg///KkVZAAAAe9D/DxkgFyUwg/7/gfP/fd3/g///AAAAzznfgvj/ECAgf+n/CBAQ2SncHzVAAgQE2ifblJj12ifbNFVuhq/6gOz/AAAATHufXRFe1i3cg///AAAAAAAAOXBwcNvbg/z/Iyo+V0p3ecT/AAAAHjs7NFRtAAAAxF3kGCczcbjvqnXtqKLwLAgsecT/W7GxDBQae9L/ecT/X6m/ykDhwk7kNGZmg///esz/g///qHju2ifbaqzfunfoe9D/Ug9Tt33pgfD/HzNDMRc5fNj/TGV72ifbLAgsiKz5g///g///LFVVlNT4ecP/OG1tEQMR2ifbecT/g///AAAAecT/fNP/GwUbe9D/fb39f+b/CwILGjMzN2VtfNj/BQoKecT/iqj5fuT/AAAAg///ZsbGYbTAfNT/AQID0zLeHzFAg///HDc3e8//fdr/g/3/BQkJg///DgIOLhk7gPD/1TXdTX2iXELQTgAAAMV0Uk5TAP//////gED/QED/v7///4D/////gID/v/+/QP//32Agf/+PYL////9/z/8Q/89e3yA8/t9fMICf////9//7A5+P/4D/YL///9/////u/zBQ///F/98QIH//////////ECDfb4D/6//f/3QQsf/fQP//35/438+A7/8gcJ+Pz//PcP9AQJ9F3xeAYP//7/+fv///YP+37/9qn7/vgHDPz883cDBA/5//b//v37/H7///vs///1f///8J9P9m//+k//////+wqzdlAAAFhElEQVR4nO2Zh3fTVhSHZUW2HEVybBkbRIhHnEFICBkESJMUWlpaoJS2jDJK6d5777333nvvvff6w/rufdJ7erIkS7Zzyunhd07OeUtf5Ovr++67T1JTLUpylJJb1EKRTuhqXgWiHkZKJlpToW2kdZpWaQ8poyhZP1I+D395+MtjN0ChpLwSQ8tD36mdpC3WYmuxIE/XHrSsuxqQeiP75KIGdopO+vq4sHcyzdOTUXVEQy+ILyShjP81SZVlRTFhrCOyZHlkkEJQLZEWJXxJudwsJb3eGU2cdKemQVRxSLYrdHQskaKJkzTX6GHSYdICkiYgB5nACZaN9JNGf2wSdlWYSLEcQicN/b8m3QtJCJKgUQbSZSwviUGaWz0O3WEyvg0axrCzLRXikHar6uQajKNPr/1AfRMaYyetPVZ9FVokLxmNTEIBiWx/SyUJxk2IZT3uR+OQfju4kpFOBNKpRlMkYuJeZSUYxonNU2VJ0iDSxiQdpeuPKmjiNbpOo7whSW9/Fp9ENF2FoYFstlKtlkirVK1WpqvVbCU2iZqIrjWo2ZeyqQakQQ9pPDlrno9ra4ZhDomkkamwd0qnnzPKfCIl54iJzDGjRjpgbIdUM+xcJZDk9mKHlKDGFkhs//eQxEliYmESxko4pg5PxiLxfIGT0Meli36/r02kB9b7La4joVPT2cxAoSzMuXIICUKLYdMV5vJu9TOSY2J/ElvyQxBJUtV3NLZsDNOPVToRmdK0X76teElXvK+8AWnKaB1JWEYNw6Pv5Pq6JX8+73LUOhlBJJ9/1n10GIm5YiJB8va3kHSkY7aLr2YQyOoOhJL69Seu4mZP9IOd2BfQkxBI33+u3BpMItKynPQKRBBooI8LpCXFPedkQ0FuSyR84rhDKjaigFYkk+Yp8ADdEaA7xElpouMjkiBw34go07zBKGMcHzJLxnUw9JidRUcm0fQcVBC73TFJrnC16XFZTnFHI6QNUSA+pO4+Wd7xo5vU2QJp7oVP20SSt/3ULpKrG5GEYeQr8dG/+25W1RVO95mIJF6O8rwEs3hXc6TBFkkHbQY7OHbSPJOXGgoRSewBm3Th3Zi67LgtImkV5N66SOpbRlTccxMuGOWx4KXriyEfUWcm4qRlQvTlpK6+sN+dSPoDgkdaJG0fhyJIRFLSWZtGCyHJIKqJVtz3VHqzPRZEYu/vIkHXEEkJPiYKjzyrvSTn/aFb4vkLW7K5WHzIS1Lrje0hmT67edrnCNdmEpZsYYVPfHVnGKxi9W539wXsQOQmuX+yqAcDSb/6ppK+pA1QOTmT5BUkxsCZ01U5kSZU9XIeZG7p7DwjjOR8ML8MAxUU1ttLmrsGJjzGRtIlZHy7h8SCTOA7UdCBjfaEmKuIpJ3HNCCdVSwWN95jBxmcRR+vVr2kc0NJHwrnO9tEHs+M/OnqSSxXiUl61k36kgQUnqvU4pGEd0IvZrmKEZvEaxgwBGdO6kAktEy3QvI9c7ZIerI5EnYxPc9k1mFdRXk4k7nWDiMxSE5d5S/7zDlMSMt5GGlMemTry3pqt6qqtK5yf+8dGp6KoK6inQ1H6I/xyNOYxDc4JAXWVeKSfOoqM//EIcGRp0zrKt8NMs+cOq/MzkeFiCQ0MZLyoo+n5J1bAklYHXyRkbY6pNIuS95vAWngPWuvZc3D2Cdf7N1vod/vsnKUdCUjeZI4tukRE1uybNf3c3TWxHsd2+wWJXUFkAY9pEQYaSRfT7oUMpTTYAnLVWZMc562TjbNWTo7gzdE9tg8ravsS6dfo5WYQ+yec1ORJIttIeEOuWCk5m4nF5r0cy6qvgkjxbqdHAkj3d7cjan/d+e6eo733WE28lETT9eReKQ9xEg1w0i3IqHMEv1a0l9tJP0LkT3MVWkqA5EAAAAASUVORK5CYII="
      alt=""
    />
    <p class="font-archade font-bold text-retro-gray">LOADING</p>
  </section>
</template>

<style lang="scss" scoped>
#loading {
  background-color: #f67280;

  @apply  flex flex-col justify-center items-center fixed inset-0 z-50 w-screen h-screen;

  p {
    color:aliceblue;
    font-size: 30px;
    margin-top: 22px;
    text-shadow: 6px 4px #222;
    letter-spacing: 8px;
  }
}
</style>
