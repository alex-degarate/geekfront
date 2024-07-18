#Flask
# del modulo flask importar la clase Flask y los métodos jsonify,request
from flask import  jsonify,request

from app import app, db,ma
from modelos.sucursal_modelo import *

class SucursalSchema(ma.Schema):
    class Meta:
        fields=('id','codsuc','nombresuc','distrito','calle','numero','codpost','obser','ultmod')

# El objeto sucursal_schema es para traer un sucursal
sucursal_schema = SucursalSchema()

# El objeto sucursales_schema es para traer multiples registros de sucursal
sucursales_schema = SucursalSchema(many=True)

# crea los endpoint o rutas (json)
@app.route('/sucursales',methods=['GET'])
def get_Sucursales():
    all_sucursales = Sucursal.query.all()          # metodo query.all() lo hereda de db.Model
    result=sucursales_schema.dump(all_sucursales)  # el metodo dump() lo hereda de ma.schema y
                                                   # trae todos los registros de la tabla
    return jsonify(result)                         # retorna JSON de todos los regist de tabla

@app.route('/sucursales/<id>',methods=['GET'])
def get_sucursal(id):
    sucursal = Sucursal.query.get(id)
    return sucursal_schema.jsonify(sucursal)   # retorna JSON de sucursal recibida como param


@app.route('/sucursales/<id>',methods=['DELETE'])
def delete_sucursal(id):
    sucursal = Sucursal.query.get(id)
    db.session.delete(sucursal)
    db.session.commit()
    return sucursal_schema.jsonify(sucursal)   # me devuelve un json con registro eliminado


@app.route('/sucursales', methods=['POST']) # crea ruta o endpoint
def create_sucursal():
    #print(request.json)
    # request.json contiene el json que envio el cliente
    codsuc   = request.json['codsuc']
    nombresuc= request.json['nombresuc']
    distrito = request.json['distrito']
    calle  = request.json['calle']
    numero = request.json['numero']
    codpost= request.json['codpost']
    obser  = request.json['obser']
    ultmod = request.json['ultmod']
    new_sucursal = Sucursal( codsuc, nombresuc, distrito, calle, numero, codpost, obser, ultmod)
    db.session.add(new_sucursal)
    db.session.commit()
    return sucursal_schema.jsonify(new_sucursal)


@app.route('/sucursales/<id>' ,methods=['PUT'])
def update_sucursal(id):
    sucursal = Sucursal.query.get(id)
    sucursal.code = request.json['codsuc']
    sucursal.nombre  = request.json['nombresuc']
    sucursal.distrito= request.json['distrito']
    sucursal.calle   = request.json['calle']
    sucursal.numero  = request.json['numero']
    sucursal.codpost = request.json['codpost']
    sucursal.obser   = request.json['obser']
    sucursal.ultmod  = request.json['ultmod']
    db.session.commit()
    return sucursal_schema.jsonify(sucursal)


@app.route('/')
def bienvenido():
    return "Bienvenidos al backend"   # retorna el JSON de un usuario recibido como parametro



