fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

fis.match('*', {
  useHash: false
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

/*fis.match('*.{js,css}', {
    // 开启 hash
    useHash: true
});*/
/* 安装fis3-hook-relative*/
fis.hook('relative');
// 让所有文件，都使用相对路径。
fis.match('**', {
  relative: true
})