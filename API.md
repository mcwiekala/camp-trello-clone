#Requests
Try [httpie](https://httpie.io/cli) to check our requests:

BACKEND
```
# HELLO WORLD
http -f GET http://localhost:8085/v1/

# CREATE TASK
http -f POST http://localhost:8085/v1/tasks \
    title='task 1'

```