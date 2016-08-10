[![Build Status](https://travis-ci.org/yuriy-baranov/prime-number-generator.svg?branch=master)](https://travis-ci.org/yuriy-baranov/prime-number-generator)

В heroku logs отображаются все изменения, которые произошли с проектом, все запросы к серверам, их методы, пути, а так же коды ошибок, если они не были выполнены успешно. Еще туда выводится все, что выдаст сама программа, например, с помощью console.log(), а так же ошибки, произошедшие в ней.

Приложение генерирует простое число не меньше заданного.

Перед сборкой код проверяется с помощью eslint, bithound и запускаются тесты для функции, проверяющей число на простоту.

Тесты находятся в файле [tests/test.js](https://github.com/yuriy-baranov/prime-number-generator/blob/master/tests/test.js)

Включен UptimeRobot. Он показывает отрезки времени, когда сайт не был доступен, считает процент времени, когда он не отвечал и время ответа на запрос в течение дня.
<img src='https://pp.vk.me/c626325/v626325575/1f4cb/ONYWUv4HELU.jpg' width=600>