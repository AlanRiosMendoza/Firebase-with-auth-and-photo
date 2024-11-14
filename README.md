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

## src/app/services/auth.service.ts
![{B55C56F9-A616-447B-851C-056F5CFC4AD8}](https://github.com/user-attachments/assets/373a539d-d174-4cf2-a10e-abb4f877dd5f)

## src/app/login/login.module.ts
![{EA9EB15F-81B1-4348-B358-22A2A76EE53D}](https://github.com/user-attachments/assets/c500be36-5362-4b44-8347-52fe1d44b367)

## src/app/login/login.page.ts
![{9CFA5AE6-F944-462D-BFF9-A3042921B73A}](https://github.com/user-attachments/assets/c9205c21-caae-4328-a88c-d6271c3481b5)
![{F750A0F5-14FC-40C1-BD93-A3C4D6467176}](https://github.com/user-attachments/assets/3bb42de5-e683-4058-b2fd-626867d16236)

## src/app/login/login.page.html
![{79049D4B-78B5-46C4-9FDD-D0D52CBB7AF4}](https://github.com/user-attachments/assets/358f1da1-a288-443b-8902-3607b3924c87)

# Authentication 
![{76FC5C39-CC34-4DE5-83DD-B531F1F2DE32}](https://github.com/user-attachments/assets/bcdf85c7-cdd1-45e8-bcba-c5d22f890860)


#Uploading image files to Firebase with Capacitor

## src/app/services/avatar.service.ts
![{74DCF022-A292-4B60-866A-BDF406F89CF1}](https://github.com/user-attachments/assets/59bfd262-0155-447c-9f04-2f3b3a3af4d6)

## src/app/home/home.page.ts
![{F5821C10-650B-47B6-B398-8A2E8DE8F584}](https://github.com/user-attachments/assets/d063e11b-d63b-4c9a-8cb6-2a5bfdfa77a6)
![{90D51A42-E16B-4ADB-B984-4F1D08AADBDF}](https://github.com/user-attachments/assets/5b3940eb-40a2-456b-b8ba-8a46613f56f5)

## src/app/home/home.page.html
![{E3BE499F-A8F4-46E3-87EC-570736902428}](https://github.com/user-attachments/assets/135cb559-e806-487a-8d43-70de0061b1a6)

## src/app/home/home.page.scss
![{0A155946-195D-4E57-8778-DD565A7BAA9A}](https://github.com/user-attachments/assets/35bc6f13-8f4d-45fe-9109-55ed72870b01)


## Android Changes

```bash
  ionic build

ionic cap add android
```

## android/app/src/main/AndroidManifest.xml











