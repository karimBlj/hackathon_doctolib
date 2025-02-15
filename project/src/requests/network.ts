export const hospitals = {
    "Auvergne-Rhones-Alpes"     : "8000",
    "Bourgogne-Franche-Comte"   : "8001",
    "Bretagne"                  : "8002",
    "Centre-Val-De-Loire"       : "8003",
    "Corse"                     : "8004",
    "Grand-Est"                 : "8005",
    "Hauts-De-France"           : "8006",
    "Ile-De-France"             : "8007",
    "Normandie"                 : "8008",
    "Nouvelle-Aquitaine"        : "8009",
    "Occitanie"                 : "8010",
    "Pays-De-La-Loire"          : "8011",
    "Provence-Alpes-Cote-D-Azur": "8012",
}


export async function requestForHostpitals(
    callback : any
)
{
    const res = Object.values(hospitals).map(async port => {
        const callRes =  await callback(port);
        return callRes
    })
    console.log(res);
    return Promise.all(res)
}