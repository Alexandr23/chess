# Chess App

## Docker

Собрать образ веб-приложения `chess-app`
```
docker build -t chess-app .
```

Запустить проект
```
docker-compose up
```

## Postgres

Залить дамп в контейнер `db`
```
psql -h localhost -p 5432 -U postgres chess < dump.sql
```


## Heroku

Логин в `heroku-cli`
```
heroku login
```

Создать новый проект на `heroku`
```
heroku create
```

Добавить `git` в `heroku`-приложение
```
heroku git:remote -a <heroku_project_name>
```

Push в репозиторий `heroku`
```
git push heroku master
```

Добавляем add-on Heroku Postgres через настройки приложения в `heroku`. Тут же на сайте можно посмотреть переменные окружения в разделе `Settings`

Подключаемся к базе из `heroku-cli`
```
heroku pg:psql
```

Подключившись, накатываем дамп предварительно заменив имя пользователя в `dump.sql` на то, что выдал `heroku`
```
\i dump.sql
```