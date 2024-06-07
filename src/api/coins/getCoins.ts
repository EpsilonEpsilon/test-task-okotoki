import config from "../config.ts";


type IResponse = string[]
const getCoins = async ():Promise<IResponse>=>{
    const response = await fetch(`${config.url}/coins`);
    if(response.status !== 200) throw new Error("Unexpected server error");
    return await response.json() as IResponse;
}


export default getCoins;
