FROM python:3.10-slim
WORKDIR /app
COPY Pipfile* ./
RUN pip install --no-cache-dir --upgrade pip pipenv && \
    pipenv install --system --skip-lock
COPY . /app
EXPOSE 5000
CMD ["python", "app.py"]
