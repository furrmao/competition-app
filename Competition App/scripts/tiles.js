(function (global) {
    var TilesViewModel,
        app = global.app = global.app || {};

    TilesViewModel = kendo.data.ObservableObject.extend({
        tilesDataSource: null,

        init: function () {
            var that = this,
                dataSource;

            kendo.data.ObservableObject.fn.init.apply(that, []);


            dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "https://cdn.contentful.com/spaces/70oeg2af4yo7",
                        data: {
                            Accept: "application/json"
                        },
                        beforeSend: function(xhr) {
//                        xhr.setRequestHeader('Mike', '711761306837443264')
//                    },
//                        dataType: "json"
                    }
                }
            }});

            dataSource.read();

//            console.log('Tiles Datasource',dataSource);

            that.set("tilesDataSource", dataSource);
        }
    });

    app.tileService = {
        viewModel: new TilesViewModel()
    };
})(window);