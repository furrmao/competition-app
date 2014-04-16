(function (global) {
    var WeatherViewModel,
        app = global.app = global.app || {};


    WeatherViewModel = kendo.data.ObservableObject.extend({
        weatherDataSource: null,

        init: function () {
            var that = this,
                dataSource;


            kendo.data.ObservableObject.fn.init.apply(that, []);

            dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "data/weather.json",
                        dataType: "json"
                    }
//                    beforeSend: function(xhr) {
//                        xhr.setRequestHeader('Mike', '711761306837443264')
//                    },
//                    success:function(msg){
//                        alert(msg);
//                        console.log('Weather data load was successful!!');
//                    }
                }
            });


            that.set("weatherDataSource", dataSource);
        }
    });

    app.weatherService = {
        viewModel: new WeatherViewModel()
    };
})(window);