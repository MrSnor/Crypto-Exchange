export const shortenAddress =(address)=>
{
    let shortAddress = address.slice(0, 6) + "..." + address.slice(address.length - 4, address.length);
    return shortAddress;
}