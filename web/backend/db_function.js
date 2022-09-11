const sqlite3 = require('sqlite3').verbose()
let sql;
let myreq = false;
let empty = false;


const dinoPricingDB = {
    dinoPricingTableName: ["stores","product_group","products","variants"],
    db: null,
    ready: null,
  
    create_pg: async function ({
        id,
        product_group_name,
        price_diff,
        store_id,
        updated_at
    }) {
      await this.ready;
  
      const query = `
        INSERT INTO ${dinoPricingTableName[1]}
        (id,product_group_name,price_diff,store_id,updated_at) VALUES (?,?,?,?,?)
        RETURNING id;
      `;
  
      const rawResults = await this.__query(query, [
        id,
        product_group_name,
        price_diff,
        store_id,
        updated_at
      ]);
  
      return rawResults[0].id;
    },
    create_product: async function ({
        id,
        product_group_name,
        price_diff,
        store_id,
        updated_at
    }) {
      await this.ready;
  
      const query = `
        INSERT INTO ${dinoPricingTableName[2]}
        (id,status,title,updated_at,product_group_id) VALUES (?,?,?,?,?)
        RETURNING id;
      `;
  
      const rawResults = await this.__query(query, [
        id,
        status,
        title,
        updated_at,
        product_group_id
      ]);
  
      return rawResults[0].id;
    },
  
    init: async function () {

        /* Initializes the connection to the database */
        this.db = this.db ?? new sqlite3.Database('../database/test.db' , sqlite3.OPEN_READWRITE , (err) => {if (err) return console.log(err.message);})
    
        const hasDinoPricingTable = await this.__hasDinoPricingTable();
    
        if (hasDinoPricingTable) {
          this.ready = Promise.resolve();
    
          /* Create the store table if it hasn't been created */
        } else {
          const query = `
            CREATE TABLE ${this.dinoPricingTableName} (id INTEGER PRIMARY KEY,
                 store_name NOT NULL, 
                 url NOT NULL , 
                 plan NOT NULL )
          `;
    
          /* Tell the various CRUD methods that they can execute */
          this.ready = this.__query(query);
        }
      },
    
      /* Perform a query on the database. Used by the various CRUD methods. */
      __query: function (sql, params = []) {
        return new Promise((resolve, reject) => {
          this.db.all(sql, params, (err, result) => {
            if (err) {
              reject(err);
              return;
            }
            resolve(result);
          });
        });
      },
};    
  





// create tables


if(empty){
sql = 'CREATE TABLE stores (id INTEGER PRIMARY KEY, store_name NOT NULL, url NOT NULL , plan NOT NULL )';
db.run(sql)

sql = 'CREATE TABLE product_group (id INTEGER PRIMARY KEY, product_group_name NOT NULL,updated_at NOT NULL, price_diff NOT NULL,number_of_products, store_id NOT NULL , FOREIGN KEY (store_id) REFERENCES stores(id))';
db.run(sql)

sql = 'CREATE TABLE products (id INTEGER PRIMARY KEY, status NOT NULL, title NOT NULL,updated_at NOT NULL,product_group_id NOT NULL, FOREIGN KEY (product_group_id) REFERENCES product_group(id) )';
db.run(sql)

sql = 'CREATE TABLE variants (id INTEGER PRIMARY KEY, available NOT NULL,compare_at_price,updated_at NOT NULL,sku ,price ,product_id, title NOT NULL , FOREIGN KEY (product_id) REFERENCES products(id))';
db.run(sql)
}
//insert data to table (stores)
if (myreq){

    sql =  'INSERT INTO stores(id,store_name,url,plan) VALUES (?,?,?,?)'
    db.run(sql , [1,1,1,1],(err) => {if (err) return console.log(err.message) });

    sql =  'INSERT INTO product_group(id,product_group_name,price_diff,store_id,updated_at) VALUES (?,?,?,?,?)'
    db.run(sql , [1,'?','?','?',1],(err) => {if (err) return console.log(err.message) });

    sql =  'INSERT INTO products(id,status,title,updated_at,product_group_id) VALUES (?,?,?,?,?)'
    db.run(sql , [1,'?','?','?',1],(err) => {if (err) return console.log(err.message) });

    sql =  'INSERT INTO variants(id,available,compare_at_price,updated_at,sku,price,product_id,title) VALUES (?,?,?,?,?,?,?,?)'
    db.run(sql , [1,'?','?','?','?','?',1,'?'],(err) => {if (err) return console.log(err.message) });
}
// drop table 

// db.run('DROP TABLE stores')


module.exports = dinoPricingDB