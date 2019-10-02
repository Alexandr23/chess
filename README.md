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