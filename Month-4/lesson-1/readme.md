# DOM
```
DOM (Document Object Method) - dasturlash interfeysi bo'lib, u yordamida hujjatda elementlar yaratish, o'zgartirish va o'chirish imkonini beradi. Undan tashqari, elementlarga hodisalar qo'shish orqali sahifamizni interaktiv qilish imkoniyati mavjud.

DOM HTML hujjatini tugunlar daraxti (tree of nodes) sifatida ko'radi. Tugun (node) HTML elementini ifodalaydi.
```

![](./Document.jpg)

## Element selection
```
HTML Hujjatdagi elementlarni bir nechta yo'l bilan tanlab olish yo'llari mavjud va bular DOM API orqali amalga oshiriladi.
```

- **getElementById** - elementni ID orqali tanlab olish
- **getElementsByName** - elementlarni nomi orqali tanlab olish
- **getElementsByClassName** - elementlarni class nomi orqali tanlab olish
- **getElementsByTagName** - elemantlarni tag nomi orqali tanlab olish
- **querySelector** - CSS selector orqali elementni tanlab olish

## Elementlarni o'zgartirish

### 1. Element matnini o'zgartirish
```
Tanlab olingan elemnt matnini o'zgartirish uchun "textContent" attributidan foydalanish mumkin
```
```
const element = document.getElementById('elementId');
element.textContent = "Yangi matn"
```

### 2. Elementning qiymatini o'zgartirish
```
Tanlab olingan elemnt qiymatini o'zgartirish uchun "value" attributidan foydalanish mumkin
```

```
const inputElement = document.getElementById('inputId')
inputElement.value = 25
```

### 3. Elementning tanasini o'zgartirish

```
Tanlab olingan elementning tanasini boshqa HTML element bilan almashtirish uchun elementning "innerHTML" attribuyidan foydalanishimiz mumkin
```

```
const element = document.getElementById('elementId');
element.innerHTML = `<h1>Yangi sarlavha</h1>`
