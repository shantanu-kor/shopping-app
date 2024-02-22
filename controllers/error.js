exports.get404 = (req, res, next) => {
    const protocol = req.protocol;
    const host = req.hostname;
    const url = req.originalUrl;
    const port = 3000;

    const fullUrl = `${protocol}://${host}:${port}${url}`

    res.status(404).render('404', {
        pageTitle: 'Page Not Found',
        path: fullUrl,
    });
}