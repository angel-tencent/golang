package main
import (
	"bytes"
	"fmt"
	"log"
	"net/http"
	"os/exec"
)
func sayHelloName(w http.ResponseWriter, r *http.Request) {
	var input string
	// 解析url传递的参数
	r.ParseForm()
	for k, _ := range r.Form {
		input=k
		fmt.Println(input)
		if  input=="172.18.0.213"{
			exec_shell("sed -i 's/server 172.18.0.213/#server 172.18.0.213/g' /etc/nginx/conf.d/devopsseer.conf ","systemctl reload nginx ")
			fmt.Println("O2O1已下线")
		}else if input=="172.18.0.212" {
			exec_shell("sed -i 's/server 172.18.0.212/#server 172.18.0.212/g' /etc/nginx/conf.d/devopsseer.conf ","systemctl reload nginx ")
			fmt.Println("O2O2已下线")
		}else if input=="172.18.0.206"{
			exec_shell("sed -i 's/server 172.18.0.206/#server 172.18.0.206/g' /etc/nginx/conf.d/devopsseer.conf ","systemctl reload nginx ")
			fmt.Println("O2O4已下线")
		}else if input=="172.18.0.208"{
			exec_shell("sed -i 's/server 172.18.0.208/#server 172.18.0.208/g' /etc/nginx/conf.d/devopsseer.conf ","systemctl reload nginx ")
			fmt.Println("O2O4已下线")
		}else if input=="172.18.0.204"{
			exec_shell("sed -i 's/server 172.18.0.204/#server 172.18.0.204/g' /etc/nginx/conf.d/devopsseer.conf ","systemctl reload nginx ")
			fmt.Println("O2O5已下线")
		}else if input=="172.18.0.217"{
			exec_shell("sed -i 's/server 172.18.0.217/#server 172.18.0.217/g' /etc/nginx/conf.d/devopsseer.conf ","systemctl reload nginx ")
			fmt.Println("O2O6已下线")
		}else if input=="172.18.0.216"{
			exec_shell("sed -i 's/server 172.18.0.216/#server 172.18.0.216/g' /etc/nginx/conf.d/devopsseer.conf ","systemctl reload nginx ")
			fmt.Println("O2O7已下线")
		}else if input=="172.18.17.66"{
			exec_shell("sed -i 's/server 172.18.17.66/#server 172.18.17.66/g' /etc/nginx/conf.d/devopsseer.conf ","systemctl reload nginx ")
			fmt.Println("O2O8已下线")
		}else {
			fmt.Println("sorry,您输入的服务器不在此生产环境中,请核实后再输入!")
		}
	}
}
func exec_shell(s string,m string) {
	cmd := exec.Command("/bin/bash", "-c", s,m)
	var out bytes.Buffer
	cmd.Stdout = &out
	err := cmd.Run()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("%s", out.String())
}
func main() {
	//设置访问路由
	fmt.Println("success")
	http.HandleFunc("/", sayHelloName)
	//fmt.Println(input)
	//设置监听端口
	err := http.ListenAndServe(":9000", nil)
	if err != nil {
		log.Fatal("ListenAndserve:", err)
	}
	fmt.Println("succes")
}