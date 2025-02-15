import { hospitals, requestForHostpitals } from "./network";

export async function requestHostpitalMean(
    hospitalPort : string
)
{
    const url = `${process.env.REACT_APP_BASE_URL}:${hospitalPort}/mean/`;

    return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type'  : 'application/json'
        }
    })


    // const body = JSON.stringify({
    //     "items" : items.map(item => ({
    //         item_id   : item.item_id,
    //         item_name : item.item_name,
    //         quantity  : item.quantity,
    //     })),
    //     bill_path   : billPath,
    //     supplier_id : supplierId,
    // })
    
    // return fetch(url, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type'  : 'application/json',
    //       'authorization' : `${token}`
    //     },
    //     body: body,
    // })
}


export async function requestMean()
{
    const meanList = requestForHostpitals(requestHostpitalMean)
    return meanList
}