export default interface FilmInterface {
    readonly id: number,
    readonly name: string,
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly genre: string,
    readonly duration: number,
    readonly price: number
}