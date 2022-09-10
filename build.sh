docker-compose exec frontend npm run build
rm -r docs
mv ./app/dist docs