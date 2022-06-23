function () {
    // Apply the search
    this.api()
        .columns()
        .every(function () {
            var that = this;

            $('input', this.header()).on('keyup change clear', function () {
                if (that.search() !== this.value) {
                    that.search(this.value).draw();
                }
            });
        });
}
