# Fitness Project

This is a fitness project developed to help users monitor their workouts, activities, and personal goals. The application is built using Spring Boot and Hibernate for the back-end with MySQL as the database, and Angular for the front-end, providing an intuitive interface to manage and visualize fitness progress.

## Features
- **Workout and Activity Management**: Add workouts and activities completed, detailing what was done in each session.
- **Goal Setting and Tracking**: Create fitness goals and track progress, with the option to mark them as completed or pending.
- **Dashboard**: View a summary of total progress, including aggregated information from all activities, goals, and workouts.

## Project Structure
The project is organized into two main folders:

- **fitnessBackend**: Contains the back-end application developed in Spring Boot, responsible for business logic and database integration.
- **fitnessFrontend**: Contains the front-end application developed in Angular, offering an interactive user interface.

## Technologies Used

### Backend
- **Spring Boot** - Main framework for back-end development
- **Hibernate** - JPA implementation for persistence management
- **MySQL** - Relational database for data storage

### Frontend
- **Angular** - Front-end framework for building the user interface
- **Ng-Zorro** - Angular component library for a modern and responsive user experience

## Prerequisites
- Java 17 or higher
- Node.js and NPM
- MySQL (configure credentials in `application.properties`)

## Setup and Running the Project

### Backend
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/fitness-tracker.git
    cd fitness-tracker/fitnessBackend
    ```

2. Set up the MySQL database:
    - Create a MySQL database named `fitness_tracker`.

3. Update the `application.properties` file with your connection credentials:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/fitness_tracker
    spring.datasource.username=your_username
    spring.datasource.password=your_password
    ```

4. Run the application:
    ```bash
    ./mvnw spring-boot:run
    ```

   The API will be available at [http://localhost:8080](http://localhost:8080).

### Frontend
1. Navigate to the `fitnessFrontend` directory:
    ```bash
    cd ../fitnessFrontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the Angular application:
    ```bash
    ng serve
    ```

   The front-end will be available at [http://localhost:4200](http://localhost:4200).

## Route Structure
The app's navigation is organized as follows:

- `/painel`: Dashboard with total progress information
- `/treinos`: Page for managing workouts
- `/atividades`: Page for managing completed activities
- `/metas`: Page to set and track fitness goals

## Contribution
Feel free to open issues or submit pull requests to improve the project.

## License
This project is for personal use and does not have a specific license. Feel free to explore and learn from it.
