import pandas as pd

# Create a simple DataFrame
data = {'Name': ['Alice', 'Bob', 'Charlie'],
        'Age': [25, 30, 22]}
df = pd.DataFrame(data)

# Display the DataFrame
print(df)
#Load dataset
df = pd.read_csv('movies_dataset.csv')
#Display the first few rows 
printf(df.head())
#Handling missing values by dropping rows with any missing value 
df = df.dropna()
#One-hot encode categorical features 
categorical_features =['genre', 'director', 'actors']
df = pd.get_dummies(df, columns=categorical_features)
#Display the first few rows to see the changes 
printf(df.head())
#Split data into features (X) and target (y)
X = df.drop('rating',axis=1)
y = df['rating']
train_test_split(*arrays, test_size=None, train_size=None, random_state=None, shuffle=True, stratify=None)
#Split data into training and testing sets 
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
.RandomForestRegressor(n_estimators=100, *, criterion='squared_error', max_depth=None, min_samples_split=2, min_samples_leaf=1, min_weight_fraction_leaf=0.0, max_features=1.0, max_leaf_nodes=None, min_impurity_decrease=0.0, bootstrap=True, oob_score=False, n_jobs=None, random_state=None, verbose=0, warm_start=False, ccp_alpha=0.0, max_samples=None, monotonic_cst=None)
#Initialize the Random Forest Regressor 
model = RandomForestRegressor(n_estimators=100, random_state=42)
#Train the model 
model.fit(X_train, y_train)
mse = mean_squared_error(y_true, y_pred)
mae = mean_absolute_error(y_true, y_pred)
print(f"Mean Absolute Error: {mae:.2f}")
y_true = [1.2, 2.4, 3.6, 4.8]
y_pred = [1.0, 2.5, 3.7, 4.9]

# Calculate R-squared
r2 = r2_score(y_true, y_pred)

print(f"R-squared: {r2:.4f}")
#Predict on the test set 
y_pred = model.predict(X_test)
# Calculate evaluation metrics
rmse = mean_squared_error(y_test, squared=False)
mae = mean_absolute_error(y_test)
r2 = r2_score(y_test, y_pred)
print(f'RMSE: {rmse}')
print(f'MAE:{mae}')
print(f'R^2:{r2}')
# Example new movie data (you need to match the columns with your training data)
new_movie = pd.DataFrame({
    'genre_Action':[1],
    'genre_Comedy':[0],
    'genre_Drama':[0],
    #Add other genres as needed 
    'director_Steven Spielberg':[1],
    #Add other directors as needed 
    'actors_Tom Hanks':[1],
    #Add other actors as needed
    #Include other features if any
})
# Predict the rating for the new movie
new_rating_prediction = model.predict(new_movie)
print(f'Predicted Rating:{new_rating_prediction[09]}')

