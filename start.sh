echo "Author: Yudiman Kwanmas"
echo "==================================================================================";
echo "To free up port 3000 : ";
echo "run 'sudo nestat -lpn | grep :3000' to get the pid of the process.";
echo "then run 'kill -9 <pid>' to kill the process."
echo "==================================================================================";
echo "Running npm install - comment out the line below if all Node Modules have already been installed.";
npm install;
echo "Running npm start.";
npm start;
