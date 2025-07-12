# Employee Directory UI

## Features
- Add/Edit/Delete employees
- Render list with Freemarker
- Search, sort, filter (to be extended)
- Responsive design with CSS
- In-memory data using JavaScript

## Setup
1. Open `index.ftlh` using a Freemarker-compatible server or simulate with mock data in JS.
2. No backend required.

## Structure
```
employee-directory/
├── src/main/resources/templates/
│   ├── index.ftlh
│   └── form.ftlh
├── src/main/resources/static/
│   ├── css/styles.css
│   ├── js/data.js
│   └── js/app.js
└── README.md
```

## Reflection
This assignment showcases template rendering and dynamic interactivity using pure JS. Given more time, pagination, filtering, and localStorage persistence would be added.
