# General Purpose Data Bases

## Users

| key      | type 		  | notes       |
|----------|--------------|-------------|
| id       | varchar(36)  | Primary Key |
| username | varchar(256) | Unique Key  |
| email    | varchar(256) | Unique Key  |
| passwd   | varchar(256) | Encrypted   |

## Reset Keys

| key             | type 		 | notes                    |
|-----------------|--------------|--------------------------|
| id              | varchar(36)  | Primary Key              |
| user_id         | varchar(36)  | Foreign Key ('Users'.id) |
| key_value       | varchar(256) | Unique Key               |
| creation_time   | datatime     |                          |
| expiration_time | int          |						    |
| key_used        | bool         |						    |