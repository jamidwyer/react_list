/** @jsx React.DOM */
var Item = React.createClass({
    render: function() {
        return (
            <li className="listItem">
                <div>
                    <span>{this.props.index}</span>
                </div>
                <div>
                    <img src={this.props.image} />
                    <a href={this.props.url}>{this.props.title}</a><br />
                    {this.props.text}
                </div>
            </li>
        );
    }
});