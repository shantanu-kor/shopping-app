exports.getContactUs = (req, res, next) => {
    res.render('contactus', {
        path: '/contactus',
        pageTitle: 'Contact Us',
    })
};

exports.postSuccess = (req, res, next) => {
    res.render('success', {
        path: '/success',
        pageTitle: 'Success',
    })
};