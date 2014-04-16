(function (global) {
    var testViewModel,
        app = global.app = global.app || {};


    var dataSource = new kendo.data.DataSource( {
        data: {test:'Mind'}
    });

//    testViewModel = kendo.data.ObservableObject.extend({
//        testDataSource:{name:'Mike', age:'Mind your own...'}
//    });

//    app.testService = {
////        viewModel: new testViewModel(),
//        data: dataSource
//    };
})(window);