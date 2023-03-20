function toggleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("more info").removeClass("active")
    } else {
        $(target).html("less info").addClass("active")
    }

    const item = $(target).parents(".point-exp-item")
    const detail = $(item).children(".point-item-detail")
    $(detail).slideToggle()
}