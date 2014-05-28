/** @jsx React.DOM */
var List = React.createClass({
    loadItemsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: []};
    },
    componentWillMount: function() {
        this.loadItemsFromServer();
    },
    render: function() {
        var itemNodes = this.state.data.map(function(item) {
            return <Item title={item.title} index={item.index} image={item.image} text={item.text}></Item>
        });
        return (
            <ul className="itemList">
                {itemNodes}
            </ul>
        );
    }
});
React.renderComponent(
    <List url="items.json" />,
    document.getElementById('listContainer')
);
