# General Purpose Data Bases

## Users

| key    | type 		| notes       |
|--------|--------------|-------------|
| id     | varchar(36)  | Primary Key |
| login  | varchar(256) | Unique Key  |
| email  | varchar(256) | Unique Key  |
| passwd | varchar(256) | Encrypted   |