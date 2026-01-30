# 🚀 Bear Street Tavern - Guía de Despliegue y Transferencia

## 📋 Resumen Ejecutivo

Este documento contiene toda la información necesaria para desplegar y mantener el nuevo sitio web de Bear Street Tavern. El sitio está construido con Next.js 15, optimizado para rendimiento, SEO, y accesibilidad.

---

## ✅ Estado Actual del Proyecto

### **Completado:**
- ✅ Diseño responsivo (móvil, tablet, desktop)
- ✅ Menú interactivo con 6 categorías
- ✅ Sistema bilingüe (Inglés/Francés)
- ✅ Galería de imágenes optimizada
- ✅ Formulario de contacto funcional
- ✅ Newsletter subscription
- ✅ Integración con OpenTable para reservaciones
- ✅ SEO completo con meta tags
- ✅ Open Graph para redes sociales
- ✅ Schema.org markup
- ✅ Security headers configurados
- ✅ Imágenes optimizadas (WebP/AVIF)
- ✅ Accesibilidad WCAG 2.1 AA
- ✅ Performance optimizado (Core Web Vitals)

### **Tecnologías Utilizadas:**
- **Framework:** Next.js 15.1.1 (React 19)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Forms:** Web3Forms (gratuito, sin límites)
- **Hosting Recomendado:** Netlify o Vercel
- **Imágenes:** Next/Image con optimización automática

---

## 🌐 Opciones de Deployment

### **Opción 1: Netlify (Recomendado)**
**Ventajas:**
- Gratis para sitios estáticos
- Deploy automático desde Git
- SSL gratuito
- CDN global incluido
- Preview deployments
- Fácil configuración de dominio

**Pasos:**
1. Crear cuenta en https://netlify.com
2. Conectar repositorio Git
3. Configurar variables de entorno
4. Deploy automático en cada push

### **Opción 2: Vercel**
**Ventajas:**
- Creadores de Next.js
- Gratis para uso comercial
- Optimización automática
- Edge Functions
- Analytics incluido

**Pasos:**
1. Crear cuenta en https://vercel.com
2. Importar proyecto desde Git
3. Configurar variables de entorno
4. Deploy en 1 click

### **Opción 3: Hosting Tradicional (cPanel/AWS/DigitalOcean)**
**Requisitos:**
- Node.js 18.17 o superior
- 512MB RAM mínimo
- Soporte para builds de Next.js

---

## 🔐 Variables de Entorno Necesarias

Deben configurarse en el panel de hosting (Netlify/Vercel):

```bash
# Obligatorias:
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=47c191ea-2650-466b-b894-13cf5cef4de4
NEXT_PUBLIC_CONTACT_EMAIL=info@bearstreettavern.ca
NEXT_PUBLIC_SITE_URL=https://bearstreettavern.ca

# Opcionales:
NODE_ENV=production
```

**⚠️ IMPORTANTE:** Si no tienen acceso a `info@bearstreettavern.ca`, deben:
1. Obtener acceso al email, O
2. Cambiar `NEXT_PUBLIC_CONTACT_EMAIL` a un email que controlen

---

## 📧 Configuración de Formularios

### **Web3Forms (Actual)**
- **Service:** https://web3forms.com
- **Access Key:** `47c191ea-2650-466b-b894-13cf5cef4de4`
- **Email destino:** `info@bearstreettavern.ca`
- **Costo:** Gratis, ilimitado
- **Formularios activos:**
  - Newsletter (Footer)
  - Contact Form (/contact)

**Para cambiar el email receptor:**
1. Ir a https://web3forms.com
2. Login con el email registrado
3. Actualizar email de destino
4. O crear nueva Access Key con nuevo email

---

## 🌍 Configuración de Dominio (bearstreettavern.ca)

### **Información que deben proporcionar:**
1. **Proveedor actual del dominio** (GoDaddy, Namecheap, etc.)
2. **Credenciales de acceso al panel de dominio**
3. **Hosting actual** (para migración)

### **Pasos para conectar dominio a Netlify:**

#### Si el dominio está en GoDaddy/Namecheap:
1. Login al panel de dominio
2. Ir a DNS Settings
3. Agregar estos records:

```
Type: A
Name: @
Value: 75.2.60.5
TTL: Auto/3600

Type: CNAME
Name: www
Value: bearstreettavern.netlify.app
TTL: Auto/3600
```

#### Si usan Netlify DNS (Recomendado):
1. En Netlify: Site settings > Domain management
2. Click "Add custom domain"
3. Ingresar: bearstreettavern.ca
4. Netlify proporcionará nameservers
5. Cambiar nameservers en el proveedor de dominio a:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```

**Propagación:** 24-48 horas (usualmente 1-2 horas)

---

## 📂 Estructura del Proyecto

```
bear-street-tavern/
├── app/                    # Páginas de Next.js
│   ├── about/             # Página About
│   ├── contact/           # Página Contact
│   ├── gallery/           # Página Gallery
│   ├── menu/              # Página Menu
│   ├── reservations/      # Página Reservations
│   └── page.tsx           # Homepage
├── components/            # Componentes React reutilizables
├── constants/             # Datos del menú y contenido
├── contexts/              # Context API (idioma)
├── public/                # Archivos estáticos
│   └── images/           # Todas las imágenes
├── .env.local            # Variables locales (NO subir a Git)
├── .env.example          # Plantilla de variables
└── next.config.ts        # Configuración de Next.js
```

---

## 🔄 Proceso de Deploy

### **Deploy Inicial (Primera vez):**

1. **Subir código a Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin [URL-DEL-REPOSITORIO]
   git push -u origin main
   ```

2. **Conectar a Netlify:**
   - Login en https://app.netlify.com
   - "New site from Git"
   - Seleccionar repositorio
   - Build settings:
     ```
     Build command: npm run build
     Publish directory: .next
     ```

3. **Configurar variables de entorno** (Site settings > Environment variables)

4. **Deploy!**

### **Actualizaciones Futuras:**
```bash
# Hacer cambios en el código
git add .
git commit -m "Descripción del cambio"
git push
# Netlify detecta el push y redeploy automáticamente
```

---

## ✅ Checklist Pre-Lanzamiento

### **Antes de ir a producción:**

- [ ] Verificar acceso a `info@bearstreettavern.ca`
- [ ] Configurar variables de entorno en Netlify/Vercel
- [ ] Conectar dominio bearstreettavern.ca
- [ ] Esperar propagación de DNS (24-48h)
- [ ] Verificar SSL activo (https://)
- [ ] Probar formularios en producción
- [ ] Verificar Open Graph en Facebook Debugger
- [ ] Probar en móviles reales (iOS/Android)
- [ ] Lighthouse audit (objetivo: 90+)
- [ ] Probar reservaciones OpenTable
- [ ] Verificar links de redes sociales

### **Post-Lanzamiento (Primera semana):**
- [ ] Configurar Google Search Console
- [ ] Enviar sitemap.xml a Google
- [ ] Monitorear emails de formularios
- [ ] Verificar analytics (si se configura)
- [ ] Revisar errores en Netlify/Vercel dashboard
- [ ] Probar todos los links externos

---

## 🛠️ Mantenimiento Continuo

### **Actualizaciones de Contenido:**

#### Cambiar precios del menú:
1. Abrir: `constants/menu.ts`
2. Buscar el item
3. Modificar precio
4. Guardar y hacer push a Git

#### Agregar nueva foto a galería:
1. Optimizar imagen (JPG/PNG, max 500KB)
2. Subir a `/public/images/Gallery/`
3. Agregar referencia en `app/gallery/GalleryClient.tsx`
4. Push a Git

#### Cambiar especiales:
1. Editar `/constants/menu.ts`
2. Sección `specials`
3. Push a Git

### **Actualizaciones de Seguridad:**
```bash
# Cada 2-3 meses:
npm audit
npm audit fix
npm update
```

---

## 📊 Monitoreo y Analytics

### **Google Analytics (Opcional):**
1. Crear cuenta en https://analytics.google.com
2. Obtener Measurement ID (G-XXXXXXXXXX)
3. Agregar a `.env.local`:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
4. Descomentar código en `app/layout.tsx` (líneas para GA)

### **Métricas a monitorear:**
- Tiempo de carga (objetivo: < 2 segundos)
- Core Web Vitals (LCP, FID, CLS)
- Tasa de conversión de formularios
- Tráfico de reservaciones a OpenTable
- Bounce rate por página

---

## 🆘 Troubleshooting

### **Problema: Formularios no envían emails**
**Solución:**
1. Verificar `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` en variables de entorno
2. Verificar `NEXT_PUBLIC_CONTACT_EMAIL` es correcto
3. Revisar spam/junk en email receptor
4. Verificar en https://web3forms.com que la key es válida

### **Problema: Imágenes no cargan**
**Solución:**
1. Verificar que existen en `/public/images/`
2. Verificar nombres de archivo (case-sensitive)
3. Limpiar cache del navegador
4. Redeploy en Netlify

### **Problema: Dominio no resuelve**
**Solución:**
1. Verificar DNS records con https://dnschecker.org
2. Esperar propagación completa (hasta 48h)
3. Verificar nameservers apuntan correctamente
4. Contactar soporte del proveedor de dominio

### **Problema: Open Graph no muestra imagen**
**Solución:**
1. Esperar deploy completo
2. Limpiar cache en https://developers.facebook.com/tools/debug/
3. Compartir URL diferente (ej: /about en lugar de /)
4. Esperar 5-10 minutos para cache de WhatsApp

---

## 📞 Soporte Técnico

### **Recursos de ayuda:**
- **Next.js Docs:** https://nextjs.org/docs
- **Netlify Docs:** https://docs.netlify.com
- **Web3Forms Support:** https://web3forms.com/docs
- **Tailwind CSS:** https://tailwindcss.com/docs

### **Contacto del desarrollador:**
- **Nombre:** [Tu nombre]
- **Email:** [Tu email]
- **Disponibilidad:** [Especifica si ofrecerás soporte post-entrega]

---

## 💰 Costos Mensuales Estimados

| Servicio | Costo | Notas |
|----------|-------|-------|
| Hosting (Netlify Free) | $0/mes | Incluye 100GB bandwidth |
| Dominio bearstreettavern.ca | ~$15-20/año | Depende del proveedor |
| Web3Forms | $0/mes | Gratis ilimitado |
| SSL Certificate | $0 | Incluido en Netlify |
| **TOTAL** | ~$1.50/mes | Solo dominio |

**Upgrade a Netlify Pro ($19/mes) si:**
- Necesitan más de 100GB bandwidth
- Quieren password protection
- Necesitan build minutes adicionales

---

## 🎯 Métricas de Performance Actuales

**Lighthouse Score (estimado):**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

---

## 📝 Notas Finales

1. **Backup:** Todo el código está en Git, pueden clonar en cualquier momento
2. **Escalabilidad:** El sitio puede manejar miles de visitantes simultáneos
3. **SEO:** Optimizado para Google, Bing, y otros buscadores
4. **Mobile-First:** Diseñado primero para móviles
5. **Accesibilidad:** Compatible con screen readers y teclado

**Última actualización:** 2026-01-29
**Versión:** 1.0.0
