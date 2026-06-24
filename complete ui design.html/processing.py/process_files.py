import os

def processing_file(file_path):
    if file_path.endswith('.py'):
        print(f"Running Python script: {file_path}")
        # Insert logic to import and run the Python script here
    elif file_path.endswith('.csv'):
        print(f"Processing CSV: {file_path}")
        # Insert logic to read and process the CSV data here
    else:
        print(f"Other file type: {file_path}")
        # Insert logic for other file types here

input_folder = os.environ.get('input_folder')

if input_folder and os.path.exists(input_folder):
    files = os.listdir(input_folder)
    for file in files:
        file_path = os.path.join(input_folder, file)
        processing_file(file_path)
else:
    print("Input folder is not set or does not exist.")
