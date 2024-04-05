# Server

This will just be a small server that acts as a data access layer between the ui and the mock json db.  Mainly needed because the navigation/routing pattern doesn't directly match the data structure (as it often doesn't in ecommerce)

should handle the following routes:

|                  | localhost:5124 (react app) | localhost:2222 (mock db)            | server logic                                                                  |
|------------------|----------------------------|-------------------------------------|-------------------------------------------------------------------------------|
| navigation       | /navigation                | localhost:2222/navigation           | Remove the "query" key from all navigation items before returning them        |
| subnavigation    | /navigation/:subnavname    | localhost:2222/navigation           | find the subnav and return only the children (no grandchildren)                |
| search           | /search?q=search           | localhost:2222/products?q=:query    | -                                                                             |
| all products     | /products                  | localhost:2222/products             | -                                                                             |
| specific product  | /products/:product_id      | localhost:2222/products/:product_id | -                                                                             |
| category         | /categories/food           | localhost:2222/products?:query      | Category Query Mapping is defined in the navigation object in the "query" key  |
| filtering | tba | - | | - |
