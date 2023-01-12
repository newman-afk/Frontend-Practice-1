$.ajax({
    type: "get",
    url: "new.json",
    data: "data",
    dataType: "json",
    success: function (data) {
        let str = ''
        data.data.forEach(element => {
            str += `<li><a href="">${element.title}</a><span>${element.num}</span></li>`
        });
        $('ul li').remove();
        $('ul').append(str);
    }
});