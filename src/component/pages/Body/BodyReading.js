import React, {useState} from 'react';
import NewImg from 'component/Figure/NewImg.png';
import ExtraNews from './ExtraNews';
import ExtraNewsImg from 'component/Figure/ExtraNewsImg.png';
import {MainNewsService} from 'services/MainNewsService';
import BlueTitle from './BlueTitle';
import 'component/css/Display.scss';


class BodyReading extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            arr: [],
            username: [],
            des: [],
            extranews: '',
        };
    }
    putData(item, index) {
        console.log(index);
        console.log(item);
        console.log(item.title);
        document.getElementById("demo").innerHTML = item.title;
        console.log(item.cateName[item.cateId[item.cateId.length - 1]]);
        document.getElementsByTagName("BLUETITLE").title = "item.title";
        console.log(document.getElementsByTagName("BLUETITLE").title);
    }
    getData(data) {
        MainNewsService.getnews(data, res => {
            this.setState({
                title: res.data[0].cateName[res.data[0].cateId[res.data[0].cateId.length-1]],
                arr: res.data,
                des1: res.data[0].description,
            });
            this.state.arr.map((item, index) => this.putData(item, index));
        });
    }
    componentDidMount() {
        const data = {
            "id": 57611,
            "cateId": [
                31
            ],
            "contentType": 0,
            "pageSize": 10
        };
        this.getData(data);
    }
    render(){
        console.log('render');
    return(
        <div className="body">
            <div className="SubNews">
                <div className="topic">
                    {this.state.title}
                </div>
                <div id="demo"></div>
                <div className="title">{"ReadingNews.title"}</div>
                <div className="menutitle">Vietnamnet . {"ReadingNews.time"} phút trước</div>
                <div className="baiviet" style={{position: 'relative', maxWidth: '570px'}}>
                    <div className="trichdan">Chỉ riêng ở Mỹ, hàng trăm triệu cuốn sách in được xuất bản mỗi năm, cùng với nền tảng 
                    hiện đại như sách điện tử và sách nói đã mang về hàng tỷ USD cho các nhà xuất bản.</div>
                    <div className="baiviet">Tính đến năm 2019, doanh thu thuần của ngành xuất bản sách tại Mỹ ở mức 25,8 tỷ USD.
                    Trong đó, 10,28 tỷ USD đến từ việc bán sách tại các hiệu sách truyền thống. Doanh số tại các cửa hàng 
                    sách trực tuyến trong năm 2018 vào khoảng 162 triệu USD, trong khi con số này đối với nền tảng sách nói 
                    lên tới 940 triệu USD. <br/>Ngoài ra, doanh số bán sách in hàng năm tại Mỹ vào khoảng 675 triệu USD, 
                    trong khi doanh thu từ việc xuất bản sách nói trên toàn cầu đạt mức 12,3 tỷ USD. <br/>Trang Statista 
                    cho biết hệ thống các cửa hàng sách ở Mỹ trung bình thu về khoảng 10 tỷ USD mỗi năm, chưa kể đến chuỗi 
                    thương mại điện tử khổng lồ như Amazon cũng góp phần cạnh tranh mạnh trong ngành.
                        <div><img src={"ReadingNews.img"} alt="Reading News"/></div>
                    Bên trong một tiệm sách của Amazon tại Mỹ. Ảnh: Forbes. <br/>Tuy nhiên, cùng với sự phát triển của công nghệ, 
                    thị hiếu của bạn đọc đang dần hướng tới các nền tảng đọc sách trực tuyến thay vì mua sắm tại các hiệu sách truyền 
                    thống. <br/><br/>Barnes & Noble, một trong những nhà bán sách lớn nhất ở Mỹ đã chứng kiến ​​doanh thu giảm liên tục 
                    trong suốt thập kỷ qua trước sự xuất hiện và cạnh tranh khốc liệt của thị trường sách trực tuyến. <br/><br/>Bên cạnh 
                    đó, các nhà sách tư nhân đang chứng kiến tốc độ phát triển mạnh, trong khi nhiều nhà sách quốc gia lại gặp khó khăn 
                    lớn trong việc tiếp cận độc giả. <br/><br/>Theo thống kê, 75% người trưởng thành ở Mỹ đọc ít nhất một cuốn sách trong 
                    một năm, trong khi có tới 98% số người đọc sách cho rằng niềm vui là lý do chính cho thói quen đọc sách hàng ngày. 
                    <br/><br/>Theo đó, chi tiêu cho việc đọc sách của người Mỹ được ước tính vào khoảng 110 USD mỗi năm. 
                    Hàng triệu người Mỹ cũng sử dụng sách như một công cụ đắc lực cho quá trình nghiên cứu khoa học. 
                    <br/><br/>Thống kê cho thấy chỉ riêng doanh thu xuất bản sách trong thị trường giáo dục đại học tại nước này đã 
                    lên tới 4 tỷ USD vào năm 2017, trong khi chi tiêu hàng năm cho các tài liệu khóa học trung bình vào khoảng 484 USD 
                    cho mỗi sinh viên.</div>
                </div>
                <div style={{marginTop: '50px'}}/>
                <BlueTitle title='a'></BlueTitle>
                <ExtraNews title={"item.title"} img={"item.img1"} time={"item.newsId"} extratitle={"item.cateName[item.data[index].cateId[item.data[index].cateId.length-1]]"}/>
            </div>
        </div>
    )
    }
}


export default BodyReading;