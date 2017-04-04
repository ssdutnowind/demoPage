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
            $('#inputSearch').attr('placeholder', '轨道设计规范 施工');
        } else if (selText === '资料分类') {
            $('#searchBtn').attr('href', 'standard-category.html');
            $('#inputSearch').attr('placeholder', '请输入分类名称');
        } else {
            $('#searchBtn').attr('href', 'article-result.html');
            $('#inputSearch').attr('placeholder', '请输入图书名称');
        }
    });

    $('.category-level3').on('click', 'p', function () {
        window.open('standard-category.html', '_self');
    });

});