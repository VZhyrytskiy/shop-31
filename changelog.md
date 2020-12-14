### Task 1. Introduction
1. Создала компонент `FirstComponent`
2. Создала компонент `ProductComponent`
3. Создала сервис `ProductService`
4. Создала компонент `ProductListComponent`
5. Создала компонент `CartListComponent`
6. Создала сервис `CartService`
7. Добавила вывод итоговой суммы товаров корзины в компоненте `CartListComponent`
8. Добавила фильтр на товары с флагом `isAvailable=false` в компоненте `ProductListComponent`

### Task 2. Components
1. Разбила приложение на модули
2. `ProductComponent` сделала презентационным компонентом для `ProductListComponent`
3. Реализовала возможность добавить товар в корзину, если он доступен
4. Создала компонент `СartItemComponent`, который является презентационным для `CartListComponent`
5. В `AppComponent` добавила шаблонную переменную `#appTitle`
6. Добавила директиву `HighlightDirective`
7. Товары в корзине группируются по имени

### Task 3. Services and DI
1. Модифицировала сервис `CartService` согласно требованиям
2. Добавила сервис `LocalStorageService`, добавила его использование в `FirstComponent`
3. Добавила сервис `ConfigOptionsService`, добавила его использование в `FirstComponent`
4. Добавила сервис `ConstantsService`, добавила его использование в `FirstComponent`
5. Добавила сервис `GeneratorService`, добавила его использование в `FirstComponent`
6. Создала директиву `GoCrazyDirective`, добавила ее использование в шаблоне `ProductComponent`

### Task 4. Pipes
1. В шаблон компонента `ProductComponent` добавила пайпы `currency` для форматирования цены и `uppercase` для форматирования категории
2. В шаблон компонента `CartItemComponent` добавила пайп `currency` для форматирования цены
3. `ProductListComponent` добавила пайп `async`, а метод `getProducts()` сервиса `ProductService` теперь возвращает промис.
4. Добавила пайп `OrderByPipe`, добавила его использование в шаблоне и в коде компонента `CartListComponent`
5. Добавила экспорт `CommonModule` и `FormsModule` из `SharedModule`, убрала их из импорта других модулей

### Task 5. Routing
1. Реализовала роут списка товаров - `/products-list`, который является также стартовой страницей приложения
2. Реализовала роут карточки товара - `/product/:productID`
3. Добавила `resolve` guard для роута `/product/:productID`
4. Реализовала роут корзины - `/cart`
5. Реализовала роут формирования заказа - `/order`
6. Реализовала роут админки - `/admin`
7. Добавила гард `canActivate` для `/admin` + `AuthService` + `LoginComponent`
8. Добавила гард `canLoad` для `/admin`  
9. Реализовала роут списка товаров в админке - `/admin/products`
10. Реализовала роут добавления товара - `/admin/product/add`
11. Реализовала роут редактирования товара - `/admin/product/edit:productID`
12. Добавила `resolve` guard для роута `/admin/product/edit:productID` (переиспользование гарда из пункта 3)
13. Реализовала роут просмотра списка заказов - `/admin/orders`
14. Работа с `localStorage` добавлена для `OrdersService` (храние списка заказок) и `CartService` (хранение списка товаров корзины)
