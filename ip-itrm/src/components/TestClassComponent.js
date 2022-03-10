import React from "react";

class ClassTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {month: '04'};
    }

    //part of the life cycle
    async componentDidMount(){
        let m = await this.getMonth();
        this.setState({ month: m });
    }

    //regular promise function
    getMonth(){
        return new Promise((resolve, reject)=>{
            resolve(parseInt(new Date().getMonth()) + 1)
        })
    }


    render(){
        return (
            <div>
                This is the current month {this.state.month}
            </div>
        )
    }
}

export default ClassTest