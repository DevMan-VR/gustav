FROM node:latest

# RUN mkdir -p /var/www/andina-rest-api/project
 COPY . /var/www/redsocial-backend
 COPY package.json /var/www/redsocial-backend/package.json
 COPY .env /var/www/redsocial-backend/.env

#RUN mkdir /var/www/bills \
	#	&& mkdir -p /var/www \
		#&& cd /var/www \
		#&& git clone -b development https://brandonslp:MBKRkTcYZXvmZdrT6W23@bitbucket.org/andinacocacola/andina-rest-api.git 


WORKDIR /var/www/redsocial-backend

RUN npm install && npm install cors
CMD ["npm","start"]

EXPOSE 7000