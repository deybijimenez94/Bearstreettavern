# ✅ Checklist de Entrega del Proyecto

## 📋 Antes de Enviar el Email

- [ ] Subir todo el código a un repositorio Git (GitHub/GitLab)
- [ ] Verificar que `.env.local` NO esté en el repositorio (debe estar en .gitignore)
- [ ] Hacer deploy de prueba en Netlify
- [ ] Probar todos los formularios en el deploy de prueba
- [ ] Tomar screenshots del sitio en desktop y móvil
- [ ] Grabar video demo (opcional pero recomendado)
- [ ] Revisar que todos los links funcionen
- [ ] Verificar que el menú sea correcto y actualizado

## 📧 Información a Solicitar de la Compañía

### Dominio
- [ ] Nombre del proveedor de dominio (GoDaddy, Namecheap, etc.)
- [ ] Usuario/email para login
- [ ] Password o acceso al panel
- [ ] Fecha de expiración del dominio
- [ ] Confirmación de ownership

### Email
- [ ] Acceso a info@bearstreettavern.ca
- [ ] Provider del email (Gmail, Office365, cPanel, etc.)
- [ ] Credenciales si es necesario
- [ ] O email alternativo para formularios

### Hosting Actual
- [ ] Provider actual (HostGator, Bluehost, SiteGround, etc.)
- [ ] ¿Quieren mantenerlo o cambiar a Netlify/Vercel?
- [ ] Credenciales de acceso (si aplica)
- [ ] Archivos del sitio actual (para backup)

### Repositorio de Código
- [ ] ¿Tienen GitHub/GitLab empresarial?
- [ ] Email para transferir el ownership del repo
- [ ] ¿Quieren acceso de admin o solo viewer?

### Redes Sociales
- [ ] Confirmar URLs de Instagram
- [ ] Confirmar URLs de Facebook
- [ ] Cualquier otra red social a agregar

## 📦 Archivos a Enviar/Compartir

- [ ] Código fuente (link a GitHub)
- [ ] DEPLOYMENT-GUIDE.md
- [ ] SETUP-INSTRUCTIONS.md
- [ ] EMAIL-TEMPLATE.md (este archivo)
- [ ] Screenshots del sitio
- [ ] Video demo (opcional)
- [ ] Link al preview en Netlify

## 🚀 Después de Recibir la Información

### Fase 1: Setup (Día 1)
- [ ] Recibir toda la información solicitada
- [ ] Verificar acceso al dominio
- [ ] Verificar acceso al email
- [ ] Configurar repositorio final (si aplica)

### Fase 2: Deploy (Día 2)
- [ ] Crear cuenta Netlify (o usar la tuya)
- [ ] Conectar repositorio
- [ ] Configurar variables de entorno
- [ ] Deploy a producción
- [ ] Configurar DNS del dominio
- [ ] Esperar propagación (2-24 horas)

### Fase 3: Verificación (Día 3)
- [ ] Verificar sitio en https://bearstreettavern.ca
- [ ] Probar formulario de contacto
- [ ] Probar newsletter signup
- [ ] Verificar reservaciones OpenTable
- [ ] Probar en móviles (iOS/Android)
- [ ] Lighthouse audit (objetivo: 90+)
- [ ] Verificar Open Graph (Facebook Debugger)
- [ ] Probar links de redes sociales
- [ ] Verificar SSL activo (candado verde)

### Fase 4: Entrega Final
- [ ] Documento de credenciales para la compañía
- [ ] Sesión de training (si aplica)
- [ ] Transferir ownership del repositorio
- [ ] Transferir cuenta de Netlify (opcional)
- [ ] Entregar documentación de mantenimiento
- [ ] Confirmar que todo funciona

## 📝 Documentos de Entrega Final

### Para el cliente, preparar:

**1. Credenciales Document** (Crear nuevo archivo seguro)
```
=== BEAR STREET TAVERN - CREDENCIALES ===

NETLIFY:
- URL: https://app.netlify.com
- Email: [email de la cuenta]
- Password: [password]
- Site ID: [ID del sitio]

GITHUB/GITLAB:
- URL: [link al repositorio]
- Email: [email de acceso]
- Password: [password]

WEB3FORMS:
- URL: https://web3forms.com
- Access Key: 47c191ea-2650-466b-b894-13cf5cef4de4
- Email receptor: info@bearstreettavern.ca

DOMINIO:
- Provider: [nombre]
- URL panel: [link]
- Usuario: [proporcionado por ellos]
- Password: [proporcionado por ellos]
```

**2. Quick Start Guide** (para futuras actualizaciones)
```markdown
# Cómo Actualizar el Sitio

## Cambiar Precios del Menú:
1. Ir al repositorio de GitHub
2. Abrir: constants/menu.ts
3. Buscar el item y modificar precio
4. Commit cambios
5. Netlify deploya automáticamente en 2-3 minutos

## Agregar Nueva Foto:
1. Optimizar imagen (max 500KB)
2. Subir a /public/images/Gallery/
3. Agregar referencia en app/gallery/GalleryClient.tsx
4. Commit y push

## Soporte:
- Documentación: ver DEPLOYMENT-GUIDE.md
- Issues: crear en GitHub
- Contacto: [tu email]
```

**3. Emergency Contacts**
```
Desarrollador: [Tu nombre] - [Tu email] - [Tu teléfono]
Netlify Support: support@netlify.com
Web3Forms Support: support@web3forms.com
Dominio Provider: [soporte del provider]
```

## 🎯 Métricas de Éxito

Después del deploy, verificar:

- [ ] Lighthouse Performance: 90+
- [ ] Lighthouse Accessibility: 100
- [ ] Lighthouse SEO: 100
- [ ] Tiempo de carga < 3 segundos
- [ ] Mobile friendly (Google test)
- [ ] SSL válido y activo
- [ ] Formularios enviando emails correctamente
- [ ] Open Graph funcionando en redes sociales
- [ ] Sin errores en consola del navegador
- [ ] Todos los links funcionando

## ⚠️ Advertencias Importantes

### NO hacer antes del go-live:
- [ ] NO borrar el sitio actual hasta confirmar que el nuevo funciona 100%
- [ ] NO cambiar DNS sin backup del sitio actual
- [ ] NO eliminar el repositorio de código
- [ ] NO compartir credenciales por email sin encriptar

### SÍ hacer:
- [ ] Hacer backup completo del sitio actual
- [ ] Documentar configuración actual del dominio
- [ ] Probar en subdomain temporal primero (ej: new.bearstreettavern.ca)
- [ ] Tener plan de rollback si algo sale mal

## 📞 Soporte Post-Entrega

Definir con la compañía:

- [ ] ¿Cuántas horas de soporte post-entrega incluyes?
- [ ] ¿Cómo contactarte? (email, teléfono, tickets)
- [ ] ¿Horario de disponibilidad?
- [ ] ¿Cobro por updates futuros?
- [ ] ¿Training incluido?
- [ ] ¿Documentación de código incluida?

## 💡 Recomendaciones

1. **Deployment gradual:**
   - Primero deploy en subdomain temporal
   - Testing exhaustivo por 2-3 días
   - Luego migrar dominio principal

2. **Comunicación:**
   - Mantener al cliente informado en cada paso
   - Screenshots/videos de progreso
   - Llamada de demo antes del go-live

3. **Documentación:**
   - Todo por escrito
   - Credenciales en documento seguro
   - Video tutorial de cómo hacer updates

4. **Backup:**
   - Guardar copia del sitio actual
   - Backup de configuración de DNS
   - Export de base de datos (si aplica)

---

## ✅ Firma de Entrega

Cuando todo esté completo:

```
Proyecto: Bear Street Tavern Website
Desarrollador: [Tu nombre]
Cliente: [Nombre de la compañía]
Fecha de entrega: [Fecha]

Checklist completado: [ ] Sí [ ] No
Sitio en producción: [ ] Sí [ ] No
Cliente satisfecho: [ ] Sí [ ] No

Firma desarrollador: ________________
Firma cliente: ________________
```

---

**Última actualización:** 2026-01-29
