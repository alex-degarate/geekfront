from app import app, db   #,ma
from sqlalchemy import Column, ForeignKey, Integer, Table
from sqlalchemy.orm import declarative_base, relationship

# defino las tablas
class Producto(db.Model):   # la clase Producto hereda de db.Model

    #define los campos de la tabla
    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.Integer)
    nombre = db.Column(db.String(40))
    categoria= db.Column(db.String(40))
    tipo  = db.Column(db.String(10))
    precio = db.Column(db.Float)
    stock  = db.Column(db.Integer)
    imagen = db.Column(db.String(150))
    ultmod = db.Column(db.String(10))

    def __init__(self, code, nombre, categoria, tipo, precio, stock, imagen, ultmod):
        # crea el constructor de la clase
        # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.code   = code
        self.nombre = nombre
        self.categoria = categoria
        self.tipo   = tipo
        self.precio = precio
        self.stock  = stock
        self.imagen = imagen
        self.ultmod = ultmod


with app.app_context():
    db.create_all()  # aqui crea todas las tablas

#  ************************************************************

