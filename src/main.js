const api = require('./api');


let valorInit = 0;
let cont = 0;
setInterval( async () => {
    const result = await api.depth()
    if(cont == 0) {
        valorInit = mediaPreco(result.bids);
        cont++;
    }

    let = valorAtt = mediaPreco(result.bids);

    console.log("Valor medio compras: ", valorAtt)
    console.log(`Porcentagem valor inicial ${mediaPercent(valorInit, valorAtt)}`)

    // console.log( await api.depth())
}, process.env.CRAWLER_INTERVAL)

function mediaPreco(matriz){
    const nElem = matriz.length;
    let aux =0;
for(let i = 0; i < nElem; i++){
    // console.log("teste")
    // console.log(`Price: ${matriz[i][0]}`)
    aux += Number(matriz[i][0]);
}
    return (aux/nElem);
}

function mediaPercent(valorInit, valorAtt){
    return (((valorAtt/valorInit)*100));
}


// testes
// const query = {
//     bids: [
//     [ '148801.00000000', '0.00383000' ],
//     [ '148800.00000000', '0.00486000' ],
//     [ '148799.00000000', '0.01092000' ],
//     [ '148798.00000000', '0.04978000' ],
//     [ '148796.00000000', '0.00029000' ]
//   ],
//   asks: [
//     [ '148843.00000000', '0.00243000' ],
//     [ '148844.00000000', '0.00386000' ],
//     [ '148845.00000000', '0.17749000' ],
//     [ '148846.00000000', '0.17749000' ],
//     [ '148847.00000000', '0.10042000' ]
//   ]
// }

// console.log(query.bids.length)

// const qtdBids = query.bids.length



// console.log("func ",media(query.bids));

// let aux =0;
// for(let i = 0; i < qtdBids; i++){
//     console.log("teste")
//     console.log(`Price: ${query.bids[i][0]}`)
//     aux += Number(query.bids[i][0]);
// }
// const md =  aux/qtdBids


// console.log(md)