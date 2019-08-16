echo "" > nameCard.min.js
for i in nameCard.js avatar.js member.js script.js;do
	echo "///// $i /////" >> nameCard.min.js
	cat $i >> nameCard.min.js 
done
