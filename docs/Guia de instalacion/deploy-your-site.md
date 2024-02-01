---
sidebar_position: 5
---

# Tutorial del Facturador - Docker | Linux | SSL externo

Instalacion del Facturador - Docker | Linux | SSL externo

## Pasos

1. Para realizar la instalación, ejecute el script evitando la instalación del SSL. Le será consultado durante el proceso, y deberá ingresar "n".

2.Finalizada la instalación, diríjase a la ruta de instalación:
```
cd /root/facturadorpro31/
```

3. debe editar el archivo ```.env```
```
nano .env
```

4. dentro del editor ubicar los parámetros y cambiarlos

• Antes:
```
APP_URL=http://${APP_URL_BASE}
FORCE_HTTPS=false
```

• Despues:
```
APP_URL=https://${APP_URL_BASE}
FORCE_HTTPS=true
```

4. una vez finalizado, guarde y salga del editor

5. ejecute los siguientes comandos para eliminar la caché de la aplicación
```
php artisan config:cache
```

6. con eso habrá completado el lado de la herramienta, en ese momento hasta no tener un SSL configurado no podrá acceder a la herramienta

```Importante:``` Recuerde habilitar el puerto 443 para poder tener acceso a la herramienta.
