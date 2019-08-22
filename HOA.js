function isFirstLetterUpperCase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)){
        console.log('true');
    } else {
        console.log('fale')
    }
};
