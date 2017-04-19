Weather Forecast by Laravel with React
====

Overview

## Description
This is Weather Forecast application by [OpenWeatherMap](https://openweathermap.org/)
This application provide searching random place of Weather forecast and.
It doesn't show same place again.
This composition is used bellow application.

Laravel 5.4
ReactJs 0.14.6

## Demo

![Demo](https://raw.github.com/wiki/MasahiroHanawa/weather_forecast/demo/demo.gif)

## Requirement

[local]
- Vagrant
- ruby 2.0.0p648
- gem 2.0.14.1

[server]
- php 7
- Laravel 5.4
- ReactJs 0.14.6
- Chart.js 1.1.1

## Install

```vagrantfile
$ vagrant up
```

```vagrantfile
$ vagrant ssh
```

```/var/www/html/forecast
$ [vagrant@localhost forecast] php artisan migrate --seed
```

## Licence

[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)

## Author

[MasahiroHanawa](https://github.com/tcnksm)