package main
import (
	"fmt"
	"github.com/aliyun/alibaba-cloud-sdk-go/services/slb"
)
func main() {
	client, err := slb.NewClientWithAccessKey("cn-shenzhen", "<accessKeyId>", "<accessSecret>")

	request := slb.CreateRemoveBackendServersRequest()
	request.Scheme = "https"

	request.BackendServers = "i-wz993xexk1tti0q9oxw6,i-wz95q5d1u4awcp9j36w2"
	request.LoadBalancerId = "lb-wz9lr5j6n0eg823w5xogr"

	response, err := client.RemoveBackendServers(request)  //将要移除的ECS实例,最好是一次一个 加条件判断来筛选
	if err != nil {
		fmt.Print(err.Error())
	}
	fmt.Printf("response is %#v\n", response)
}

