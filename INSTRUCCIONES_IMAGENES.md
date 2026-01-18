# 📸 Guía de Imágenes - Bear Street Tavern

## Ubicación de las Imágenes

Todas las imágenes deben guardarse en la carpeta: **`/public/images/`**

## Imágenes Necesarias

### 1. **Logo Principal** ✅
- **Archivo**: `BSTLOGO.png` (Ya existe)
- **Ubicación**: `/public/images/BSTLOGO.png`
- **Uso**: Header, Footer, Hero section
- **Recomendación**: Fondo transparente PNG, mínimo 500x500px

### 2. **Hero Background** 🔄
- **Archivo**: `hero-background.jpg` o `hero-background.webp`
- **Ubicación**: `/public/images/hero-background.jpg`
- **Uso**: Fondo de la sección principal (primera sección)
- **Recomendación**:
  - Dimensiones: 1920x1080px o superior
  - Formato: JPG o WebP para mejor rendimiento
  - Una imagen del interior del restaurante, patio, o pizza en horno
  - Se verá con opacidad del 20% sobre fondo negro

### 3. **Footer Background** 🔄
- **Archivo**: `footer-background.jpg` o `footer-background.webp`
- **Ubicación**: `/public/images/footer-background.jpg`
- **Uso**: Fondo del footer (última sección)
- **Recomendación**:
  - Dimensiones: 1920x600px o superior
  - Formato: JPG o WebP
  - Puede ser una textura, madera, o foto del ambiente del restaurante
  - Se verá con opacidad del 10% sobre fondo negro

### 4. **Pizzas Featured** (3 imágenes) 🆕
- **Archivos**:
  - `pizza-godfather.jpg`
  - `pizza-veggie.jpg`
  - `pizza-carnivore.jpg`
- **Ubicación**: `/public/images/pizzas/`
- **Uso**: Sección de "Signature Pizzas"
- **Recomendación**:
  - Dimensiones: 800x800px (cuadradas)
  - Fotos de las pizzas reales del menú
  - Buena iluminación y calidad profesional
  - Formato: JPG o WebP

### 5. **Highlights** (3 imágenes) 🆕
- **Archivos**:
  - `patio-dogs.jpg` (Patio con perros)
  - `craft-beers.jpg` (Cervezas artesanales)
  - `monday-special.jpg` (Especial del lunes)
- **Ubicación**: `/public/images/highlights/`
- **Uso**: Sección de highlights/características
- **Recomendación**:
  - Dimensiones: 600x600px
  - Fotos reales del patio, cervezas, y ambiente

### 6. **Instagram Feed** (6 imágenes) 🆕
- **Archivos**: `instagram-1.jpg` hasta `instagram-6.jpg`
- **Ubicación**: `/public/images/instagram/`
- **Uso**: Galería de Instagram
- **Recomendación**:
  - Dimensiones: 400x400px (cuadradas)
  - Pueden ser tus fotos reales de Instagram
  - Mix de comida, ambiente, clientes felices

### 7. **About Page** (futuras) 🔜
- `team-1.jpg`, `team-2.jpg`, etc.
- `interior-1.jpg`, `interior-2.jpg`, etc.
- Ubicación: `/public/images/about/`

## Cómo Agregar las Imágenes

### Opción 1: Manualmente
1. Abre la carpeta del proyecto
2. Navega a `public/images/`
3. Crea subcarpetas si es necesario (`pizzas/`, `highlights/`, `instagram/`)
4. Arrastra y suelta las imágenes

### Opción 2: Desde Google/Instagram
Para descargar fotos de Instagram del restaurante:
- Ve a https://instagram.com/bearstreettavern
- Click derecho en las fotos → "Guardar imagen como..."
- Guárdalas con nombres descriptivos

### Opción 3: Google Images
Para fotos del restaurante en Google:
- Busca "Bear Street Tavern Banff"
- Click en las imágenes de reseñas
- Asegúrate de tener permiso para usar las fotos

## Formatos Recomendados

### Para mejor rendimiento:
- **WebP**: Mejor compresión, soportado por navegadores modernos
- **JPG**: Buena opción para fotos con muchos colores
- **PNG**: Solo para el logo (con transparencia)

### Herramientas de optimización:
- https://tinypng.com/ (comprime sin perder calidad)
- https://squoosh.app/ (convierte a WebP)

## Actualizar el Código

Una vez que agregues las imágenes reales, necesitarás actualizar el código en:

### `app/page.tsx`:
```tsx
// Cambiar:
src="/images/hero-background.svg"
// Por:
src="/images/hero-background.jpg"
```

### `components/Footer.tsx`:
```tsx
// Cambiar:
src="/images/footer-background.svg"
// Por:
src="/images/footer-background.jpg"
```

## Siguiente Paso

Una vez que tengas las imágenes listas, avísame y te ayudaré a actualizar el código para que las muestre correctamente.

## Notas Importantes

1. **Nombres de archivo**: Usa nombres descriptivos en minúsculas, sin espacios
   - ✅ `pizza-godfather.jpg`
   - ❌ `Pizza Godfather.JPG`

2. **Tamaño de archivo**: Mantén cada imagen bajo 500KB para carga rápida

3. **Derechos de autor**: Asegúrate de tener permiso para usar todas las imágenes

4. **Respaldo**: Guarda copias de las imágenes originales antes de optimizarlas
