import {Component} from '@angular/core';
import {ProductModel} from '../model/product.model';
import {Repository} from '../model/repository';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  templateUrl: 'productEditor.component.html'
})
export class ProductEditorComponent {
  editing = false;
  product: ProductModel = new ProductModel();

  constructor(private repository: Repository,
              private router: Router,
              activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params['mode'] === 'edit';
    if (this.editing) {
      Object.assign(this.product,
        repository.getProduct(activeRoute.snapshot.params['id']));
    }
  }


  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }
}
