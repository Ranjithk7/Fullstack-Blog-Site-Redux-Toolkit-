run nodemon server - npm install nodemon --save-dev
		     in packages.json add this at scripts "dev": "nodemon src/server.js",		

connect to db - mongod -dbpath 'path'

drop db - show dbs (for showing all db)
	  use <db_name> (for using the db)
	  db.dropDatabase() (to drop)

create db - use <dbname>
	    db.collection_name.insertMany(<your data>)

show db -  db.coll_name.find().pretty()
	   db.coll_name.find({data}).pretty()

mongosh "mongodb+srv://cluster0.4dsemz3.mongodb.net/" --apiVersion 1 --username node-server
<!-- hosting app on aws via cli -->
1.amplify configure
2.amplify init
3.amplify add hosting
4.amplify publish

copy files on ec2 instance

rsync -avz --exclude 'node_modules' --exclude '.git' \
-e "ssh -i e:/ssh/india-rk-win10pro.pem" \
. ubuntu@ec2-13-60-54-235.eu-north-1.compute.amazonaws.com:~/app

ssh -i "india-rk-win10pro.pem" ubuntu@ec2-13-60-54-235.eu-north-1.compute.amazonaws.com

sudo chmod 777 /etc/app.env
sudo chown ubuntu:ubuntu /etc/app.env