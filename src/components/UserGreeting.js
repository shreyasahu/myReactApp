import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {


    return this.state.isLoggedIn && <div>Welcome Vishwas</div>

    //     let message 
    //     if (this.state.isLoggedIn)
    //     {
    //         message=<div>Welcome Vishwaas</div>
    //     } else {
    //         message=<div> Welcome Guest</div>
    //     }
    // return <div>{message}</div>

// return this.state.isLoggedIn ? (
//     <div>Welcome Guest</div>
// ) : (
//     <div>Welcome Guest</div>
// )


//    if (this.state.isLoggedIn)
//    {
//        return (
//            <div>Welcome Vishwaas</div>
//        )
//    } else {
//         return (
//             <div>
//                 Welcome Guest
//             </div>
//         )

//    }

        // return (
        //     <div>
        //        <div>  Welcome Shreya </div>
        //        <div>  Welcome Guest </div>
        //     </div>
        // )
    }
}

export default UserGreeting
