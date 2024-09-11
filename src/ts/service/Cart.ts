import Buyable from '../domain/Buyable';


export default class Cart {
    private _items: Buyable[] | FilmInterface[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] | FilmInterface[] {
        return [...this._items]; 
    }
}