const app = require("express")();



// orders
let ORDERS= {
  'order': {
    'o1': {
      'id': '1',
       'ordertype':'pc',
       'price':'3500',
      'name': 'Brandon',
      'DOB': '05/04/2000'
    },

    'o2': {
      'id': '2',
      'ordertype':'watch',
      'price':'300',
      'name': 'Jefferson',
      'DOB': '05/19/1997'
    },

    'o3': {
      'id': '3',
      'ordertype':'xbox',
      'price':'800',
      'name': 'Brandon',
      'DOB': '05/04/1995'
    },

    'o4': {
      'id': '4',
      'ordertype':'phone',
      'price':'900',
      'name': 'Brandon',
      'DOB': '05/04/1992'
    }
  }
}

// suppliers
let SUPPLIERS= {
  'supplier': {
    's1': {
      'id': '1',
      'company': 'microsoft',
      'role': 'system-admin'
    },
    's2': {
      'id': '2',
     'company': 'amazon',
      'role': 'developer'
    },

    's3': {
      'id': '3',
      'company': 'IBM',
      'role': 'network engineering'
    },

    's4': {
      'id': '4',
      'company': 'oracle',
      'role': 'cloud developer'
    },

    's5': {
      'id': '5',
      'name': 'google',
      'role': 'consultant'
    }
  }
}

function findOById(id){
  return Object.entries(ORDERS.order).reduce((a, [user, userData]) => {
    userData.id == id ? a[user] = userData : '';
    return a;
  }, {});
}

function findSById(id){
  return Object.entries(SUPPLIERS.supplier).reduce((a, [user, userData]) => {
    userData.id == id ? a[user] = userData : '';
    return a;
  }, {});
}




app.get("/orders/1", (req,res)=>res.send(findOById(1)));
app.get("/orders", (req,res)=>res.send(ORDERS));

app.get("/suppliers", (req,res)=>res.send(suppliers));
app.get("/suppliers/1", (req,res)=>res.send(findSById(1)));

app.listen(1111,()=>console.log("My first microservice app "));
