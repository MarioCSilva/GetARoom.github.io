$('u').on('click', function () {
	console.log('mouse click')
	$(this).select();
	copyToClipBoard($(this).clone()
    .children()
    .remove()
    .end()
    .text());

	$(this).children(".tiptext").text("Copied: " + $(this).clone()
    .children()
    .remove()
    .end()
    .text());
});

$('u').on('mouseout', function () {
	console.log('mouse out')
	$(this).children(".tiptext").text("Copy to clipboard");
});

const copyToClipBoard = (str) =>
{
    const elem = document.createElement('textarea');
    elem.value = str;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
};