import React from 'react';
import NewImg from 'component/Figure/NewImg.png';
import ExtraNews from './ExtraNews';
import ExtraNewsImg from 'component/Figure/ExtraNewsImg.png';
import 'component/css/Display.scss';


function BodyReading() {
    var ReadingNews = {
        topic: 'Xã hội',
        title: 'Người Mỹ chi hàng trăm triệu USD mỗi năm cho việc đọc sách',
        img: NewImg,
        time: 6,
        
    }
    var Extra = {
        title: 'Nghiêm túc cách ly xã hội trong thời gian ngắn để không phải phong tỏa trong thời gian dài',
        time: 6,
        img: ExtraNewsImg,
        extratitle: 'Tin cùng chủ đề',
    }
    var Extra2 = {
        title: 'Nghiêm túc cách ly xã hội trong thời gian ngắn để không phải phong tỏa trong thời gian dài',
        time: 6,
        img: ExtraNewsImg,
        extratitle: 'Xem nhiều',
    }
    return(
        <div className="body">
            <div className="SubNews">
                <div className="topic">
                    {ReadingNews.topic}
                </div>
                <div className="title">{ReadingNews.title}</div>
                <div className="menutitle">Vietnamnet . {ReadingNews.time} phút trước</div>
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
                        <div><img src={ReadingNews.img} alt="Reading News"/></div>
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
                <ExtraNews title={Extra.title} img={Extra.img} time={Extra.time} extratitle={Extra.extratitle}/>
                <ExtraNews title={Extra2.title} img={Extra2.img} time={Extra2.time} extratitle={Extra2.extratitle}/>
            </div>
        </div>
    )
}

export default BodyReading;