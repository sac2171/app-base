FROM python:latest


RUN mkdir -p app/backend
WORKDIR app/backend
ADD . .

RUN pip install pipenv
RUN pipenv install
EXPOSE 8000

CMD ["pipenv", "run", "python", "manage.py", "runserver", "0.0.0.0:8000"]
