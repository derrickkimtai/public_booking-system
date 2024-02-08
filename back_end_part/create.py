import mysql.connector

def initialize_database():
    connection = None  # Initialize connection variable

    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="root",
            password="newpassword",
            database="seat_reservation_db"
        )
        if connection.is_connected():
            cursor = connection.cursor()

            with open("database.sql", "r") as sql_file:
                sql_commands = sql_file.read().split(';')

                for command in sql_commands:
                    if command.strip():
                        cursor.execute(command)

            print("Database has been initialized")

            connection.commit()
            cursor.close()

    except mysql.connector.Error as e:
        print("Error while connecting to MySQL:", e)

    finally:
        if connection is not None and connection.is_connected():
            connection.close()
            print("MySQL connection is closed")

if __name__ == "__main__":
    initialize_database()
