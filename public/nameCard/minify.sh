file="jquery.nameCard.js"

echo '' > $file 
for i in nameCard.js avatar.js script.js;do
	echo "///// $i /////" >> $file 
	cat $i >> $file 
done
