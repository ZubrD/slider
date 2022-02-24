# Zdslider (вариация на тему range slider)

Это учебный проект в рамках практического курса в Metalamp

## Приступая к работе

Для того чтобы протестировать работу плагина, в файле index.html следует добавить в раздел ```<body>``` следующую разметку:

```html
<div class="zdslider-wrapper">
    <div class="zdslider"></div>
</div>
```

и

```html
<script type="module" src="/src/js/script.js"></script>

```

В корень проекта надо добавить из этого репозитория папки src, node_modules, а также файлы package.json и tsconfig.json

## Предварительные условия

Начальная конфигурация слайдера определяется в файле config.js

```
/src/js/config.js
```

```javascript
export let configObj = {
    runner_number: 2,           /* Количество ползунков */
    min: 12,                    /* Минимальное значение */
    max: 150,                   /* Максимальное значение */
    discrete: 'no',             /* Дискретное перемещение ползунков или нет */
    orientation: 'horizontal'   /* Вертикальная или горизонтальная ориентация слайдера */
};
```

## Пример работы слайдера

![Гифка](/src/slider_horizontal_optimized.gif)

## Тестирование

Использовалась библиотека Jest, файлы с тестами находятся здесь

```html
/src/__tests__
```

Чтобы запустить Unit-тестирование, в терминале нужно указать следующую команду:

```html
$ npx jest --coverage
```

## Создано с помощью

Плагин разработан на Typescript в IDE Visual Studio Code

## Диаграмма классов

![Диаграмма классов](/Classes(UML).png)

## Диаграмма вариантов использования

![Диаграмма ариантов использования](/out/src/uml/usecase/UseCaseDiagram.png)

## Диаграммы последовательности

### Диаграмма плавного (дискретного) перемещения бегунка

![Плавное(дискретное)](/out/src/uml/sequence_smooth/sequence_smooth.png)

### Диаграмма перемещения единственного бегунка на слайдере

![Единственный бегунок на слайдере](/out/src/uml/sequence_1runner/sequence_1runner.png)