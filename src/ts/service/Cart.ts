import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    getAll(): Buyable[] {
        return [...this._items]; 
    }

    sum(): number {
        return this._items.reduce((acc, prev) => (acc += prev.price), 0);
    }

    sumWithSale(sale: number): number {
        return this._items.reduce((acc, prev) => (acc += prev.price), 0) * (100 - sale) / 100;
    }
    
    deleteItem(delId: number): void {
        const findItem = this._items.findIndex(item => item.id === delId);
        this._items.splice(findItem, 1);
    }
}

