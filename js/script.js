$(function () {
    $('#searchType').on('click', 'li', function () {
        var $el = $(this);
        $('#searchType').find('button').html($el.text() + '<span class="caret"></span>');

        var selText = $el.text();
        if (selText === '标准规范') {
            $('#searchBtn').attr('href', 'standard-result.html');
            $('#inputSearch').attr('placeholder', '请输入标准号或标准名称');
        } else if (selText === '标准条文') {
            $('#searchBtn').attr('href', 'article-result.html');
            $('#inputSearch').attr('placeholder', '请输入关键词1   关键词2');
        } else {
            $('#searchBtn').attr('href', 'article-result.html');
            $('#inputSearch').attr('placeholder', '请输入图书名称');
        }
    });
});