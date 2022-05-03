import CSVToArray from "./CSVToArray.js";

const bdata = [`,,,,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,notes,mostre tot,progetti tot.,"mostre, eventi, residenze "`,
    `Fondazione Prada,Milano,exhibitions,x,x,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,4,3,8,7,0,1,,69,11,`,
    `PAC,Milano,exhibitions,x,x,0,0,0,1,0,6,0,0,0,0,x,x,x,8,0,0,8,25,2,5,0,x,,59,,`,
    `Bicocca,Milano,exhibitions,x,x,x,x,x,x,x,0,0,0,0,0,2,2,0,0,0,0,0,3,0,0,0,x,,59,,`,
    `MAXXI,Roma,exhibitions,x,x,x,x,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,44,7,0,x,,271,,`,
    `MACRO,Roma,"exhibitions, events, residencies",x,x,x,x,x,x,x,0,0,1,0,0,2,0,3,1,0,0,1,0,0,1,x,x,,,,346`,
    `Palazzo delle Esposizioni,Roma,exhibitions,x,x,2,0,0,x,x,x,x,0,0,0,0,0,0,2,0,0,0,0,0,0,0,x,,192,,`,
    `MADRE,Napoli,exhibitions,x,x,x,x,x,x,x,x,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,x,,97,,`,
    `Fondazione Made in Cloister,Napoli,exhibitions,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,0,0,0,0,0,x,,9,,`,
    `Studio Trisorio,Napoli,exhibitions,x,x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,,126,,`,
    `Fondazione Sandretto,Torino,exhibitions,x,x,1,1,0,5,1,4,0,2,0,3,0,1,1,1,4,2,3,6,1,1,3,1,,147,,`,
    `Fondazione Merz,Torino,exhibitions,x,x,x,x,x,x,x,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,x,,58,,`,
    `GAM - Galleria civica,Torino,exhibitions,x,x,0,1,1,0,0,1,0,0,0,1,2,0,0,0,0,0,0,0,0,0,0,x,,282,,`,
    `Museo Novecento,Firenze,exhibitions,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,0,0,0,0,0,1,x,,70,,`,
    `Palazzo Strozzi,Firenze,exhibitions,x,x,x,x,x,x,x,x,x,0,1,0,0,0,0,0,0,2,0,0,0,0,0,x,,66,,`,
    `Villa Romana / fellows,Firenze,fellows/residencies,x,x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,1,x,,89,,`,
    `Villa romana / artisti ospiti,Firenze,guest artists,x,x,x,x,x,x,x,x,x,0,0,0,0,0,0,0,0,0,0,0,5,0,0,x,,50,,`,
    `MAD Murate Art,Firenze,xxxx,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,0,0,0,9,x,2,9,x,I would exclude because of the unclear infos,x,,`,
    `Eduardo Secci,Firenze,exhibitions,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,0,0,0,0,0,0,,33,,`,
    `SRISA Gallery,Firenze,exhibitions,x,x,x,x,x,x,x,x,x,x,x,1,0,0,2,1,1,0,0,0,3,5,3,x,,71,,`,
    `BASE,Firenze,exhibitions,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,,72,,`,]


const data = [
    `istituzione,città,tipo,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,notes,mostre,progetti,"mostre, eventi, residenze "`,
    `Fondazione Prada,Milano,"exhibitions, projects",x,x,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,4,3,8,7,0,1,,69,11,`,
    `PAC,Milano,exhibitions,x,x,0,0,0,1,0,6,0,0,0,0,x,x,x,8,0,0,8,25,2,5,0,x,,59,,`,
    `Bicocca,Milano,exhibitions,x,x,x,x,x,x,x,0,0,0,0,0,2,2,0,0,0,0,0,3,0,0,0,x,,59,,`,
    `MAXXI,Roma,exhibitions,x,x,x,x,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,44,7,0,x,,271,,`,
    `MACRO,Roma,"exhibitions, events, residencies",x,x,x,x,x,x,x,0,0,1,0,0,2,0,3,1,0,0,1,0,0,1,x,x,,,,346`,
    `Palazzo delle Esposizioni,Roma,exhibitions,x,x,2,0,0,x,x,x,x,0,0,0,0,0,0,2,0,0,0,0,0,0,0,x,,192,,`,
    `MADRE,Napoli,exhibitions,x,x,x,x,x,x,x,x,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,x,,97,,`,
    `Fondazione Made in Cloister,Napoli,exhibitions,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,0,0,0,0,0,x,,9,,`,
    `Studio Trisorio,Napoli,exhibitions,x,x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,,126,,`,
    `Fondazione Sandretto,Torino,exhibitions,x,x,1,1,0,5,1,4,0,2,0,3,0,1,1,1,4,2,3,6,1,1,3,1,,147,,`,
    `Fondazione Merz,Torino,exhibitions,x,x,x,x,x,x,x,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,x,,58,,`,
    `GAM - Galleria civica,Torino,exhibitions,x,x,0,1,1,0,0,1,0,0,0,1,2,0,0,0,0,0,0,0,0,0,0,x,,282,,`,
    `Museo Novecento,Firenze,exhibitions,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,0,0,0,0,0,1,x,,70,,`,
    `Palazzo Strozzi,Firenze,exhibitions,x,x,x,x,x,x,x,x,x,0,1,0,0,0,0,0,0,2,0,0,0,0,0,x,,66,,`,
    // `Villa Romana total,Firenze,"fellows, residencies, guest artists",x,x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,1,x,,,,139`,
    `Villa Romana / fellows,Firenze,fellows/residencies,x,x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,1,x,,89,,`,
    `Villa romana / artisti ospiti,Firenze,guest artists,x,x,x,x,x,x,x,x,x,0,0,0,0,0,0,0,0,0,0,0,5,0,0,x,,50,,`,
    `MAD Murate Art,Firenze,xxxx,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,0,0,0,9,x,2,9,x,I would exclude because of the unclear infos,x,,`,
    `Eduardo Secci,Firenze,exhibitions,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,0,0,0,0,0,0,,33,,`,
    `SRISA Gallery,Firenze,exhibitions,x,x,x,x,x,x,x,x,x,x,x,1,0,0,2,1,1,0,0,0,3,5,3,x,,71,,`,
    `BASE,Firenze,exhibitions,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,,72,,`,
]

export default function mapArr() {
    let array = data.map(el => CSVToArray(el)).map(el => el[0]).map(((line, lineIndex) => line.map((entry, index) => lineIndex !== 0 ? (Number(entry) || (entry === '0' ? 0 : entry)) : entry)));
    array.shift()
    // console.log('ARRAY:', array)
    let mapped = new Map();
    console.log(mapped)

    for (let line of array) {
        const yearsValues = line.filter((el, i) => i >= 3 && i < 27);
        // console.log(line[0], yearsValues)
        mapped.set(line[0], {
            city: line[1],
            kindOfEvents: line[2],
            totalNumberOfExhibitions: sumMixedValuesArray([line[28], line[29], line[30], line[31]]),
            yearsValues,
            AADArtistsTotal: sumMixedValuesArray(yearsValues),
            yearsWithAADAmount: yearsValues.filter(val => val > 0).length,
            yearsWithDataAmount: yearsValues.filter(e => typeof e === 'number').length
        })
    }

    function sumMixedValuesArray(arr) {
        return arr.map(e => (typeof e === 'number') ? e : 0).reduce((acc, val) => acc + val)
    }

    return mapped;
}