import Buyable from '../domain/Buyable';


export default class Cart {
    private _items: Buyable[] | FilmInterface[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    };

    get items(): Buyable[] | FilmInterface[] {
        return [...this._items]; 
    };

    totalAmount(): number {
        let total: number = 0
        for (let item of this._items) {
            total += item.price
        }
        return total
    };

    AmountWithDiscount(discount: number): number {
        let total: number = 0
        for (let item of this._items) {
            total += item.price * ((100 - discount) / 100)
        }
        return total
    }

    deleteObject(id: number): void {
        const index = this._items.findIndex(item => item.id == id)
        this._items.splice(index, 1)
    }
}