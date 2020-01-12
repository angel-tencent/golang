package main

import (
	"fmt"
	"html"
	"log"
	"net/http"
)

func main()  {
	http.Handle()
	http.Handle("/foo",fooHander)
	http.HandleFunc("/bar", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w,"hello,%q",html.EscapeString(r.URL.Path))
	})
	log.Fatal(http.ListenAndServe("8080",nil))
}


package main
import (
	"fmt"
	"log"
	"net/http"
	"strings"
)
func httpweb2()  {
	resp,err:=http.Post("https://imgchr.com/login","https://s2.ax1x.com/2019/12/30/lM2f4f.jpg",strings.NewReader("username=Gandalf&password=123456"))
	if err!=nil{
		log.Fatal(err)
	}
	if resp.StatusCode!=http.StatusOK{   //判断下上传的图片是否http请求成功s
		fmt.Println(resp.StatusCode)
	}else{
		fmt.Println("upload image success")
	}
}
func main()  {
	httpweb2()
}




package main

import (
	"fmt"
	"log"
	"net/http"
)

func main()  {
	resp,err:=http.Head("http://www.baidu.com")
	if err!=nil{
		log.Fatal(err)
	}else {
		fmt.Println(resp)
	}
}



package main
import (
	"fmt"
	"log"
	"net/http"
)
func httpweb()  {
	resp,err:=http.Get("https://s2.ax1x.com/2019/12/30/lM2f4f.jpg")
	if err !=nil{
		log.Fatal(err)  //这个方法是将错误信息用log方法输出
	}
	fmt.Println(resp)
}
func main()  {
	httpweb()
}
//这段代码利用http.get方法获取了baidu网站的页面信息