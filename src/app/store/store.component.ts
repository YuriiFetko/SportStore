import {Component, OnInit} from '@angular/core';
import {Repository} from '../model/repository';
import {ProductModel} from '../model/product.model';
import {CartModel} from '../model/cart.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.sass']
})
export class StoreComponent implements OnInit {

  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: Repository,
              private cart: CartModel,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  get products(): ProductModel[] {
    const pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0).map((x, i) => i + 1);
  }

  addProductToCart(product: ProductModel) {
    this.cart.addline(product);
    this.router.navigateByUrl('/cart');
  }

}
