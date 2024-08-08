FROM python:3.9

WORKDIR /app

COPY . /app

RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirments.txt

EXPOSE 8080

CMD ["python", "main.py"]