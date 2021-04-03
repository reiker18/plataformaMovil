# se usa la ultima version de node
FROM node:alpine3.10 

# directorio desde el cual se va a trabajar
WORKDIR /microservices_MongoAtlas_BWR

# el comando COPY toma 2 argumentos 
# 1 - el archivo local package.json
# 2 - el lugar donde se quiere copiar el archivo dentro del contenedor
COPY package*.json ./

# para instalar las dependencias dentro de la imagen
RUN npm install

# se copia el codgo local a la carpeta de trabajo actual de la imagen
# usar el archivo ".dockerignore"
COPY . .

# creo variable de entorno para el puerto que va a usar la app
ENV PORT=3003

# expongo un puerto mediente el cual se va a acceder a contenedor
EXPOSE 3003

# solo hay un comando 'CMD' por cada archivo 'dockerfile'
# le dice al contenedor como ejecutar la aplicacion
# se usa un arreglo de strings ya que se conoce como un exec form, es cun
# conjunto de instrucciones para crear la imagen y para no iniciar 
# una sesion en SHELL
CMD [ "npm", "start" ]

