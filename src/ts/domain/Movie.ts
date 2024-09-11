import FilmInterface from './FilmInterface.ts';

export default class Movie implements FilmInterface {
    constructor(
    	readonly name: string,
	    readonly year: number,
	    readonly country: string,
	    readonly slogan?: string,
	    readonly genre: string,
	    readonly duration: number,
    ) { }

    getInfo() {
    	return this
    }
}

