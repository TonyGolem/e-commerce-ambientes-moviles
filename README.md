# 🛍️ E-Commerce — Ionic + Angular

Proyecto de e-commerce desarrollado con **Ionic 8** y **Angular 20**, como parte de la materia de Programación Móvil.

---

## ✅ Requisitos previos

Antes de levantar el proyecto deben tener instalado en el PC:

| Herramienta | Versión recomendada | Descarga |
|-------------|-------------------|---------|
| **Node.js** | v18 o superior | https://nodejs.org |
| **npm** | viene con Node.js | — |
| **Ionic CLI** | última versión | ver paso abajo |

> 💡 Para verificar si ya tienen Node instalado, abran una terminal y ejecuten:
> ```bash
> node -v
> npm -v
> ```
> Si aparecen números de versión, ya está instalado ✔️

### Instalar Ionic CLI (una sola vez)
```bash
npm install -g @ionic/cli
```

---

## 📦 Opción 1 — Descargaron el proyecto como .ZIP

### Paso 1 — Descomprimir el archivo

Descompriman el `.zip` en la carpeta donde quieran guardar el proyecto, por ejemplo:
```
C:\Users\SuNombre\Documentos\e-commerce
```

### Paso 2 — Abrir la carpeta en VS Code

Abran **Visual Studio Code**, vayan a `Archivo → Abrir carpeta` y seleccionen la carpeta descomprimida.

### Paso 3 — Abrir la terminal integrada

En VS Code usen el atajo `Ctrl + J` (o `Ctrl + ñ`) para abrir la terminal.

Confirmen que están dentro de la carpeta del proyecto. Deben ver algo así:
```
PS C:\Users\SuNombre\Documentos\e-commerce>
```

> ⚠️ **Importante:** deben estar DENTRO de la carpeta del proyecto, no afuera. Si la terminal muestra otra ruta, naveguen con:
> ```bash
> cd ruta/de/su/proyecto/e-commerce
> ```

### Paso 4 — Instalar las dependencias

```bash
npm install
```

Esto puede tardar unos minutos ☕. Cuando termine van a ver que se creó la carpeta `node_modules/`.

### Paso 5 — Levantar el servidor

```bash
ionic serve
```

El proyecto se va a abrir automáticamente en el navegador en `http://localhost:8100` 🚀

---

## 🐙 Opción 2 — Clonar el repositorio desde GitHub

### Paso 1 — Clonar el repositorio

Abran una terminal en la carpeta donde quieran guardar el proyecto y ejecuten:

```bash
git clone https://github.com/usuario/e-commerce.git
```

> 💡 Reemplacen la URL con la del repositorio real que les compartieron.

### Paso 2 — Entrar a la carpeta del proyecto

```bash
cd e-commerce
```

### Paso 3 — Instalar las dependencias

```bash
npm install
```

> ⚠️ El repositorio **no incluye** la carpeta `node_modules/` (es normal, pesa demasiado). Por eso siempre hay que ejecutar `npm install` después de clonar.

### Paso 4 — Levantar el servidor

```bash
ionic serve
```

El proyecto se va a abrir en `http://localhost:8100` 🚀

---

## 🗂️ Estructura del proyecto

```
src/
└── app/
    ├── home/                        → única página de la app
    ├── components/
    │   ├── product-list/            → lista de productos con búsqueda
    │   └── add-product/             → formulario para agregar productos (modal)
    ├── interfaces/
    │   └── info-usuario.interfaces.ts  → tipado de los productos
    └── services/
        └── products.service.ts      → datos de los productos
```

---

## ❓ Problemas frecuentes

**`ionic` no se reconoce como comando**
> Instalen el Ionic CLI con: `npm install -g @ionic/cli`

**Error de versión de Node**
> Descarguen Node.js desde https://nodejs.org y elijan la versión **LTS**.

**El `npm install` da errores**
> Intenten borrando la carpeta `node_modules` y el archivo `package-lock.json`, luego vuelvan a correr `npm install`.

**El puerto 8100 ya está en uso**
> Ionic va a preguntar si quieren usar otro puerto, escriban `Y` y presionen Enter.
