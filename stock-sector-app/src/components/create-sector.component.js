import React, { Component } from 'react';

export default class CreateSector extends Component {

    constructor(props) {
        super(props);
        
        this.onChangeSector = this.onChangeSector.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            sector: [],
        }
    }

    onChangeSector(e) {
        this.setState({
            sector: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Sector: ${this.state.sector}`);

        this.setState({
            sector: [],
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Sector</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="sector-group">
                        <label>Sector</label>
                        <input type="text"
                                className="form-control"
                                value={this.state.sector}
                                onChange={this.onChangeSector}
                                />
                    </div>
                <div className="form-group">
                    <input type="submit" value="Create Sector" className="btn btn-primary"/>
                </div>

                </form>

            </div>
        )
    }
}