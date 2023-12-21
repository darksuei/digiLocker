# Use an official Python runtime as a parent image
FROM python:3.8-slim-buster

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

COPY requirements.txt requirements.txt

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

EXPOSE 5000

# Define environment variable
ENV FLASK_APP=main.py
ENV FLASK_ENV=production

# Run app.py when the container launches
CMD ["python", "./main.py"]

