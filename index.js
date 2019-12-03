// 使用filter递归过滤树形结构数组

const someUseful = {
    filterMenu(menuList, menuCode) {
        return menuList.filter(item => {
            return menuCode.indexOf(item.code) >-1
        }).map(item => {
            item = Object.assign({}, item)
            if (item.children) {
                item.children = filterMenu(item.children, menuCode)
            }
            return item
        })
    }
}

export default someUseful