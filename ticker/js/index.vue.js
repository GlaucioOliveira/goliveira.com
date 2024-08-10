var app = new Vue({
    el: '#app',
    data: {
      decks: [{start: 0, end: 3}, {start: 3, end: 6}],
      ticker: [
        {name: "Bitcoin (BTC)", data: [] },
        {name: "Etherum (ETH)", data: [] },
        {name: "Ripple (XRP)", data: [] },
        {name: "Bitcoin Cash (BCH)", data: [] },
        {name: "Litecoin (LCH)", data: [] },
      ],
      coinNames: [{"name" : "Ripple (XRP)"}, {"name" : "Bitcoin (BTC)"}]      
    },
  
    mounted () {
      axios.get("https://www.mercadobitcoin.net/api/BTC/ticker/")
      .then(response => (this.ticker[0].data = response.data.ticker));   

      axios.get("https://www.mercadobitcoin.net/api/ETH/ticker/")
           .then(response => (this.ticker[1].data = response.data.ticker));
        
      axios.get("https://www.mercadobitcoin.net/api/XRP/ticker/")
           .then(response => (this.ticker[2].data = response.data.ticker));   
        
      axios.get("https://www.mercadobitcoin.net/api/BCH/ticker/")
           .then(response => (this.ticker[3].data = response.data.ticker));              

           axios.get("https://www.mercadobitcoin.net/api/LTC/ticker/")
           .then(response => (this.ticker[4].data = response.data.ticker));   

    }

  })