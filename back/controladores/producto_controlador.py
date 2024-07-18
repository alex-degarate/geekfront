#Flask
# del modulo flask importar la clase Flask y los métodos jsonify,request
from flask import  jsonify,request

from app import app, db,ma
from modelos.producto_modelo import Producto

class ProductoSchema(ma.Schema):
    class Meta:
        fields=('id','code','nombre','categoria','tipo','precio','stock','imagen','ultmod')

# El objeto producto_schema es para traer un producto
producto_schema = ProductoSchema()

# El objeto productos_schema es para traer multiples registros de producto
productos_schema = ProductoSchema(many=True)

# crea los endpoint o rutas (json)
@app.route('/productos',methods=['GET'])
def get_Productos():
    all_productos=Producto.query.all()           # el metodo query.all() lo hereda de db.Model
    result=productos_schema.dump(all_productos)  # el metodo dump() lo hereda de ma.schema y
                                                 # trae todos los registros de la tabla
    return jsonify(result)                       # retorna un JSON de todos los registros de la tabla


@app.route('/productos/<id>',methods=['GET'])
def get_producto(id):
    producto=Producto.query.get(id)
    return producto_schema.jsonify(producto)   # retorna el JSON de un producto recibido como parametro


@app.route('/productos/<id>',methods=['DELETE'])
def delete_producto(id):
    producto=Producto.query.get(id)
    db.session.delete(producto)
    db.session.commit()
    return producto_schema.jsonify(producto)   # me devuelve un json con el registro eliminado


@app.route('/productos', methods=['POST']) # crea ruta o endpoint
def create_producto():
    #print(request.json)
    # request.json contiene el json que envio el cliente
    code = request.json['code']
    nombre = request.json['nombre']
    categoria= request.json['categoria']
    tipo  = request.json['tipo']
    precio = request.json['precio']
    stock  = request.json['stock']
    imagen = request.json['imagen']
    ultmod = request.json['ultmod']
    new_producto = Producto( code,nombre,categoria, tipo,precio,stock,imagen,ultmod)
    db.session.add(new_producto)
    db.session.commit()
    return producto_schema.jsonify(new_producto)


@app.route('/productos/<id>' ,methods=['PUT'])
def update_producto(id):
    producto = Producto.query.get(id)
    producto.code = request.json['code']
    producto.nombre = request.json['nombre']
    producto.categoria= request.json['categoria']
    producto.tipo   = request.json['tipo']
    producto.precio = request.json['precio']
    producto.stock  = request.json['stock']
    producto.imagen = request.json['imagen']
    producto.ultmod = request.json['ultmod']
    db.session.commit()
    return producto_schema.jsonify(producto)


@app.route('/')
def bienvenida():
    return "Bienvenidos al backend"   # retorna el JSON de un usuario recibido como parametro


