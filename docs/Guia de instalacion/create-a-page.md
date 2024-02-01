---
sidebar_position: 1
---

# Tutorial para la instalcion de script

Manual para la instalacion

## Descripcion

Hemos elaborado un script para uso en instancias Linux con Ubuntu 18 o superior, este es un archivo que actualiza el sistema, instala las herramientas, sus dependencias y realiza todas las configuraciones previas, dejando el aplicativo listo para probar en menos de 20 minutos (siempre y cuando el dominio ya esté configurado hacia la instancia), su ejecución es muy sencilla.

### Requisitos previos

1. Tener acceso a su servidor, vps, máquina virtual o local via SSH, en las instalaciones que realizamos para AWS o Google Cloud, hacemos entrega del usuario, la IP del servidor y la clave ssh que puede ser un archivo .ppk o .pem, recuerde almacenarlas en su equipo local.

2. Tener instalado una versión de ssh en su máquina para conectarse de manera remota, puede utilizar putty, filezilla o una consola terminal. para mayor información sobre el acceso SSH visite los siguientes manuales: 
guía para acceder con Putty (gestión de servidor)
guía para acceder con Winscp (gestión de archivos con aplicación de escritorio)

3. Si es posible configurar su dominio apuntando a su instancia para que al finalizar la instalación se encuentre disponible el aplicativo. Edite los récords A y CNAME donde A debe contener su IP y CNAME el valor * (asterisco) para que se tomen los subdominios registrados por la herramienta.

![Docusaurus logo](/img/img1.png)

4. En caso de contar con servicios instalados en su instancia como mysql, apache o nginx, debe detenerlos, ya que estos ocupan los puertos que pasarán a usar el aplicativo con los contenedores de Docker.

# Pasos

1. Acceder a su instancia vía SSH.

2. Loguearse como super usuario 
ejecute `sudo su`

3. Clonar el snippet de gitlab que contiene el script
```
git clone https://gitlab.com/snippets/2079063.git script
```
4. Ingrese a la carpeta clonada:
```
cd script
```

5. Dar permisos de ejecución al script
```
chmod +x install.sh
```

6. El comando a utilizar para iniciar el despliegue requiere de un parámetro principalmente:
```
./install.sh [dominio]
```

7. Una vez ejecutado el comando iniciará el proceso de actualización del sistema, en el proceso se le solicitará:

      • el usuario y contraseña de GitLab, para que se pueda descargar el proyecto en su instancia

      • si desea instalar SSL gratuito, tenga en cuenta que este debe ser actualizado cada 90 días, el mensaje será el siguiente:
```
instalar con SSL? (debe tener acceso al panel de su dominio para 
editar/agregar records TXT). si[s] no[n] 
```

      • deberá contestar con “s” o “n” para continuar

-si selecciona SÍ, deberá contestar las siguientes preguntas con “y”, son 2 en total, seguidamente se le ofrecerá un código que debe añadir en un récord tipo TXT en su dominio quedando como _acme-challenge.example.com o simplemente _acme-challenge dependerá de su proveedor.

![Docusaurus logo](/img/img2.png)

      • para continuar presione enter, luego deberá repetir las acciones para añadir un segundo código y habrá finalizado la configuración, si el proceso es exitoso la ejecución del script continuará.

      • si desea obtener y gestionar actualizaciones automáticas, deberá disponer de su sesión de gitlab al momento
```
configurar clave SSH para actualización automática? (requiere acceso a https://gitlab.com/profile/keys). si[s] no[n]
```

      • deberá contestar con “s” o “n” para continuar

      • de seleccionar SÍ, al final del despliegue se le dará un extracto de texto que debe añadir a su configuración de gitlab

![Docusaurus logo](/img/img3.png)

8. Finalizado el script y dependiendo de sus selecciones anteriores, se le entregará varios datos que debe guardar, como:

• usuario administrador

• contraseña para usuario administrador

• url del proyecto

• ubicación del proyecto dentro del servidor

• clave ssh para añadir a gitlab (obligatorio para quienes seleccionan la instalación de SSH)


