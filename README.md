# Gym Backend or Makuembe-WorkOut


Gym Backend is a Ruby on Rails application that serves as the backend for the React Gym application. Gym Backend provides the API endpoints that the React Gym frontend interacts with to create and manage user accounts, workout routines, and progress tracking data.

# Installation

To install Gym Backend, you will need to have Ruby and Rails installed on your machine. Once you have Ruby and Rails installed, follow these steps:

Clone the repository to your local machine:

```
git clone https://github.com/<username>/gym-backend.git

```
2 Navigate to the project directory:

```
cd gym-backend
```

3 Install the project dependencies:

```
bundle install
```

# Usage
To start the Rails server, run the following command:

```
rails server
```
This will start the server on port 3000 and make your application accessible at http://localhost:3000.

Endpoints


Gym Backend provides the following API endpoints:

/api/v1/users: Allows users to create and manage their accounts.
/api/v1/workout_routines: Allows users to create and manage their workout routines.
/api/v1/progress_tracking: Allows users to track their progress over time.

# Database
Gym Backend uses SQLite as the default database. To set up the database, run the following command:

```
rails db:create db:migrate

```

This will create the development and test databases and run any pending migrations.

