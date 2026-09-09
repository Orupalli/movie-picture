FROM python:3.10-slim
WORKDIR /app
COPY . /app
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir flask flask-cors gunicorn pytest python-dotenv
EXPOSE 5000
CMD ["python", "app.py"]
