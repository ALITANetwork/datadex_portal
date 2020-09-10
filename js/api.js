(function () {
    var $section = $("#section4"),
        $container = $("#section4 .container"),
        $listUl = $("#section4 .container ul");
    var url = "http://wallet.alita.services:8125/burst?requestType=getAsset&asset=17131300966165313089&_=1599625040710";
    var url1 = "http://wallet.alita.services:8125/burst?requestType=getAsset&asset=14540465224538599517&_=1599625040710";
    var url2 = "http://wallet.alita.services:8125/burst?requestType=getAsset&asset=13946035998923183069&_=1599625040710";
    var allDate = null;
    var str = ``,
        str2 = '',
        str3 = '';
    $.get(url, function (data) { // 回调函数
        var obj = eval('(' + data + ')');
        console.log(obj);
        str = `<li class="item wow fadeInUp" data-wow-duration="2s">
        <div class="topItem">
            <img src="./images/one.jpeg" alt="">
            <div class="right">
                <h2 class="tp">NAME</p>
                    <p>${obj.name}</p>
            </div>
        </div>
        <div class="centerItem">
            <div class="left">
                <p>Quantity</span>
                <h3>${obj.quantityQNT}</h3>
            </div>
            <div class="right">
                <p>Asset Decimals</span>
                <h3>${obj.decimals}</h3>
            </div>
        </div>
        <div class="centerItem">
            <div class="left">
                <p>AssetId</span>
                <h3>${obj.asset}</h3>
            </div>
            <div class="right">
                <p>requestTime</span>
                <h3>${obj.requestProcessingTime}</h3>
            </div>
    </div>
    </li>
        `;

        $listUl.append(str);
    });
    $.get(url1, function (data) {
        var obj = eval('(' + data + ')');
        console.log(obj);
        str2 = `<li class="item wow fadeInUp" data-wow-duration="2s">
        <div class="topItem">
            <img src="./images/one.jpeg" alt="">
            <div class="right">
                <h2 class="tp">NAME</p>
                    <p>${obj.name}</p>
            </div>
        </div>
        <div class="centerItem">
            <div class="left">
                <p>Quantity</span>
                <h3>${obj.quantityQNT}</h3>
            </div>
            <div class="right">
                <p>Asset Decimals</span>
                <h3>${obj.decimals}</h3>
            </div>
        </div>
        <div class="centerItem">
            <div class="left">
                <p>AssetId</span>
                <h3>${obj.asset}</h3>
            </div>
            <div class="right">
                <p>requestTime</span>
                <h3>${obj.requestProcessingTime}</h3>
            </div>
        </div>
    </li>
        `;

        $listUl.append(str2);
    })
    $.get(url2, function (data) {
        var obj = eval('(' + data + ')');
        console.log(obj);
        str3 = `<li class="item wow fadeInUp" data-wow-duration="2s">
        <div class="topItem">
            <img src="./images/one.jpeg" alt="">
            <div class="right">
                <h2 class="tp">NAME</p>
                    <p>${obj.name}</p>
            </div>
        </div>
        <div class="centerItem">
            <div class="left">
                <p>Quantity</span>
                <h3>${obj.quantityQNT}</h3>
            </div>
            <div class="right">
                <p>Asset Decimals</span>
                <h3>${obj.decimals}</h3>
            </div>
        </div>
        <div class="centerItem">
            <div class="left">
                <p>AssetId</span>
                <h3>${obj.asset}</h3>
            </div>
            <div class="right">
                <p>requestTime</span>
                <h3>${obj.requestProcessingTime}</h3>
            </div>
        </div>
    </li>
        `;

        $listUl.append(str3);
    })
})();