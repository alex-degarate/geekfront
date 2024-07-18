from app import app, db   #,ma
from sqlalchemy import Column, ForeignKey, Integer, Table
from sqlalchemy.orm import declarative_base, relationship

# defino las tablas
class Sucursal(db.Model):   # la clase Sucursal hereda de db.Model

    #define los campos de la tabla
    id = db.Column(db.Integer, primary_key=True)
    codsuc = db.Column(db.Integer, nullable=False)
    nombresuc = db.Column(db.String(60), nullable=False)
    distrito  = db.Column(db.Integer)
    calle  = db.Column(db.String(80))
    numero = db.Column(db.Integer)
    codpost= db.Column(db.String(10))
    obser  = db.Column(db.String(150))
    ultmod = db.Column(db.String(10))

    def __init__(self, codsuc, nombresuc, distrito, calle, numero, codpost, obser, ultmod):

        # crea el constructor de la clase
        # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.codsuc   = codsuc
        self.nombresuc= nombresuc
        self.distrito = distrito
        self.calle  = calle
        self.numero = numero
        self.codpost= codpost
        self.obser  = obser
        self.ultmod = ultmod


with app.app_context():
    db.create_all()  # aqui crea todas las tablas

#  ************************************************************


