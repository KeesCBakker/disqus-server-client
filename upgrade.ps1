echo ""
echo "Upgrading NCU:"
npm install -g npm-check-updates
npm audit fix

cd packages

echo ""
echo "Upgrading disqus-server-client-core:"
cd disqus-server-client-core
ncu -u
npm install
npm audit fix
cd ..

echo ""
echo "Upgrading disqus-server-client:"
cd disqus-server-client
ncu -u
npm install
npm audit fix
cd ..

echo ""
echo "Upgrading root:"
cd ..
ncu -u
npm install
npm audit fix

echo ""
echo "Building & testing:"
npm run build
npm test

git add .
git commit -m "Packages upgrade"

echo ""
echo "Ready!"