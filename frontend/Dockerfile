FROM node:10.13 

 RUN mkdir -p /var/www/redsocial-frontend
 COPY . /var/www/redsocial-frontend
 COPY package.json /var/www/redsocial-frontend/package.json
 COPY .env /var/www/redsocial-frontend/.env

#RUN mkdir /var/www/bills \
	#	&& mkdir -p /var/www \
		#&& cd /var/www \
		#&& git clone -b development https://brandonslp:MBKRkTcYZXvmZdrT6W23@bitbucket.org/andinacocacola/andina-rest-api.git 


WORKDIR /var/www/redsocial-frontend

RUN npm install
CMD ["npm","start"]

EXPOSE 8000
