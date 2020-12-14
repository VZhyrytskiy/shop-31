import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router
} from '@angular/router';

import {ProductModel} from '../models/product.model';
import {ProductService} from '../services/product.service';

@Injectable({
  providedIn: 'any'
})
export class ProductResolveGuard implements Resolve<ProductModel> {
  constructor(
    private productService: ProductService,
    private router: Router
  ) {
  }

  resolve(route: ActivatedRouteSnapshot): Promise<ProductModel | null> {
    const fallbackLink = [route.data.admin ? '/admin/products' : '/products-list'];
    if (!route.paramMap.has('productID')) {
      this.router.navigate(fallbackLink);
      return null;
    }

    const id = +route.paramMap.get('productID');

    return this.productService.getProduct(id)
      .then((product: ProductModel) => {
        if (product) {
          return product;
        } else {
          this.router.navigate(fallbackLink);
          return null;
        }
      })
      .catch(() => {
        this.router.navigate(fallbackLink);
        return null;
      });
  }
}
