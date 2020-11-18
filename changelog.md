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
