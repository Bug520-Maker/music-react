export function resetImgSize(imgUrl,size)
{
    return `${imgUrl}?param=${size}y${size}`
}
export function formatPC(count)
{
    if(count<100000)
    {
        return count;
    }
    else if(count>=100000)
    {
        return Math.floor(count/10000)+'万'
    }
}