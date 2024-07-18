
from app import app, db   #,ma
#from sqlalchemy import Column, ForeignKey, Integer, Table

# defino las tablas
class Usuario(db.Model):   # la clase Usuario hereda de db.Model
    #define los campos de la tabla
    id = db.Column(db.Integer, primary_key=True)
    username= db.Column(db.String(35))
    clave  = db.Column(db.String(12))
    rol    = db.Column(db.Integer)

    def __init__(self, username, clave, rol):   #crea el  constructor de la clase
        # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.username = username
        self.clave  = clave
        self.rol  = rol

with app.app_context():
    db.create_all()  # aqui crea todas las tablas

#  ************************************************************

