import { Observable, of } from "rxjs";
import { CartService } from "src/app/pages/cart/cart.service";
import { Response } from "src/app/shared/models/response";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { Product } from "../../product.model";
import { StoreService } from "../../store.service";
import { StoreComponent } from "./store.component";

describe('StoreComponent', () => {
  let fixture: StoreComponent;
  let storeServiceMock: StoreService;
  let localStorageServiceMock = new LocalStorageService();
  let cartServiceMock = new CartService(localStorageServiceMock);

  beforeEach(() => {
    storeServiceMock = {
      getAllProducts(): Observable<Response<Product[]>> {
        return of({
          data: [
            { product_id: Math.random().toString(), name: 'Rayon a-line Dress', cents: 90, fraction: 13.45,  image: 'assets/images/store/1.jpg', quantity: 1, shiping: 'Frete grátis'},
            { product_id: Math.random().toString(), name: 'Analog Black men Wath', cents: 90, fraction: 13.45, image: 'assets/images/store/2.jpg', quantity: 1, shiping: 'Frete grátis'},
            { product_id: Math.random().toString(), name: 'Men\'s Regular Fit Shirts', cents: 90, fraction: 13.45, image: 'assets/images/store/3.jpg', quantity: 1, shiping: 'Frete grátis'},
          ]
        })
      }
    }

    fixture = new StoreComponent(storeServiceMock, cartServiceMock);
  });

  it('should create the app', () => {
    expect(fixture).toBeTruthy();
  })  

  it('should call load', () => {

    const loadSpy = jest.spyOn(fixture, 'load');

    fixture.ngOnInit();

    expect(loadSpy).toBeCalled();
  })

  it('should return response after load called', () => {
    fixture.load()

    expect(fixture.products).toHaveLength(3);
  })

  it('should return response after add item to cart', () => {
    const product: Product = { 
      product_id: Math.random().toString(), 
      name: 'Rayon a-line Dress', 
      cents: 90, 
      fraction: 13.45,  
      image: 'assets/images/store/1.jpg', 
      quantity: 1, 
      shiping: 'Frete grátis'
    };
    
    fixture.addToCart(product);

  })
})