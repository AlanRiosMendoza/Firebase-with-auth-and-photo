#  Ionic Firebase Authentication & File Upload 


# Creacion del proyecto Firebase 

## ⏬ Instalacion

Clona el proyecto

```bash
  https://github.com/AlanRiosMendoza/Firebase-with-auth-and-photo.git
```

Posiciónate la carpeta del proyecto

```bash
  cd my-project
```

Instala las dependencias

```bash
  npm install
```

Inicia el servidor

```bash
  ionic serve
```



La aplicación utilizará por defecto el puerto 4200

```bash
  http://localhost:4200/
```

Todo esto es necesario para que pueda funcionar correctamente

##  Variables de Entorno

# Iniciando la integración de su aplicación Ionic y Firebase 


```bash
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```


##  src/main.ts

```bash
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.catch((err) => console.log(err));

defineCustomElements(window);
```

## environments/environment.ts

```bash
export const environment = {
	production: false,
	firebase: {
		apiKey: '',
		authDomain: '',
		projectId: '',
		storageBucket: '',
		messagingSenderId: '',
		appId: ''
	}
};
```
## src/app/app.module.ts 
![{F2BFA909-25E3-4088-BE97-9046A57C2935}](https://github.com/user-attachments/assets/ea47c7aa-eb0f-445e-8f93-fce35b716b24)

## src/app/app-routing.module.ts
![{19C9E41C-E56A-4BB6-AD80-9D1B8D854A93}](https://github.com/user-attachments/assets/e863273c-51bc-4cfe-871a-03e92d27c052)


# Building the Authentication Logic

























