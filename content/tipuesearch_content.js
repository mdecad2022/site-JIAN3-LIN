var tipuesearch = {"pages": [{'title': 'About', 'text': 'cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'stud.cycu.org', 'text': 'git config --global http.proxy\xa0 http://p42.cycu.org:3128 \xa0 \xa0 \xa0 \n git config --global user.name "name" \xa0 \n git config --global user.email "email" \xa0 \n git clone --recurse-submodules git@demo:mdecad2022/site-github_帳號.git s \xa0 \n git submodule update --init --recursive \xa0 \n python3 server.py \xa0 \n https://stud.cycu.org:8xxx \xa0 \n acp 放入倉儲後 \xa0 \n chmod u+x acp\xa0 \xa0 \n source acp "提交說明字串" \xa0 \n python3 server.py & \xa0 \n ps aux | grep "server.py" \xa0 \n kill -9 111919 \xa0 \n cd s, cd cmsimde, git pull origin master \xa0 \n cd .., python3 server.py \xa0 \n exit 推出 login \xa0 \n \n', 'tags': '', 'url': 'stud.cycu.org.html'}, {'title': '心得-1', 'text': '一開始做的版本有些錯誤，會造成進入動態網頁點會直接跳出網頁無法回應的問題發生，所以後來多了一個 cd s, cd cmsimde, git pull origin master的步驟，不但解決了問題，還多了一個acp 的按鍵，可以更方便的將作業推到遠端。 \n', 'tags': '', 'url': '心得-1.html'}, {'title': 'Replit', 'text': 'cmsite 動態網站可以在 Replit 環境執行, 以下為設定步驟: \n 建立 Replit 帳號 登入 Email 驗證 Replit 寄出的註冊確認電子郵件 利用 import repository, 以 cmsite 倉儲內容,建立 repl 進入 .replit 檔案設定頁面, 將 main.py 設定為啟動程式 在 shell 介面執行 git submodule update --init --recursive, 取下 cmsite 倉儲中 cmsimde 子模組檔案 在 shell 介面執行 pip install flask flask_cors bs4 lxml pelican markdown gevent, 安裝 cmsimde 所需要的模組 按下 Run, 啟動 main.py 登入 cmsite 動態網站, 修改管理者密碼, 修改標題與內容後, 以 generate_pages 將動態網頁內容轉為靜態格式 利用 Replit 中的 Version Control 功能, 將改版資料推向遠端倉儲 \n \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': '心得-2', 'text': '這個方法是以前從來都沒有用過的，感覺如果它的功能可以開放多一些，那真的會方便很多，以前的方法要用小黑窗打一些字才可以推上去，現在不用，只需要按一個鍵就解決了。 \xa0 \n', 'tags': '', 'url': '心得-2.html'}, {'title': 'W8', 'text': '\n 這次的作業是要準備好onshape、NX、SolveSpace和drill_press，已經都準備好了，期待接下來畫圖的課程。 \n', 'tags': '', 'url': 'W8.html'}, {'title': 'w6', 'text': '\n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w6.html'}]};