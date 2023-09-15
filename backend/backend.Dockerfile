# Use the official Python base image for FastAPI
FROM python:3.9-slim

# Set the working directory for FastAPI
WORKDIR /backend-app

# Copy the requirements.txt file to the container
COPY backend/requirements.txt .

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the FastAPI application code to the container
COPY backend .

# Expose the port on which the FastAPI application will run
EXPOSE 8000

# Start the FastAPI application with Uvicorn and enable auto-reload
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]