const app = require("express")();

const urll = process.env.APPID;
//const prt = process.env.PRT

// simple orders-data for testing
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

// a simple suppliers-data for testing
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



// function to find the wanted ports

function findpath(){
if (urll==1111) {return ORDERS};
if (urll==2222){return findOById(1)};
if (urll==3333){return SUPPLIERS};
if (urll==4444){return findSById(1)};

}
app.get("/", (req,res)=>res.send(findpath()));
;

app.listen(urll,()=>console.log("My first microservice-Test--"));
