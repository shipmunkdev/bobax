from fastapi import FastAPI

app = FastAPI()

// just a sample for now
boba = {
    'id': 'bobax-4',
    'name': 'Matcha Latte',
    'description':
      'Our organic premium-grade matcha from Tea People layered over your choice of milk and sweetener.',
    'price': 5.75,
    'imageLink':
      'https://boba-guys.square.site/uploads/1/2/6/1/126110068/s634804415629712800_p784_i2_w1600.jpeg?dpr=2',
    'options': {
      'milk': { 'name': 'Whole Milk' },
      'toppings': [{ 'name': 'Boba', 'price': 0.5 }],
    },
  }

//get route
@app.get("/boba")
async def getBoba():
    return boba
