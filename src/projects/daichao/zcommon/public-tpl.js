exports.pageTabBar = function(data) {
    
    let highlightFirst = data.highlightFirst ? 'selected' : '';
    let highlightSecond = data.highlightSecond ? 'selected' : ''
    let highlightThree = data.highlightThree ? 'selected' : ''

    return `
        <div class="global-tab-bar-wrap" style="display:none">
            <div class="global-tab-bar db">
                <div class = "db1 bc bm fc hui-home ${highlightFirst} tabbar one" >
                    <span class="icon one"></span> 
                    <span class="one">Beranda</span>
                </div>

                <div class="db1 bc bm fc hui-ding ${highlightSecond} tabbar two">
                    <span class="icon two"></span>
                    <span class="two">Rekomendasi</span>
                </div>

                <div class = "db1 bc bm fc hui-ge ${highlightThree} tabbar three" >
                    <span class="icon three"></span>
                    <span class="three">Akun Saya</span>
                </div>
                
            </div>
        </div>
    `
}