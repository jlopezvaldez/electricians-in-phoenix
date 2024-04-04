import PocketBase from 'pocketbase'

export const pb = new PocketBase('http://127.0.0.1:8090')

pb.autoCancellation(false);

export async function getElectricians({q = null, limit = 50, page = 1}){
    const options = {
        filter: '',
    }

    if (q) {
        options.filter = `companyName ~ "${q}" || rating ~ "${q}" || city ~ "${q}" || zip ~ "${q}"` ;
    }

    let electricians
    try {
        let result = await pb.collection('electrical_companies').getList(page,limit,options);
        electricians = result.items;
        console.log(electricians);
    } catch (e) {
        console.log(e.response);
    }
    return electricians
}

export async function createElectricians({companyName, href, address, city, zip }){
    let newCompany 

    try{
        newCompany = await pb.collection('electrical_companies').create({
            companyName,
            href,
            address,
            city,
            zip
        })
    }
    catch (e) {
        console.log(e.response)
    }

    return newCompany;
}