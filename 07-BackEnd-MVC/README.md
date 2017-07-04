#Ejemplo de uso del Framework Sailsjs

## Instalación
Comando para instalar salis:
```
> sudo npm install sails -g
```
[Documentación de instalación](http://sailsjs.com/get-started)

## Crear nueva aplicación
```
> sails new aplicacion
```

"aplicacion" es el nombre de la carpeta que va a contener los archivos de sails

## Levantar el servidor
Levantar el servidor
```
> sails lift
```
Levantar el servidor en otro puerto
```
> sails lift --port 8080
```
Comando para crear un controlador
```
> sails generate controller nombre_controller
```

Comando para crear modelos
```
> sails generate model nombre_modelo
```