import pandas as pd

def load_data(filepath):
    # Read the CSV file
    data = pd.read_csv(filepath)
    # Separate features (X) and target (y)
    X = data[['feature1', 'feature2', 'feature3']]  # Replace with your actual column names
    y = data['target']  # Replace with your target column name
    return X, y
