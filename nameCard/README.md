# README.md #

## avatar.js ##
這個檔案一個jquery插件，新增`$().avatar()`函數，可以幫選定的物件（限canvas）繪製一個隨機的頭貼，大小`128 * 128`  
## nameCard.js ##
這個檔案一個jquery插件，新增`$().nameCard(data)`函數，可以幫選定的物件（限canvas）繪製名片，大小`900 * 540`
### 參數 ###
```js
data: object
preset:
{
	name: '吳政儒',
	nickName: '狸貓',
	job: '社長 社寵'
}
```
## script.js ##
這個是主要程式碼，懶的說，看註解（如果有的話）
## member.js ##
這裡放大家的資料，印名片實惠從這裡撈資料
## nameCard.min.js ##
把上面幾個通通合起來（不包括`member.js`）
## minify.sh ##
產生`nameCard.min.js`的執行檔(shell script)
