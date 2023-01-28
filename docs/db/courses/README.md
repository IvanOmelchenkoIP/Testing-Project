# Data Bases For Holding Courses

## Courses

| key          | type 		  | notes                    |
|--------------|--------------|--------------------------|
| id           | varchar(36)  | Primary Key 		     |
| course_name  | varchar(256) |             		     |
| course_code  | varchar(36)  | Unique Key  		     |
| course_owner | varchar(36)  | Foreign Key ('Users'.id) |
| institution  | varchar(256) |						     |
| parallel     | varchar(36)  | 					     |
| subject      | varchar(256) | 					     |

## Course Classes

| key        | type 		  | notes                    |
|------------|--------------|----------------------------|
| id         | varchar(36)  | Primary Key                |
| class_name | varchar(256) |                            |
| course_id  | varchar(36)  | Foreign Key ('Courses'.id) |

## Course Teachers

| key           | type 		   | notes                      |
|---------------|--------------|----------------------------|
| id            | varchar(36)  | Primary Key 		        |
| name  		| varchar(256) |             		        |
| user_id  		| varchar(36)  | Foreign Key('Users'.id)  	|
| course_id 	| varchar(36)  | Foreign Key ('Courses'.id) |
| entry_code    | varchar(256) | Unique Key			     	|
| code_used     | bool  	   | 					     	|
| course_editor | bool 		   | 					     	|

## Course Students

| key           | type 		   | notes                      	   |
|---------------|--------------|-----------------------------------|
| id            | varchar(36)  | Primary Key 		        	   |
| name  		| varchar(256) |             		        	   |
| user_id  		| varchar(36)  | Foreign Key ('Users'.id)  		   |
| course_id 	| varchar(36)  | Foreign Key ('Courses'.id)        |
| class         | varchar(36)  | Foreign Key ('Course Classes'.id) |
| entry_code    | varchar(256) | Unique Key			     		   |
| code_used     | bool  	   | 					     		   |