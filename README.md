[![Build Status](https://travis-ci.org/yuriy-baranov/prime-number-generator.svg?branch=master)](https://travis-ci.org/yuriy-baranov/prime-number-generator)

В heroku logs отображаются действия, сделанные через api heroku, данные о запросах к серверу (метод, url, ip, с которого был сделан запрос, а так же код ошибки, если запрос не был выполнен успешно) и вывод самой программы, то есть, например, console.log.

Приложение позволяет сгенерировать наименьшее простое число, большее или равное заданному.

Перед сборкой код проверяется с помощью eslint, bithound и запускаются тесты для функции, проверяющей число на простоту.

Тесты находятся в файле [tests/test.js](https://github.com/yuriy-baranov/prime-number-generator/blob/master/tests/test.js)

Подключен UptimeRobot, он показывает отрезки времени, когда сайт не был доступен, считает процент времени, когда он не отвечал и время ответа на запрос в течение дня.
<img src='https://pp.vk.me/c626325/v626325575/1f4cb/ONYWUv4HELU.jpg' width=600>