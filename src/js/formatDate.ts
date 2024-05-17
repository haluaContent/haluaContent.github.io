export default function (date: string){
    return new Date(date).toLocaleDateString('en-US', {timeZone: "UTC"})
}