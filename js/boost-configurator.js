function updateCmdLine() { 
    var buildThreads = $('#build_threads option:selected').text();
    var toolsetValue = $('#toolset option:selected').text();
    var toolset = toolsetValue.split(" ")[0];
    var addressModel = $('#address_model option:selected').text();
    var architecture = $('#architecture option:selected').text();
    var linkType = $('#link_type option:selected').text();
    var threading = $('#threading option:selected').text();

    var modules = ''
    $("#modules option:selected").each(function() { 
        modules += $(this).data('param') + ' ';
    });
    var commandline = `b2 -j${buildThreads} ${modules} toolset=${toolset} address-model=${addressModel} architecture=${architecture} link=${linkType} threading=${threading} runtime-link=shared --build-type=complete stage`;
    $('#build_cmd_line').text(commandline);
}

function copyToClipboard() {
    var copyText = document.getElementById("build_cmd_line");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    copyText.setSelectionRange(0, 0);
}

$(document).ready(function() {
    $('select').on('change', function () {
        updateCmdLine()
    });
    $('#copy_to_clipboard').on('click', function () {
        copyToClipboard()
    });
    updateCmdLine();
});

