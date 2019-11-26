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
psql -h localhost -p 3030 -U postgres chess < dump.sql
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
