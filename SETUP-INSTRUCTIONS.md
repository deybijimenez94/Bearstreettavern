# 🚀 Bear Street Tavern - Instrucciones de Configuración Final

## ✅ Correcciones Completadas

### 1. **Open Graph Images - Solucionado** ✓
- **Problema:** URLs absolutas causaban que no se viera la imagen (triángulo)
- **Solución:** Cambiadas a URLs relativas en todas las páginas
- **Archivos corregidos:**
  - `app/layout.tsx`
  - `app/about/page.tsx`
  - `app/menu/page.tsx`
  - `app/reservations/page.tsx`
- **Resultado:** Ahora funcionarán en preview, staging y producción

### 2. **Email Configurable** ✓
- **Problema:** No tienes acceso a info@bearstreettavern.ca
- **Solución:** Ahora puedes usar tu propio email
- **Archivos actualizados:**
  - `components/Footer.tsx` (Newsletter)
  - `app/contact/ContactClient.tsx` (Formulario de contacto)
  - `.env.example` (documentación)

---

## 📧 Configuración de Emails (5 minutos)

### **Paso 1: Obtener Web3Forms Access Key**

1. Ve a: **https://web3forms.com/**
2. Click en "Get Started Free"
3. Ingresa **TU EMAIL PERSONAL** (el que controlas)
4. Recibirás un **Access Key** por email

### **Paso 2: Crear archivo .env.local**

En la raíz del proyecto, crea un archivo llamado `.env.local`:

```bash
# Tu Access Key de Web3Forms
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=tu_access_key_aqui

# Tu email personal para recibir los formularios
NEXT_PUBLIC_CONTACT_EMAIL=tu_email@gmail.com
```

**Ejemplo Real:**
```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6
NEXT_PUBLIC_CONTACT_EMAIL=deybi@gmail.com
```

### **Paso 3: Probar Localmente**

```bash
npm run dev
```

1. Ve a http://localhost:3000
2. Scroll hasta el footer
3. Suscríbete al newsletter con tu email
4. Revisa tu bandeja de entrada (y spam/junk)
5. Prueba el formulario de contacto en /contact

---

## 🌐 Desplegar a Producción (Netlify)

### **Opción A: Despliegue Nuevo**

1. Push tu código a GitHub/GitLab
2. Ve a https://app.netlify.com/
3. Click "New site from Git"
4. Conecta tu repositorio
5. En "Site settings" > "Environment variables", agrega:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY = [tu access key]
   NEXT_PUBLIC_CONTACT_EMAIL = [tu email]
   NODE_ENV = production
   ```
6. Deploy!

### **Opción B: Sitio Existente**

1. Ve a tu sitio en Netlify
2. Site settings > Environment variables
3. Agrega las variables:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY = [tu access key]
   NEXT_PUBLIC_CONTACT_EMAIL = [tu email]
   ```
4. Trigger new deploy

---

## 🔍 Verificar Open Graph (después del deploy)

### **Método 1: Facebook Debugger**
1. Ve a: https://developers.facebook.com/tools/debug/
2. Ingresa: `https://bearstreettavern.ca` (o tu URL de Netlify)
3. Click "Debug"
4. Deberías ver la imagen correctamente

### **Método 2: WhatsApp**
1. Envía el link a un contacto (o a ti mismo)
2. La imagen debería aparecer en el preview

### **Si aún no funciona:**
- Asegúrate de que el dominio esté correcto en Netlify
- Verifica que las imágenes existan en `/public/images/`
- Limpia cache en Facebook Debugger: "Scrape Again"

---

## ✅ Checklist Pre-Lanzamiento

### **Configuración (Hazlo YA):**
- [ ] Obtener Web3Forms Access Key
- [ ] Crear archivo `.env.local` con ambas variables
- [ ] Probar formulario de newsletter localmente
- [ ] Probar formulario de contacto localmente
- [ ] Verificar que emails llegan a tu correo

### **Deploy (Antes de anunciar):**
- [ ] Push código a Git
- [ ] Configurar variables en Netlify
- [ ] Deploy exitoso
- [ ] Verificar Open Graph en Facebook Debugger
- [ ] Compartir link en WhatsApp y verificar imagen
- [ ] Probar formularios en producción
- [ ] Verificar en móvil (iOS Safari, Android Chrome)

### **Post-Lanzamiento (Primera semana):**
- [ ] Configurar Google Search Console
- [ ] Enviar sitemap.xml
- [ ] Monitorear emails de formularios
- [ ] Lighthouse audit (objetivo: 90+)

---

## ❓ Preguntas Frecuentes

### **P: ¿Puedo cambiar el email más tarde?**
**R:** Sí, solo cambia `NEXT_PUBLIC_CONTACT_EMAIL` en Netlify y redeploy.

### **P: ¿Los emails son ilimitados?**
**R:** Sí, Web3Forms es completamente gratis y sin límites.

### **P: ¿Qué pasa si no configuro las variables?**
**R:** Los formularios usarán `info@bearstreettavern.ca` por defecto (que no llegará a ningún lado si no tienes acceso).

### **P: ¿La imagen de Open Graph se ve en local?**
**R:** No, Open Graph solo funciona en URLs públicas (después de deploy).

### **P: ¿Puedo usar múltiples emails?**
**R:** No directamente, pero puedes configurar forwards en tu email o usar un servicio como Gmail para organizar.

---

## 🎯 Resumen

**Lo que YA está listo:**
- ✅ Security headers configurados
- ✅ Open Graph images corregidas
- ✅ Formularios programados con Web3Forms
- ✅ Imágenes optimizadas
- ✅ Build de producción exitoso
- ✅ Código limpio y profesional

**Lo que TÚ necesitas hacer:**
1. ⏰ Obtener Web3Forms Access Key (2 min)
2. ⏰ Crear `.env.local` (1 min)
3. ⏰ Probar localmente (2 min)
4. ⏰ Configurar Netlify variables (2 min)
5. ⏰ Deploy y verificar (5 min)

**Total:** 12 minutos para estar 100% listo! 🚀

---

## 📞 Soporte

Si tienes problemas:
1. Verifica que las variables estén bien escritas (sin espacios extra)
2. Revisa la consola del navegador (F12) para errores
3. Verifica que Web3Forms access key sea válido
4. Limpia cache del navegador y recarga

¡Éxito con el lanzamiento! 🎉
