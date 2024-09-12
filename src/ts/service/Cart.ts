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
        let total: number = this._items.reduce((totalAmount, item) => {
            return totalAmount + item.price
        }, 0)
        return total
    };

    AmountWithDiscount(discount: number): number {
        let total: number = this.totalAmount()
        return (total * ((100 - discount) / 100))
    }

    deleteObject(id: number): void {
        const index = this._items.findIndex(item => item.id == id)
        this._items.splice(index, 1)
    }
}