import PocketBase from 'pocketbase'

export const pb = new PocketBase(import.meta.env.POCKETBASE_URL ||
    process.env.POCKETBASE_URL)

pb.autoCancellation(false);

export async function getElectricians({q = '', limit = 50, page = 1}){
    const options = {
        filter: 'live = true',
        sort: '+companyName'
    }

    if (q) {
        options.filter = `live = true && companyName ~ "${q}" || rating ~ "${q}" || city ~ "${q}" || zip ~ "${q}"` ;
    }

    let electricians
    try {
        let result = await pb.collection('electrical_companies').getList(page,limit,options);
        electricians = result.items;
    } catch (e) {
        console.log(e.response);
    }
    return electricians
}

export async function createElectricians({companyName, href, address, city, zip, userEmail }){
    let newCompany 

    try{
        newCompany = await pb.collection('electrical_companies').create({
            companyName,
            href,
            address,
            city,
            zip,
            userEmail
        })
    }
    catch (e) {
        console.log(e.response)
    }

    return newCompany;
}