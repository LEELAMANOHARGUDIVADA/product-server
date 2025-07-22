export const addProductQuery = 'INSERT INTO product(name, description, price, category) VALUES(?,?,?,?)';
export const getAllProductsQuery = 'SELECT * FROM product';
export const getProductByIdQuery = 'SELECT * FROM product WHERE id = ?';
export const updateProductQuery = "UPDATE product SET name=?, description=?, price=?, category=? WHERE id=?";
export const deleteProductQuery = "DELETE FROM product WHERE id=?"